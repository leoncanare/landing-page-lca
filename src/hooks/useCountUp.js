import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `target` once the element is revealed.
 * Returns [ref, value].
 */
export default function useCountUp(target, duration = 800) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }

    const run = () => {
      if (done.current) return;
      done.current = true;
      const steps = 28;
      const stepVal = Math.max(1, Math.round(target / steps));
      const interval = Math.max(16, Math.round(duration / steps));
      let cur = 0;
      const t = setInterval(() => {
        cur += stepVal;
        if (cur >= target) {
          cur = target;
          clearInterval(t);
        }
        setValue(cur);
      }, interval);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, value];
}
