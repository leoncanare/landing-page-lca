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
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
