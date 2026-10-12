import React from "react";
import "../styles/services.css";
import useReveal from "./Hooks/useReveal";
import { Link } from "react-router-dom";
import { useLocale } from "../i18n/LocaleProvider";
import { servicesData } from "../data/servicesData";

function ServiceCard({ number, slug, delay }) {
  const [ref, visible] = useReveal();
  const { t } = useLocale();
  const base = `services.items.${slug}`;

  return (
    <div
      ref={ref}
      className={`service-card ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      <span className="service-number">{number}</span>
      <h3 className="service-title">{t(`${base}.title`)}</h3>
      <p className="service-desc">{t(`${base}.summary`)}</p>
    </div>
  );
}

function Services() {
  const { t } = useLocale();

  return (
    <section className="services" id="serv">
      <p className="services-eyebrow">{t("services.eyebrow")}</p>
      <h2 className="services-heading">{t("services.heading")}</h2>

      <div className="services-grid">
        {Object.entries(servicesData).map(([slug, { number }], i) => (
          <Link
            to={`/service/${slug}`}
            key={slug}
            style={{ textDecoration: "none" }}
          >
            <ServiceCard slug={slug} number={number} delay={i * 0.15} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;
