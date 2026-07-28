import React, { useState } from "react";
import "../styles/navbar.css";
import Button from "react-bootstrap/Button";
import useTitles from "./Hooks/useTitles";
// import logo from "../assets/loct.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            {/* <img src={logo} alt="loct logo" width="50px" height="50px" /> */}
            <p>
              <span className="l">Lines Of</span>{" "}
              <span className="orange">Code</span>{" "}
              <span className="t">Technologies</span>
            </p>
          </a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navigation ${menuOpen ? "open" : ""}`}>
          <a href="/#serv" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="/#process" onClick={() => setMenuOpen(false)}>
            The Process
          </a>
          <a href="/#portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
          <a href="/#testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="/about-loct" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
          <a href="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a
            href="https://calendly.com/hello-lines-of-code/15min"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="btn"> Book Your Free Call</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
