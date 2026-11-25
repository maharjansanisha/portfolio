"use client";

import { LocalTime, timePlaceholder } from "./local-time";
import { useVisitorCity } from "./use-visitor-city";

/**
 * "City · time", both for the visitor's approximate city. If the city is
 * unknown, only the browser's time. No time shows until the lookup ends, so the
 * clock never jumps from one time zone to another.
 */
export function CityTime() {
  const visitor = useVisitorCity();
  const location = visitor.status === "ready" ? visitor.location : null;

  return (
    <span className="flex min-w-0 items-center gap-1 whitespace-nowrap">
      {location && (
        <>
          {/* Long names are shortened so they cannot push the header apart. */}
          <span className="truncate tablet:max-w-32 laptop:max-w-60">{location.city}</span>{" "}
          <span aria-hidden="true">·</span>{" "}
        </>
      )}
      {visitor.status === "loading" ? (
        <span className="tabular-nums">{timePlaceholder}</span>
      ) : (
        <LocalTime timeZone={location?.timeZone} />
      )}
    </span>
  );
}
