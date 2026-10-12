// About.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import useReveal from "./Hooks/useReveal";
import deploy from "../assets/deploy.jpg";
import coding from "../assets/coding.jpg";
import figma from "../assets/figma.jpg";
import useTitles from "../components/Hooks/useTitles";
import { useLocale } from "../i18n/LocaleProvider";

function AboutCarousel() {
  const [active, setActive] = useState(0);
  const { t } = useLocale();

  const slides = [
    {
      caption: t("about.slides.slide1.caption"),
      image: figma,
    },
    {
      caption: t("about.slides.slide2.caption"),
      image: coding,
    },
    {
      caption: t("about.slides.slide3.caption"),
      image: deploy,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-carousel">
      <div className="carousel-track">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === active ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <span className="carousel-caption">{s.caption}</span>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function RevealBlock({ children, delay = 0, threshold = 0.3 }) {
  const [ref, visible] = useReveal(threshold);
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

function About() {
  const { t } = useLocale();
  useTitles("About Us | Lines Of Code Technologies");
  return (
    <section id="about" className="about">
      <p className="about-eyebrow">ABOUT US</p>

      <AboutCarousel />

      <RevealBlock delay={0.1}>
        <div className="about-block">
          <h2 className="about-heading">{t("about.theyear.head")}</h2>
          <p className="about-text">{t("about.theyear.body1")}</p>
          <p className="about-text">{t("about.theyear.body2")}</p>
        </div>
      </RevealBlock>

      <RevealBlock delay={0.2}>
        <div className="about-block">
          <h2 className="about-heading">{t("about.why.head")}</h2>
          <p className="about-text">{t("about.why.body")}</p>
        </div>
      </RevealBlock>

      <RevealBlock delay={0.3}>
        <div className="about-cta">
          <Link to="/team" className="cta-btn">
            Meet the Loct Team
          </Link>
        </div>
      </RevealBlock>
    </section>
  );
}

export default About;
