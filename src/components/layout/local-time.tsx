"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 1000);
  return () => window.clearInterval(id);
}

/** Shown until the right time is known. The server cannot know it. */
export const timePlaceholder = "--:--";

const getServerSnapshot = () => timePlaceholder;

/** For example "5:31 PM". With no `timeZone`, `Intl` uses the browser's own. */
function formatTime(timeZone: string | undefined) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  }).format(new Date());
}

/**
 * The current time, checked every second. `Intl` applies the time zone's
 * daylight-saving rules to each reading.
 */
export function LocalTime({ timeZone }: { timeZone?: string }) {
  const time = useSyncExternalStore(subscribe, () => formatTime(timeZone), getServerSnapshot);

  return <span className="tabular-nums">{time}</span>;
}
