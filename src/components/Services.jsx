import React from "react";
import "../styles/services.css";
import useReveal from "./Hooks/useReveal";

const services = [
  {
    number: "01",
    title: "AI Integration",
    desc: "Integrating AI's that works just for you. Increasing sales and site visits.",
  },
  {
    number: "02",
    title: "Web Development",
    desc: "Your design brought to life — fast, responsive, and built to scale as your business grows.",
  },
  {
    number: "03",
    title: "Website Upgrades",
    desc: "Modernize an outdated site — new features, better performance, refreshed design.",
  },
  {
    number: "04",
    title: "Web Maintenance",
    desc: "Ongoing updates, monitoring, and support so your site stays fast, secure, and current.",
  },
  {
    number: "05",
    title: "Web Design",
    desc: "Custom Figma designs built around your brand — not a template with your logo dropped in.",
  },
];

function ServiceCard({ number, title, desc, delay }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`service-card ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      <span className="service-number">{number}</span>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{desc}</p>
    </div>
  );
}

function Services() {
  return (
    <section className="services" id="serv">
      <p className="services-eyebrow">WHAT WE DO</p>
      <h2 className="services-heading">Everything your website needs</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <ServiceCard key={s.number} {...s} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}

export default Services;
