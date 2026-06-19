import { useEffect, useState } from "react";

/**
 * Returns the id of the section closest to the viewport midpoint.
 * Mirrors the prototype: a section is active when its top <= viewport * 0.35.
 */
export default function useScrollSpy(ids, offsetRatio = 0.35) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const mid = window.innerHeight * offsetRatio;
        let current = null;
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const r = el.getBoundingClientRect();
          if (r.top <= mid) current = id;
        });
        if (current) setActive(current);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids, offsetRatio]);

  return active;
}
