"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 1000);
  return () => window.clearInterval(id);
}

// The server cannot know the visitor's "now", so it renders a placeholder.
const getServerSnapshot = () => "--:--";

/** The current time in the browser's own time zone, for example "5:31 PM". */
export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    // With no `timeZone` option, `Intl` uses the visitor's.
    () => new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(new Date()),
    getServerSnapshot,
  );

  return <span className="tabular-nums">{time}</span>;
}
