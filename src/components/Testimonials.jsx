// Testimonials.jsx
import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";
import useReveal from "./Hooks/useReveal";

const testimonials = [
  {
    quote:
      "Loct took a vague idea and turned it into a site that actually feels like us. The whole process was smooth from the first call to launch.",
    name: "Amara Okafor",
    role: "Founder, Solene Skincare",
  },
  {
    quote:
      "Our old site was embarrassing. What they rebuilt loads fast, looks sharp, and customers actually compliment it now.",
    name: "Daniel Reyes",
    role: "Owner, Ridgeline Fitness",
  },
  {
    quote:
      "They didn't just design something pretty — they asked the right questions about our business first. That showed in the final result.",
    name: "Priya Nair",
    role: "Director, Northgate Realty",
  },
];

function Testimonials() {
  const [ref, visible] = useReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <p
        className={`testimonials-eyebrow reveal-fade ${visible ? "visible" : ""}`}
      >
        WHAT CLIENTS SAY
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
