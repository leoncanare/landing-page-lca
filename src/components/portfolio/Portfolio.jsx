import React from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import portfolioData from "../../data/portfolioData";
import "./portfolio.css";

const useTilt = () => {
  const onMove = (e) => {
    const card = e.currentTarget;
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-6px)`;
    card.style.boxShadow = "0 30px 60px -30px var(--glow)";
  };
  const onLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "none";
    card.style.boxShadow = "none";
  };
  return { onPointerMove: onMove, onPointerLeave: onLeave };
};

const IconExternal = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [ref, shown] = useReveal();
  const tilt = useTilt();
  const isGithub = project.demoLabel === "GitHub ↗";

  return (
    <article
      ref={ref}
      className={`pf__card reveal ${shown ? "is-visible" : ""}`}
      style={{ transitionDelay: `${project.delay}ms` }}
      {...tilt}
    >
      <div className="pf__media">
        {project.video ? (
          <video
            className="pf__img"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img className="pf__img" src={project.img} alt={project.title} />
        )}
      </div>
      <div className="pf__body">
        <h3 className="pf__title">{project.title}</h3>
        <p className="pf__desc">{t(project.descKey)}</p>
        <div className="pf__row">
          <div className="pf__icons">
            {project.icons.map((src, i) => (
              <img key={i} src={src} width="22" height="22" alt="" />
            ))}
          </div>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="pf__demo"
              aria-label={isGithub ? "GitHub" : "Demo"}
            >
              {isGithub ? <IconGithub /> : <IconExternal />}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Portfolio = () => {
  const { t } = useTranslation();
  const [headRef, headShown] = useReveal();

  return (
    <section id="work" className="section-pad section--alt">
      <div className="container">
        <div
          ref={headRef}
          className={`section-head reveal ${headShown ? "is-visible" : ""}`}
        >
          <p className="eyebrow">{t("pf_ey")}</p>
          <h2 className="section-h2">{t("pf_h")}</h2>
        </div>
        <div className="pf__grid">
          {portfolioData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
