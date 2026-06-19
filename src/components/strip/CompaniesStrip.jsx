import React from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import UNIR from "../../assets/images/logos/unir-logo.png";
import AEGON from "../../assets/images/logos/aegon-logo.png";
import BOSONIT from "../../assets/images/logos/bosonit-letters-logo.png";
import "./strip.css";

const LOGOS = [
  { src: UNIR, alt: "UNIR", h: 40 },
  { src: AEGON, alt: "AEGON", h: 36 },
  { src: BOSONIT, alt: "Bosonit", h: 31 },
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
            <img
              key={l.alt}
              className="strip__logo"
              src={l.src}
              alt={l.alt}
              style={{ height: l.h }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesStrip;
