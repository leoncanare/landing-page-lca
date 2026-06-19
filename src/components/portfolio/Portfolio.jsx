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
    card.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${
      px * 6
    }deg) translateY(-6px)`;
    card.style.boxShadow = "0 30px 60px -30px var(--glow)";
    const img = card.querySelector("img.pf__img");
    if (img) img.style.transform = "scale(1.06)";
  };
  const onLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "none";
    card.style.boxShadow = "none";
    const img = card.querySelector("img.pf__img");
    if (img) img.style.transform = "none";
  };
  return { onPointerMove: onMove, onPointerLeave: onLeave };
};

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const [ref, shown] = useReveal();
  const tilt = useTilt();

  return (
    <article
      ref={ref}
      className={`pf__card reveal ${shown ? "is-visible" : ""}`}
      style={{ transitionDelay: `${project.delay}ms` }}
      {...tilt}
    >
      <div className="pf__media">
        <img className="pf__img" src={project.img} alt={project.title} />
      </div>
      <div className="pf__body">
        <h3 className="pf__title">{project.title}</h3>
        <div className="pf__row">
          <div className="pf__icons">
            {project.icons.map((src, i) => (
              <img key={i} src={src} width="18" height="18" alt="" />
            ))}
          </div>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="pf__demo"
          >
            {t("pf_demo")}
          </a>
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
