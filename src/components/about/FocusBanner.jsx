import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    id: "vscode-unir",
    icon: "https://cdn.simpleicons.org/anthropic/D97757",
    titleKey: "proj_paco_title",
    descKey: "proj_paco",
  },
  {
    id: "laminarra",
    icon: "https://cdn.simpleicons.org/astro/ff5d01",
    titleKey: "proj_laminarra_title",
    descKey: "proj_laminarra",
  },
];

const FocusBanner = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncHover = (event) => setCanHover(event.matches);
    syncHover(mq);
    mq.addEventListener("change", syncHover);
    return () => mq.removeEventListener("change", syncHover);
  }, []);

  const maxHeight =
    expanded && panelRef.current ? `${panelRef.current.scrollHeight}px` : "0px";

  return (
    <div
      className={`focus ${expanded ? "is-open" : ""}`}
      onMouseEnter={canHover ? () => setExpanded(true) : undefined}
      onMouseLeave={canHover ? () => setExpanded(false) : undefined}
    >
      <button
        type="button"
        className="focus__head"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
      >
        <span className="ping">
          <span className="ping__wave" />
          <span className="ping__dot" />
        </span>
        <span className="focus__head-text">
          <span className="focus__label">{t("hero_focus_l")}</span>
          <span className="focus__phrase">{t("about_focus")}</span>
        </span>
        <svg
          className="focus__chevron"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="focus__panel" ref={panelRef} style={{ maxHeight }}>
        <div className="focus__panel-inner">
          {PROJECTS.map((p) => (
            <div className="focus__project" key={p.id}>
              <img src={p.icon} width="20" height="20" alt="" />
              <div>
                <div className="focus__project-title">{t(p.titleKey)}</div>
                <div className="focus__project-desc">{t(p.descKey)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusBanner;
