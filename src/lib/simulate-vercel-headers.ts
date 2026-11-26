/**
 * Development only: stands in for the location headers that Vercel adds, using
 * values from the developer's environment. Server code only; see "Simulating a
 * location" in the README.
 *
 * In any other environment the request's headers are returned unchanged. A
 * variable that is unset or empty leaves its header unchanged too.
 */
export function simulateVercelHeaders(headers: Headers): Headers {
  if (process.env.NODE_ENV !== "development") return headers;

  const overrides = {
    "x-vercel-ip-city": process.env.DEV_VERCEL_IP_CITY,
    "x-vercel-ip-timezone": process.env.DEV_VERCEL_IP_TIMEZONE,
  };

  const result = new Headers(headers);
  for (const [name, value] of Object.entries(overrides)) {
    // Percent-encoded as Vercel does it: a header cannot hold every character.
    if (value) result.set(name, encodeURIComponent(value));
  }

  return result;
}
