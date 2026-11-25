import { parseCityHeader, type VisitorCityResponse } from "@/lib/visitor-city";

/**
 * Vercel derives this header from the visitor's IP address before the request
 * reaches the app, so the app never reads the address. Without the header (local
 * development or another host), the city is `null`.
 *
 * Do not log the request or its headers here.
 */
export function GET(request: Request) {
  const body: VisitorCityResponse = {
    city: parseCityHeader(request.headers.get("x-vercel-ip-city")),
  };

  // Each answer belongs to one visitor, so no cache may keep it.
  return Response.json(body, { headers: { "Cache-Control": "private, no-store" } });
}
