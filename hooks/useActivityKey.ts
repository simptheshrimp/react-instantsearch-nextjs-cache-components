"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Returns a key that increments every time the component transitions
 * from Activity hidden → visible (i.e. when navigating back to a cached route).
 *
 * Use this as a `key` prop on components that don't support React's Activity API
 * (e.g. InstantSearchNext) to force a full remount on re-show.
 */
export function useActivityKey() {
  const hasMounted = useRef(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (hasMounted.current) {
      // Effect re-ran after Activity hidden→visible transition — force remount
      setKey((k) => k + 1);
    } else {
      hasMounted.current = true;
    }
  }, []);

  return key;
}
