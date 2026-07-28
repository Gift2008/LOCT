// Portfolio.jsx
import React, { useState } from "react";
import "../styles/portfolio.css";
import useReveal from "./Hooks/useReveal";
import { Link } from "react-router-dom";
const projects = [
  {
    title: "Solene Skincare",
    category: "Web Design",
    color: "linear-gradient(135deg, #d8c3a5, #8f5e3d)",
    link: "index.html",
  },
  {
    title: "Northgate Realty",
    category: "Development",
    color: "linear-gradient(135deg, #24344d, #4a6fa5)",
    link: "index.html",
  },
  {
    title: "Marlow & Co.",
    category: "Upgrades",
    color: "linear-gradient(135deg, #3c3c3c, #7a7a7a)",
    link: "index.html",
  },
  {
    title: "Verde Botanicals",
    category: "Web Design",
    color: "linear-gradient(135deg, #4a7c59, #a3c9a8)",
    link: "index.html",
  },
  {
    title: "Ridgeline Fitness",
    category: "Development",
    color: "linear-gradient(135deg, #7b2d26, #c65d3b)",
    link: "index.html",
  },
  {
    title: "Auric Studio",
    category: "Upgrades",
    color: "linear-gradient(135deg, #1f1f1f, #a98c4a)",
    link: "index.html",
  },
];

const filters = ["All", "Web Design", "Development", "Upgrades"];

function ProjectCard({ title, category, color, link, delay }) {
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
          <div className="project-image" style={{ background: color }} />
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

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="portfolio">
      <p className="portfolio-eyebrow">OUR WORK</p>
      <h2 className="portfolio-heading">Sites we've brought to life</h2>

      <div className="portfolio-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={(i % 3) * 0.12} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
