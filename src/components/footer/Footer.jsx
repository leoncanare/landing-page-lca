import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#home" className="wordmark footer__logo">
          lcanare
        </a>
        <span className="footer__rights">{t("ft_rights")}</span>
        <a href="#home" className="footer__top">
          {t("ft_top")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
