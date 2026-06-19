import React, { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import TimelineItem from "./TimelineItem";
import timelineData from "../../data/timelineData";
import "./experience.css";

const ExperienceTimeline = () => {
  const { t, i18n } = useTranslation();
  const [headRef, headShown] = useReveal();

  const trackRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);
  const nodeRefs = useRef([]);
  const geom = useRef({ top: 0 });

  const layout = useCallback(() => {
    const track = trackRef.current;
    const line = lineRef.current;
    const fill = fillRef.current;
    const nodes = nodeRefs.current.filter(Boolean);
    if (!track || !line || !nodes.length) return;

    const tr = track.getBoundingClientRect();
    const first = nodes[0].getBoundingClientRect();
    const last = nodes[nodes.length - 1].getBoundingClientRect();
    const top = first.top - tr.top + first.height / 2;
    const bottom = last.top - tr.top + last.height / 2;
    geom.current.top = top;
    line.style.top = `${top}px`;
    line.style.bottom = "auto";
    line.style.height = `${bottom - top}px`;
    if (fill) fill.style.top = `${top}px`;
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    const nodes = nodeRefs.current.filter(Boolean);
    if (!track || !fill || !nodes.length) return;

    const tr = track.getBoundingClientRect();
    const trigger = window.innerHeight * 0.6;
    let lastTop = 0;
    nodes.forEach((node) => {
      const nr = node.getBoundingClientRect();
      const on = nr.top < trigger;
      node.classList.toggle("is-active", on);
      if (on) {
        lastTop = Math.max(lastTop, nr.top - tr.top + nr.height / 2);
      }
    });
    fill.style.height = `${Math.max(0, lastTop - geom.current.top)}px`;
  }, []);

  useEffect(() => {
    let raf = null;
    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        onScroll();
      });
    };
    const handleResize = () => {
      layout();
      onScroll();
    };

    layout();
    onScroll();
    requestAnimationFrame(() => {
      layout();
      onScroll();
    });
    const timers = [
      setTimeout(handleResize, 400),
      setTimeout(handleResize, 1200),
    ];

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleResize);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      timers.forEach(clearTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [layout, onScroll]);

  // Re-measure when translated text changes height (language switch)
  useEffect(() => {
    const id = setTimeout(() => {
      layout();
      onScroll();
    }, 50);
    return () => clearTimeout(id);
  }, [i18n.language, layout, onScroll]);

  return (
    <section id="experience" className="section-pad">
      <div className="tl__container">
        <div
          ref={headRef}
          className={`section-head reveal ${headShown ? "is-visible" : ""}`}
        >
          <p className="eyebrow">{t("ex_ey")}</p>
          <h2 className="section-h2">{t("ex_h")}</h2>
        </div>

        <div className="tl__track" ref={trackRef}>
          <div className="tl__line" ref={lineRef} />
          <div className="tl__fill" ref={fillRef} />
          {timelineData.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={i === timelineData.length - 1}
              nodeRef={(el) => (nodeRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
