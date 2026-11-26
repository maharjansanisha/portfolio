"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/cn";

const intervalMs = 2800;
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
/** Where the role shares one slot with the local time: see `home.css`. */
const sharedSlotQuery = "(width < 43.75rem)";

function useMediaQuery(query: string, serverValue: boolean) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

/**
 * Shows one role at a time, in order. With reduced motion, and until the page
 * hydrates, it shows the first. Assistive technology gets all of them as one
 * fixed line, so nothing changes or is announced while the roles rotate.
 *
 * Accepted accessibility limitation: by design there is no pause or stop control.
 * Visitors who have not asked for reduced motion cannot stop the rotation (or the
 * role and time taking turns on phones), so do not claim the header meets WCAG
 * 2.2.2, Pause, Stop, Hide (Level A).
 */
export function RoleRotator({ roles }: { roles: readonly [string, ...string[]] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [turn, setTurn] = useState(0);
  // The server cannot know the preference, so it assumes no motion.
  const reducedMotion = useMediaQuery(reducedMotionQuery, true);
  const sharedSlot = useMediaQuery(sharedSlotQuery, false);

  useEffect(() => {
    if (reducedMotion) return;

    const advance = () => setTurn((current) => current + 1);

    if (!sharedSlot) {
      const id = window.setInterval(advance, intervalMs);
      return () => window.clearInterval(id);
    }

    // On phones a separate timer would drift against the CSS rotation. The other
    // item's cycle restarts just as the role is hidden, so change the role then.
    const node = ref.current;
    const slot = node?.closest(".header-rotator");
    if (!node || !slot) return;

    const onIteration = (event: Event) => {
      const item = event.target;
      if (item instanceof Element && item.parentElement === slot && !item.contains(node)) {
        advance();
      }
    };

    slot.addEventListener("animationiteration", onIteration);
    return () => slot.removeEventListener("animationiteration", onIteration);
  }, [reducedMotion, sharedSlot]);

  const active = reducedMotion ? 0 : turn % roles.length;
  const leaving = reducedMotion || turn === 0 ? -1 : (turn - 1) % roles.length;

  return (
    <span ref={ref} className="block">
      <span className="sr-only">{roles.join(", ")}</span>
      {/* Stacked in one cell, so the longest role sets a width that never changes. */}
      <span aria-hidden="true" className="grid select-none">
        {roles.map((role, index) => (
          <span
            key={role}
            data-active={index === active || undefined}
            className={cn(
              "col-start-1 row-start-1 transition-[opacity,translate] ease-settle",
              // The new role waits briefly, so the two are never both clearly visible.
              index === active
                ? "translate-y-0 opacity-100 delay-200 duration-slow"
                : "opacity-0 duration-base",
              index !== active && (index === leaving ? "-translate-y-2" : "translate-y-2"),
            )}
          >
            {role}
          </span>
        ))}
      </span>
    </span>
  );
}
