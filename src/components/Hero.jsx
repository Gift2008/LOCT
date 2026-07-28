import React from "react";
import hero from "../assets/hr.png";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="hero-image">
      <div className="hro">
        <img src={hero} alt="Loct — web design studio hero" />
        <div className="overlay"></div>
        <div className="continue">
          <p
            className="headline reveal-drop"
            style={{ animationDelay: "0.1s" }}
          >
            Got an Idea?
          </p>
          <b style={{ color: "var(--accent)" }}>You imagine it. We code it.</b>
          <p className="subhead reveal-drop" style={{ animationDelay: "0.3s" }}>
            <span>Websites and AI Systems that actually do the work.</span>
            <br />
            <br />
            <span>
              Lines of Code Technologies builds high-performance websites and
              practical AI tools that help growing businesses scale. based
            </span>
          </p>
          <div className="s reveal-drop" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://calendly.com/hello-lines-of-code/15min"
              className="cta-btn"
            >
              Start your project today
            </a>
            <a href="#portfolio" className="cta-text">
              See our work →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
