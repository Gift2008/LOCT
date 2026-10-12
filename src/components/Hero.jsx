import hero from "../assets/hr.png";
import "../styles/hero.css";
import { useLocale } from "../i18n/LocaleProvider";

function Hero() {
  const { t } = useLocale();
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
            {t("hero.headline")}
          </p>
          <b style={{ color: "var(--accent)" }}>{t("hero.firstsubheadline")}</b>
          <p className="subhead reveal-drop" style={{ animationDelay: "0.3s" }}>
            <span>{t("hero.secondsubhead")}</span>
            <br />
            <br />
            <span>{t("hero.subhead")}</span>
          </p>
          <div className="s reveal-drop" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://calendly.com/hello-lines-of-code/15min"
              className="cta-btn"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a href="#portfolio" className="cta-text">
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
