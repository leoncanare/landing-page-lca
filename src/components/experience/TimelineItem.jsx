import React from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";

const TimelineItem = ({ item, nodeRef, isLast }) => {
  const { t } = useTranslation();
  const [ref, shown] = useReveal();

  return (
    <article
      id={item.id}
      ref={ref}
      className={`tl__item reveal ${shown ? "is-visible" : ""} ${
        isLast ? "tl__item--last" : ""
      }`}
    >
      <span ref={nodeRef} className="tl__node" />
      <div className="tl__card">
        <div className="tl__head">
          <div className="tl__head-main">
            <div
              className="tl__logo"
              style={{ padding: `0 ${item.logoPad}px` }}
            >
              <img
                src={item.logo}
                alt=""
                style={{ height: item.logoHeight }}
              />
            </div>
            <div>
              <h3 className="tl__role">{t(item.roleKey)}</h3>
              <span
                className={`tl__date ${item.current ? "tl__date--current" : ""}`}
              >
                {t(item.dateKey)}
              </span>
            </div>
          </div>
          {item.current && <span className="tl__now">{t("ex_now")}</span>}
        </div>

        <p className="tl__desc">{t(item.descKey)}</p>

        <ul className="tl__bullets">
          {item.bulletKeys.map((b) => (
            <li key={b}>
              <span className="tl__marker">▹</span>
              {t(b)}
            </li>
          ))}
        </ul>

        <div className="tl__tags">
          {item.tech.map((tag) => (
            <span className="tl__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TimelineItem;
