import React, { useEffect, useRef } from "react";
import "./cursor.css";

const CursorGlow = () => {
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (
      !window.matchMedia ||
      !window.matchMedia("(pointer:fine)").matches
    ) {
      return;
    }

    const glow = glowRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    let tx = 0,
      ty = 0,
      gx = 0,
      gy = 0,
      rx = 0,
      ry = 0,
      seen = false;
    let raf = null;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        seen = true;
        if (glow) glow.style.opacity = "0.85";
        if (ring) ring.style.opacity = "1";
        if (dot) dot.style.opacity = "1";
      }
      if (dot) dot.style.transform = `translate(${tx}px, ${ty}px)`;
      const interactive = e.target.closest(
        "a,button,[data-tilt],.skill,.pf__card,input,textarea"
      );
      if (ring) {
        if (interactive) {
          ring.style.width = "44px";
          ring.style.height = "44px";
          ring.style.margin = "-22px 0 0 -22px";
          ring.style.borderColor = "var(--accent)";
        } else {
          ring.style.width = "30px";
          ring.style.height = "30px";
          ring.style.margin = "-15px 0 0 -15px";
          ring.style.borderColor = "var(--accent2)";
        }
      }
    };

    const loop = () => {
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      if (glow) glow.style.transform = `translate(${gx}px, ${gy}px)`;
      rx += (tx - rx) * 0.28;
      ry += (ty - ry) * 0.28;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    loop();
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CursorGlow;
