import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "../styles/servicepage.css";
import useReveal from "./Hooks/useReveal";
import useTitles from "./Hooks/useTitles";
import { servicesData } from "../data/servicesData";
import { useLocale } from "../i18n/LocaleProvider";
import "../styles/services.css";

const CALENDLY_URL = "https://calendly.com/hello-lines-of-code/15min";
const WHATSAPP_URL = "https://wa.me/2348078018504";

function RevealBlock({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-fade ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  );
}

function ServicePage() {
  const { slug } = useParams();
  const { t, tRaw } = useLocale();
  const service = servicesData[slug];
  const base = `services.items.${slug}`;
  const serviceConfig = servicesData[slug];

  useTitles(
    service ? `${t(`${base}.title`)} | Lines of Code Technologies` : "Services",
  );

  if (!service) return <Navigate to="/" replace />;

  const rawFeatures = tRaw(`${base}.features`);
  const features = Array.isArray(rawFeatures) ? rawFeatures : [];

  return (
    <div className="service-page">
      <div className="service-hero">
        <Link to="/#serv" className="service-back">
          {t("services.page.back")}
        </Link>
        <span className="service-number">{service.number}</span>
        <h1 className="service-page-title">{t(`${base}.title`)}</h1>
        <p className="service-tagline">{t(`${base}.tagline`)}</p>
      </div>

      <RevealBlock>
        <p className="service-description">{t(`${base}.description`)}</p>
      </RevealBlock>

      <RevealBlock delay={0.1}>
        <div className="service-features">
          <h2>{t("services.page.whatYouGet")}</h2>
          <ul>
            {features.map((f) => (
              <li key={f}>
                <span className="check">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </RevealBlock>

      <RevealBlock delay={0.2}>
        <div className="service-ideal">
          <h2>{t("services.page.idealFor")}</h2>
          <p>{t(`${base}.idealFor`)}</p>
        </div>
      </RevealBlock>
      <RevealBlock delay={0.3}>
        {serviceConfig?.subServices && serviceConfig.subServices.length > 0 && (
          <div>
            <h4 style={{ fontFamily: "Playfair Display, serif" }}>
              Other packages available under this service
            </h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {serviceConfig.subServices.map((sub) => {
                const subBase = `services.items.${sub.slug}`;
                return (
                  <div
                    key={sub.slug}
                    style={{
                      fontFamily: "Playfair Display, serif",

                      margin: "20px 0",
                      borderRadius: "10px",
                      boxShadow: "0 1px 3px var(--shadow)",
                      width: "300px",
                      padding: "32px 24px",
                    }}
                  >
                    <Link
                      to={`/service/${sub.slug}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <h4>{t(`${subBase}.title`)}</h4>
                      <p>{t(`${subBase}.summary`)}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </RevealBlock>
      <RevealBlock delay={0.4}>
        <div className="service-cta">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            {t("services.page.bookAudit")}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-text"
          >
            {t("services.page.whatsapp")}
          </a>
        </div>
      </RevealBlock>
    </div>
  );
}

export default ServicePage;
