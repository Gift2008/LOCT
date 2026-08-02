// About.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import useReveal from "./Hooks/useReveal";
import deploy from "../assets/deploy.jpg";
import coding from "../assets/coding.jpg";
import figma from "../assets/figma.jpg";

const slides = [
  {
    caption: "Where every project starts — whiteboarding the plan",
    image: figma,
  },
  { caption: "Design in progress", image: coding },
  { caption: "Deploy day", image: deploy },
];

function AboutCarousel() {
  const [active, setActive] = useState(0);

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
  return (
    <section id="about" className="about">
      <p className="about-eyebrow">ABOUT US</p>

      <AboutCarousel />

      <RevealBlock delay={0.1}>
        <div className="about-block">
          <h2 className="about-heading">The year we launched</h2>
          <p className="about-text">
            We opened our doors with two laptops, a shared Google Drive, and no
            clients. The first few months were rough — we lost our first big
            pitch because we quoted a price without fully scoping the work, and
            had to eat the difference to finish the project right. We also
            learned the hard way that "we'll figure out hosting later" is not a
            plan, after a client's launch got delayed a week over a DNS mix-up.
          </p>
          <p className="about-text">
            Every one of those mistakes is baked into how we work now — which is
            a big part of why we quote carefully, test everything before
            handoff, and never leave a client guessing what happens next.
          </p>
        </div>
      </RevealBlock>

      <RevealBlock delay={0.2}>
        <div className="about-block">
          <h2 className="about-heading">Why we started this</h2>
          <p className="about-text">
            We kept seeing the same thing: good businesses with beautiful
            products, invisible online. Not because they didn't deserve
            customers — because nobody had built them a website that actually
            worked as hard as they did. We started Loct to fix that gap, one
            business at a time.
          </p>
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
