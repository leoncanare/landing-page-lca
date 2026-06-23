import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import useScrollSpy from "../../hooks/useScrollSpy";
import "./nav.css";

const SECTIONS = ["home", "about", "skills", "experience", "work", "contact"];
const LINKS = [
  { id: "about", key: "nav_about" },
  { id: "skills", key: "nav_skills" },
  { id: "experience", key: "nav_exp" },
  { id: "work", key: "nav_work" },
  { id: "contact", key: "nav_contact" },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
  </svg>
);
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const Nav = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const active = useScrollSpy(SECTIONS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#home" aria-label="lcanare" className="nav__logo">
          <span className="wordmark">lcanare</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="nav__lang chip-pill">
            <button
              className={i18n.language === "en" ? "is-active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={i18n.language === "es" ? "is-active" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
          </div>
          <button
            className="nav__theme chip-pill"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
