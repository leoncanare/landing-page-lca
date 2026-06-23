import React from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import UNIR from "../../assets/images/logos/unir-logo.png";
import ATMIRA from "../../assets/images/logos/atmira-logo.png";
import AEGON from "../../assets/images/logos/aegon-logo.png";
import BOSONIT from "../../assets/images/logos/bosonit-letters-logo.png";
import "./strip.css";

const LOGOS = [
  { src: UNIR, alt: "UNIR", h: 55, experienceId: "unir" },
  { src: ATMIRA, alt: "Atmira", h: 35, experienceId: "atmira" },
  { src: AEGON, alt: "AEGON", h: 36, experienceId: "aegon" },
  { src: BOSONIT, alt: "Bosonit", h: 27, experienceId: "micaela" },
];

const CompaniesStrip = () => {
  const { t } = useTranslation();
  const [labelRef, labelShown] = useReveal();
  const [logosRef, logosShown] = useReveal();

  return (
    <section className="strip section--alt">
      <div className="strip__inner">
        <span
          ref={labelRef}
          className={`strip__label reveal ${labelShown ? "is-visible" : ""}`}
        >
          {t("strip_label")}
        </span>
        <div
          ref={logosRef}
          className={`strip__logos reveal ${logosShown ? "is-visible" : ""}`}
          style={{ transitionDelay: "80ms" }}
        >
          {LOGOS.map((l) => (
            <a
              key={l.alt}
              className="strip__logo-link"
              href={`#${l.experienceId}`}
              aria-label={`${l.alt} — ${t("nav_exp")}`}
            >
              <img
                className="strip__logo"
                src={l.src}
                alt=""
                style={{ height: l.h }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesStrip;
