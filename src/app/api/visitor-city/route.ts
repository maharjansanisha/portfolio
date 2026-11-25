import { simulateVercelHeaders } from "@/lib/simulate-vercel-headers";
import { parseVisitorLocation, type VisitorCityResponse } from "@/lib/visitor-city";

/**
 * Vercel derives these headers from the visitor's IP address before the request
 * reaches the app, so the app never reads the address. Without both headers (for
 * example in local development or on another host), the location is `null`.
 *
 * Do not log the request or its headers here.
 */
export function GET(request: Request) {
  // Does nothing outside `next dev`.
  const headers = simulateVercelHeaders(request.headers);
  const body: VisitorCityResponse = {
    location: parseVisitorLocation(
      headers.get("x-vercel-ip-city"),
      headers.get("x-vercel-ip-timezone"),
    ),
  };

  // Each answer belongs to one visitor, so no cache may keep it.
  return Response.json(body, { headers: { "Cache-Control": "private, no-store" } });
}
