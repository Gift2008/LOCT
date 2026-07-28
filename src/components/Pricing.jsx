// Pricing.jsx
import React from "react";
import "../styles/pricing.css";
import useReveal from "./Hooks/useReveal";
import useTitles from "./Hooks/useTitles";

const growthFeatures = [
  "Professional Website - 1 page, mobile responsive",
  "4 Social Media Posts per week - Content + Design",
  "Tidio WhatsApp Chat Setup - 24/7 receptionist for your site",
  "Basic SEO - So Google can find you",
  "Monthly Report - What worked, what to improve",
];

const dominanceFeatures = [
  "Everything in GROWTH, plus:",
  "Facebook & Instagram Ads Management - Up to ₦100,000 ad spend",
  "SEO + Blog - Rank on Google and get free traffic",
  "8 Social Media Posts per week - Reels, Carousels, Graphics",
  "Weekly Strategy Call - 30min with our Growth Strategist",
  "Priority Support - WhatsApp replies within 2 hours",
];

const comparisonRows = [
  { feature: "Website", growth: "1 Page", dominance: "3-5 Pages + Blog" },
  { feature: "SEO", growth: "Basic", dominance: "Advanced + Blog" },
  { feature: "Social Media Posts", growth: "4 / week", dominance: "8 / week" },
  { feature: "Ads Management", growth: "—", dominance: "Up to ₦100k spend" },
  { feature: "Tidio Chat Setup", growth: "✓", dominance: "✓" },
  { feature: "Monthly Report", growth: "✓", dominance: "✓" },
  { feature: "Weekly Strategy Call", growth: "—", dominance: "✓" },
  { feature: "Support", growth: "Email", dominance: "WhatsApp + Call" },
  {
    feature: "Best For",
    growth: "New Businesses",
    dominance: "Scaling Businesses",
  },
];

const faqs = [
  {
    q: "Is there a setup fee?",
    a: "No. The price you see is all you pay monthly.",
  },
  {
    q: "Can I start with GROWTH and upgrade later?",
    a: "Yes. You can upgrade to DOMINANCE anytime. We'll handle it for you.",
  },
  {
    q: "Do you run ads with my money?",
    a: "For DOMINANCE, ad budget is separate. We manage up to ₦100k. You fund your own ads account.",
  },
  {
    q: "What if I'm not happy?",
    a: "Cancel anytime before your next billing date. No penalties.",
  },
  {
    q: "How fast can we start?",
    a: "Websites go live in 7-14 days. Social media starts the next week.",
  },
];

const CALENDLY_URL = "https://calendly.com/hello-lines-of-code/15min";
const WHATSAPP_URL = "https://wa.me/2348078018504";

function PricingCard({
  tier,
  price,
  tagline,
  features,
  result,
  highlighted,
  delay,
}) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`pricing-card ${highlighted ? "highlighted" : ""} ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      {highlighted && <span className="pricing-badge">Most Popular</span>}
      <h3 className="pricing-tier">{tier}</h3>
      <p className="pricing-price">
        {price}
        <span>/month</span>
      </p>
      <p className="pricing-tagline">{tagline}</p>

      <ul className="pricing-features">
        {features.map((f) => (
          <li key={f}>
            <span className="check">✓</span> {f}
          </li>
        ))}
      </ul>

      <p className="pricing-result">{result}</p>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noreferrer"
        className="pricing-btn"
      >
        Start with {tier}
      </a>
    </div>
  );
}

function Pricing() {
  const [heroRef, heroVisible] = useReveal();
  useTitles("Pricing| Lines of code technologies");

  return (
    <section id="pricing" className="pricing">
      <div
        className={`pricing-hero reveal-fade ${heroVisible ? "visible" : ""}`}
        ref={heroRef}
      >
        <p className="pricing-eyebrow">PRICING</p>
        <h1 className="pricing-heading">Simple Pricing. Real Results.</h1>
        <p className="pricing-sub">
          No setup fee. No lock-in contract. Cancel anytime.
          <br />
          We build websites that sell for you 24/7.
        </p>
        <div className="pricing-hero-ctas">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            Book Free 15-min Audit
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-text"
          >
            Chat Us on WhatsApp
          </a>
        </div>
      </div>

      <div className="pricing-grid">
        <PricingCard
          tier="GROWTH"
          price="₦50,000"
          tagline="Perfect if you want to look professional and start getting customers."
          features={growthFeatures}
          result="Go from invisible to online in 14 days."
          delay={0}
        />
        <PricingCard
          tier="DOMINANCE"
          price="₦100,000"
          tagline='Perfect if you want leads and sales every month, not just "likes".'
          features={dominanceFeatures}
          result="Get consistent leads + sales every month."
          highlighted
          delay={0.15}
        />
      </div>

      <div className="comparison-wrap">
        <h2 className="comparison-heading">Not sure which one is for you?</h2>
        <div className="comparison-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>GROWTH</th>
                <th>DOMINANCE</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.growth}</td>
                  <td>{row.dominance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="comparison-cta"
        >
          Still confused? Chat with us and we'll recommend the right one
        </a>
      </div>

      <div className="pricing-faq">
        <h2 className="faq-heading">Common Questions</h2>
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <div className="pricing-final-cta">
        <h2>Ready to Turn Your Website Into a Sales Machine?</h2>
        <p>
          Stop paying for a website that just "looks nice". Let's build one that
          brings you customers.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Book Your Free Audit
        </a>
        <p className="final-cta-sub">
          15 minutes. Zero pressure. We'll tell you exactly what to fix.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
