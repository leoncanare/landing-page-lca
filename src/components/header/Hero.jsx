import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import useCountUp from "../../hooks/useCountUp";
import ME from "../../assets/images/profile/me.png";
import "./header.css";

const Reveal = ({ delay = 0, className = "", children, as: Tag = "div" }) => {
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

const Stat = ({ target, suffix, label }) => {
  const [ref, value] = useCountUp(target);
  return (
    <div className="hero__stat">
      <div className="hero__stat-num" ref={ref}>
        {value}
        {suffix && <span className="hero__stat-suffix">{suffix}</span>}
      </div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const roles = t("roles", { returnObjects: true });
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const idxRef = useRef(0);

  useEffect(() => {
    setRoleIdx(0);
    idxRef.current = 0;
  }, [i18n.language]);

  useEffect(() => {
    const list = Array.isArray(roles) ? roles : [];
    if (list.length <= 1) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        idxRef.current = (idxRef.current + 1) % list.length;
        setRoleIdx(idxRef.current);
        setFade(true);
      }, 360);
    }, 2600);
    return () => clearInterval(timer);
  }, [roles]);

  const role = Array.isArray(roles) ? roles[roleIdx] : "";

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__aurora hero__aurora--1" />
        <div className="hero__aurora hero__aurora--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        <div className="hero__text">
          <Reveal className="hero__status chip-pill">
            <span className="hero__status-dot" />
            <span>{t("hero_status")}</span>
          </Reveal>

          <Reveal as="p" delay={60} className="hero__hello">
            {t("hero_hello")}
          </Reveal>

          <Reveal as="h1" delay={100} className="hero__name">
            León Arellano
          </Reveal>

          <Reveal delay={160} className="hero__role">
            <span className="hero__role-static">{t("hero_iam")}</span>{" "}
            <span
              className="hero__role-word"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {role}
            </span>
            <span className="hero__caret" />
          </Reveal>

          <Reveal as="p" delay={220} className="hero__sub">
            {t("hero_sub")}
          </Reveal>

          <Reveal delay={250} className="hero__focus">
            <span className="ping">
              <span className="ping__wave" />
              <span className="ping__dot" />
            </span>
            <span className="hero__focus-text">
              <span className="hero__focus-label">{t("hero_focus_l")}</span>
              <span className="hero__focus-phrase">{t("hero_focus")}</span>
            </span>
          </Reveal>

          <Reveal delay={280} className="hero__ctas">
            <a href="#contact" className="btn-grad">
              {t("hero_cta1")}
            </a>
            <a href="#experience" className="btn-chip">
              {t("hero_cta2")}
            </a>
            <div className="hero__socials">
              <a href="https://github.com/leoncanare" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/le%C3%B3n-cantalapiedra-arellano" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={340} className="hero__stats">
            <Stat target={5} suffix="+" label={t("stat_years")} />
            <div className="hero__stat-div" />
            <Stat target={4} label={t("stat_proj")} />
            <div className="hero__stat-div" />
            <Stat target={20} suffix="+" label={t("stat_tech")} />
          </Reveal>
        </div>

        <Reveal delay={180} className="hero__visual">
          <div className="hero__ring hero__ring--dashed" />
          <div className="hero__ring hero__ring--solid" />
          <div className="hero__ring-glow" />
          <div className="hero__photo">
            <img src={ME} alt="León Arellano" />
          </div>
          <div className="hero__chip hero__chip--angular" title="Angular">
            <img src="https://cdn.simpleicons.org/angular/dd0031" width="28" height="28" alt="Angular" />
          </div>
          <div className="hero__chip hero__chip--ts" title="TypeScript">
            <img src="https://cdn.simpleicons.org/typescript/3178c6" width="28" height="28" alt="TypeScript" />
          </div>
          <div className="hero__chip hero__chip--claude" title="Claude">
            <img src="https://cdn.simpleicons.org/anthropic/D97757" width="28" height="28" alt="Claude" />
          </div>
          <div className="hero__chip hero__chip--cursor" title="Cursor">
            <img src="https://cdn.simpleicons.org/cursor/000000" width="28" height="28" alt="Cursor" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
