/** Same-origin endpoint that returns the visitor's approximate city. */
export const visitorCityPath = "/api/visitor-city";

export type VisitorCityResponse = { city: string | null };

const maxLength = 80;

/**
 * Cleans the city name a hosting platform puts in a request header. Non-ASCII
 * characters arrive percent-encoded. Returns `null` for anything unusable.
 */
export function parseCityHeader(value: string | null): string | null {
  if (!value) return null;

  try {
    const city = decodeURIComponent(value).trim();
    return city && city.length <= maxLength ? city : null;
  } catch {
    return null;
  }
}
