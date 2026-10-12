// Testimonials.jsx
import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";
import useReveal from "./Hooks/useReveal";
import { useLocale } from "../i18n/LocaleProvider";

function Testimonials() {
  const { t } = useLocale();
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  const testimonials = [
    {
      quote: t("testimonials.testimonial1.quote"),
      name: t("testimonials.testimonial1.name"),
      role: t("testimonials.testimonial1.role"),
    },
    {
      quote: t("testimonials.testimonial2.quote"),
      name: t("testimonials.testimonial2.name"),
      role: t("testimonials.testimonial2.role"),
    },
    {
      quote: t("testimonials.testimonial3.quote"),
      name: t("testimonials.testimonial3.name"),
      role: t("testimonials.testimonial3.role"),
    },
  ];

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <p
        className={`testimonials-eyebrow reveal-fade ${visible ? "visible" : ""}`}
      >
        {t("testimonials.heading")}
      </p>

      <div
        className={`quote-wrap reveal-fade ${visible ? "visible" : ""}`}
        style={{ transitionDelay: "0.15s" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`quote-slide ${i === active ? "active" : ""}`}
          >
            <p className="quote-text">"{t.quote}"</p>
            <div className="quote-author">
              <span className="author-name">{t.name}</span>
              <span className="author-role">{t.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="quote-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
