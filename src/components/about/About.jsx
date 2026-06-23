import React from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import FocusBanner from "./FocusBanner";
import ME from "../../assets/images/profile/me-about.png";
import "./about.css";

const GradCap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const UnivBuilding = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V10" />
    <path d="M9 21V10" />
    <path d="M15 21V10" />
    <path d="M19 21V10" />
    <path d="M2 10h20" />
    <path d="M12 3l10 7H2l10-7z" />
  </svg>
);

const About = () => {
  const { t } = useTranslation();
  const [leftRef, leftShown] = useReveal();
  const [rightRef, rightShown] = useReveal();
  const [headRef, headShown] = useReveal();

  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div
          ref={headRef}
          className={`section-head reveal ${headShown ? "is-visible" : ""}`}
        >
          <p className="eyebrow">{t("about_ey")}</p>
          <h2 className="section-h2">{t("about_h")}</h2>
        </div>

        <div className="about__grid">
          <div
            ref={leftRef}
            className={`about__left reveal ${leftShown ? "is-visible" : ""}`}
          >
            <div className="about__photo-wrap">
              <div className="about__photo-halo" />
              <div className="about__photo">
                <img src={ME} alt="León Arellano" />
              </div>
            </div>
            <div className="about__cards">
              <div className="about__card">
                <span className="about__card-icon">
                  <GradCap />
                </span>
                <div>
                  <div className="about__card-title">{t("about_c1t")}</div>
                  <div className="about__card-sub">{t("about_c1s")}</div>
                </div>
              </div>
              <div className="about__card">
                <span className="about__card-icon">
                  <UnivBuilding />
                </span>
                <div>
                  <div className="about__card-title">{t("about_c2t")}</div>
                  <div className="about__card-sub">{t("about_c2s")}</div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`about__right reveal ${rightShown ? "is-visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="about__lead">
              {t("about_lead_a")}
              <span className="grad-text">{t("about_lead_b")}</span>.
            </p>
            <p
              className="about__p"
              dangerouslySetInnerHTML={{ __html: t("about_p1") }}
            />
            <p
              className="about__p"
              dangerouslySetInnerHTML={{ __html: t("about_p2") }}
            />
            <p
              className="about__p about__p--last"
              dangerouslySetInnerHTML={{ __html: t("about_p3") }}
            />
            <FocusBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
