import React from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import skillsData from "../../data/skillsData";
import "./skills.css";

const SkillBadge = ({ skill }) => {
  if (skill.badge) {
    const cls = `skill__badge${skill.badgeGradient ? " skill__badge--grad" : ""}${
      skill.badgeMono ? " skill__badge--mono" : ""
    }`;
    return (
      <span
        className={cls}
        style={skill.badgeBg ? { background: skill.badgeBg } : undefined}
      >
        {skill.badge}
      </span>
    );
  }
  return (
    <img
      src={skill.icon}
      width="24"
      height="24"
      alt=""
      className={skill.mono ? "skill__icon--mono" : ""}
    />
  );
};

const SkillCard = ({ group }) => {
  const { t } = useTranslation();
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={`skills__card reveal ${shown ? "is-visible" : ""}`}
      style={{ transitionDelay: `${group.delay}ms` }}
    >
      <h3 className="skills__card-title">{t(group.titleKey)}</h3>
      <div className="skills__chips">
        {group.skills.map((skill) => (
          <div className={`skill${skill.wide ? " skill--wide" : ""}`} key={skill.name}>
            <SkillBadge skill={skill} />
            <div>
              <div className="skill__name">{skill.name}</div>
              <div className="skill__sub">{skill.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const [headRef, headShown] = useReveal();

  return (
    <section id="skills" className="section-pad section--alt">
      <div className="container">
        <div
          ref={headRef}
          className={`section-head reveal ${headShown ? "is-visible" : ""}`}
        >
          <p className="eyebrow">{t("sk_ey")}</p>
          <h2 className="section-h2">{t("sk_h")}</h2>
        </div>
        <div className="skills__grid">
          <SkillCard group={skillsData[0]} />
          <div className="skills__col-stack">
            <SkillCard group={skillsData[2]} />
            <SkillCard group={skillsData[3]} />
          </div>
          <SkillCard group={skillsData[1]} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
