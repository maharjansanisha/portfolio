"use client";

import { LocalTime } from "./local-time";
import { useVisitorCity } from "./use-visitor-city";

/** "City • time" for the visitor, or the time alone when the city is unknown. */
export function CityTime() {
  const city = useVisitorCity();

  return (
    <span className="flex min-w-0 items-center gap-1 whitespace-nowrap">
      {city && (
        <>
          {/* Long names are shortened so they cannot push the header apart. */}
          <span className="truncate tablet:max-w-32 laptop:max-w-60">{city}</span>{" "}
          <span aria-hidden="true">•</span>{" "}
        </>
      )}
      <LocalTime />
    </span>
  );
}
