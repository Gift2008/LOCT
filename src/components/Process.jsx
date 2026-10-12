// Process.jsx
import React from "react";
import "../styles/process.css";
import useReveal from "./Hooks/useReveal";
import { useLocale } from "../i18n/LocaleProvider";

function ProcessStep({ number, title, desc, delay, isLast }) {
  const [ref, visible] = useReveal(0.3);

  return (
    <div
      ref={ref}
      className={`process-step ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
      id="process"
    >
      <div className="step-marker">
        <span className="step-number">{number}</span>
        {!isLast && <span className="step-line" />}
      </div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <p className="step-desc">{desc}</p>
      </div>
    </div>
  );
}

function Process() {
  const { t } = useLocale();

  const steps = [
    {
      number: "01",
      title: t("steps.step1.title"),
      desc: t("steps.step1.description"),
    },
    {
      number: "02",
      title: t("steps.step2.title"),
      desc: t("steps.step2.description"),
    },
    {
      number: "03",
      title: t("steps.step3.title"),
      desc: t("steps.step3.description"),
    },
    {
      number: "04",
      title: t("steps.step4.title"),
      desc: t("steps.step4.description"),
    },
  ];
  return (
    <section id="process" className="process">
      <p className="process-eyebrow">{t("process.eyebrow")}</p>
      <h2 className="process-heading">{t("process.heading")}</h2>

      <div className="process-list">
        {steps.map((s, i) => (
          <ProcessStep
            key={s.number}
            {...s}
            delay={i * 0.12}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Process;
