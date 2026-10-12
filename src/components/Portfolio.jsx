// Portfolio.jsx
import React, { useState } from "react";
import "../styles/portfolio.css";
import useReveal from "./Hooks/useReveal";
import { Link } from "react-router-dom";
import project1 from "../assets/BOW.png";
import project2 from "../assets/powa.jpeg";
import project3 from "../assets/vic.jpeg";
import { useLocale } from "../i18n/LocaleProvider";
const projects = [
  {
    title: "Beauty On Wheels",
    category: "Upgrades",
    image: project1,
    link: "https://beautyonwheels.com.ng",
  },
  {
    title: "Frankey Powa",
    category: "Development",
    image: project2,
    link: "index.html",
  },
  {
    title: "Designs By Vic",
    category: "Web Design",
    image: project3,
    link: "https://www.figma.com/proto/DazIdZtT2UxCWUXLJTy5mx/PORTFOLIO-WEBSITE?node-id=80-321&t=B6yC6SwEQ2hrlOaP-1",
  },
];

const filters = ["All", "Web Design", "Development", "Upgrades"];

function ProjectCard({ image, title, category, color, link, delay }) {
  const [ref, visible] = useReveal();

  return (
    <>
      <div
        ref={ref}
        className={`project-card ${visible ? "visible" : ""}`}
        style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
        id="portfolio"
      >
        <Link to={link}>
          <img className="project-image" src={image} alt={title} />

          <div className="project-overlay">
            <span className="project-category">{category}</span>
            <h3 className="project-title">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

function Portfolio() {
  const [active, setActive] = useState("All");
  const { t } = useLocale();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="portfolio">
      <p className="portfolio-eyebrow">{t("portfolio.eyebrow")}</p>
      <h2 className="portfolio-heading">{t("portfolio.heading")}</h2>

      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={(i % 3) * 0.12} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
