import React, { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import "./contact.css";

// Replace with your Cloudflare Turnstile site key
const TURNSTILE_SITE_KEY = "0x4AAAAAADp6nODhASsViTXm";

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [token, setToken] = useState(null);
  const [headRef, headShown] = useReveal();
  const [leftRef, leftShown] = useReveal();
  const [formRef, formShown] = useReveal();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    try {
      await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token }),
      });
    } catch (err) {
      console.error("Send error:", err);
    }

    setSent(true);
    setToken(null);
    form.current.reset();
    setTimeout(() => setSent(false), 2200);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="contact__container">
        <div
          ref={headRef}
          className={`section-head reveal ${headShown ? "is-visible" : ""}`}
        >
          <p className="eyebrow">{t("ct_ey")}</p>
          <h2 className="section-h2">{t("ct_h")}</h2>
          <p className="contact__sub">{t("ct_sub")}</p>
        </div>

        <div className="contact__grid">
          <div
            ref={leftRef}
            className={`contact__cards reveal ${leftShown ? "is-visible" : ""}`}
          >
            <a href="mailto:leoncanare@gmail.com" className="contact__card">
              <span className="contact__icon">
                <MailIcon />
              </span>
              <div>
                <div className="contact__card-label">Email</div>
                <div className="contact__card-value">leoncanare@gmail.com</div>
              </div>
            </a>
            <a href="tel:+34679530541" className="contact__card">
              <span className="contact__icon">
                <PhoneIcon />
              </span>
              <div>
                <div className="contact__card-label">{t("ct_phone")}</div>
                <div className="contact__card-value">+34 679 530 541</div>
              </div>
            </a>
          </div>

          <form
            ref={(el) => {
              form.current = el;
              formRef.current = el;
            }}
            onSubmit={onSubmit}
            className={`contact__form reveal ${formShown ? "is-visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            <input
              type="text"
              name="name"
              placeholder={t("ph_name")}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("ph_email")}
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder={t("ph_msg")}
            ></textarea>
            {token ? (
              <div className="contact__verified">
                <CheckIcon />
                <span>Verificado</span>
              </div>
            ) : (
              <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={setToken}
                onExpire={() => setToken(null)}
                options={{ size: "flexible" }}
                style={{ width: "100%" }}
              />
            )}
            <button
              type="submit"
              className={`contact__btn ${sent ? "is-sent" : ""}`}
              disabled={!token}
            >
              <span>{sent ? t("ct_sent") : t("ct_send")}</span>
              <span className="contact__btn-icon">
                {sent ? <CheckIcon /> : <SendIcon />}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
