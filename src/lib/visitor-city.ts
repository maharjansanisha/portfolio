/** Same-origin endpoint that returns the visitor's approximate city and its time zone. */
export const visitorCityPath = "/api/visitor-city";

/** A city is only useful with its own time zone, so the two travel together. */
export type VisitorLocation = { city: string; timeZone: string };

export type VisitorCityResponse = { location: VisitorLocation | null };

const maxLength = 80;

/** Area/Location names such as `Asia/Kathmandu`, or `UTC`. Excludes offsets like `+05:45`. */
const timeZoneName = /^[A-Za-z][A-Za-z0-9_+\-/]*$/;

/**
 * Cleans a value a hosting platform puts in a request header. Non-ASCII
 * characters arrive percent-encoded. Returns `null` for anything unusable.
 */
function parseHeader(value: string | null): string | null {
  if (!value) return null;

  try {
    const text = decodeURIComponent(value).trim();
    return text && text.length <= maxLength ? text : null;
  } catch {
    return null;
  }
}

/** Returns the name only if this runtime's `Intl` can format times in it. */
function parseTimeZone(value: string | null): string | null {
  if (!value || !timeZoneName.test(value)) return null;

  try {
    // Throws a `RangeError` for a time zone it does not know.
    new Intl.DateTimeFormat("en-US", { timeZone: value });
    return value;
  } catch {
    return null;
  }
}

/** Builds a location from raw values, or `null` unless both are usable. */
export function parseVisitorLocation(
  rawCity: string | null,
  rawTimeZone: string | null,
): VisitorLocation | null {
  const city = parseHeader(rawCity);
  const timeZone = parseTimeZone(parseHeader(rawTimeZone));

  return city && timeZone ? { city, timeZone } : null;
}

/**
 * Checks the endpoint's JSON in the browser, whose time zone data can differ
 * from the server's. The city is already decoded, so it is not decoded again.
 */
export function readVisitorLocation(body: unknown): VisitorLocation | null {
  const location = (body as Partial<VisitorCityResponse> | null)?.location;
  if (typeof location?.city !== "string" || typeof location.timeZone !== "string") return null;

  const timeZone = parseTimeZone(location.timeZone);
  return location.city && timeZone ? { city: location.city, timeZone } : null;
}
