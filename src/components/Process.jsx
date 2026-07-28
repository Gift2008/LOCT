// Process.jsx
import React from "react";
import "../styles/process.css";
import useReveal from "./Hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We start with a quick call to understand your business, goals, and what your current site is (or isn't) doing for you.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Custom Figma designs built around your brand — you review and approve every screen before a line of code is written.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Your approved design gets built into a fast, responsive, production-ready site.",
  },
  {
    number: "04",
    title: "Deploy",
    desc: "We launch your site, connect your domain, and make sure everything runs smoothly in the real world.",
  },
  {
    number: "05",
    title: "Support",
    desc: "Ongoing maintenance and updates so your site stays fast, secure, and current — long after launch.",
  },
];

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
  return (
    <section id="process" className="process">
      <p className="process-eyebrow">HOW WE WORK</p>
      <h2 className="process-heading">From idea to live site</h2>

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
