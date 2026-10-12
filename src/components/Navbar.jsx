import React, { useState } from "react";
import "../styles/navbar.css";
import Button from "react-bootstrap/Button";
import useTitles from "./Hooks/useTitles";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "../i18n/LocaleProvider";
// import logo from "../assets/loct.png";

function Navbar() {
  const { t } = useLocale();
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
            {t("nav.services")}
          </a>
          <a href="/#process" onClick={() => setMenuOpen(false)}>
            {t("nav.process")}
          </a>
          <a href="/#portfolio" onClick={() => setMenuOpen(false)}>
            {t("nav.portfolio")}
          </a>
          <a href="/#testimonials" onClick={() => setMenuOpen(false)}>
            {t("nav.testimonials")}
          </a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            {t("nav.contact")}
          </a>
          <a href="/about-loct" onClick={() => setMenuOpen(false)}>
            {t("nav.about")}
          </a>
          <a href="/blog" onClick={() => setMenuOpen(false)}>
            {t("nav.blog")}
          </a>
          <a href="/pricing" onClick={() => setMenuOpen(false)}>
            {t("nav.pricing")}
          </a>

          <LanguageSwitcher onSelect={() => setMenuOpen(false)} />

          <a
            href="https://calendly.com/hello-lines-of-code/15min"
            onClick={() => setMenuOpen(false)}
          >
            <Button className="btn">{t("nav.cta")}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
