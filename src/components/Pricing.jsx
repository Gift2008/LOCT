// Pricing.jsx
import React from "react";
import "../styles/pricing.css";
import useReveal from "./Hooks/useReveal";
import useTitles from "./Hooks/useTitles";

const growthFeatures = [
  {
    category: "High-Converting Website",
    items: [
      "Landing Page + Contact Funnel",
      "Built to turn visitors into leads",
      "Clean, fast, mobile-optimized",
    ],
  },
  {
    category: "Quality Ads",
    items: [
      "14 Days Facebook + Google Ads Setup",
      "5 Lead Target",
      "Proven to drive 220%+ ad performance growth",
    ],
  },
  {
    category: "Simple Conversion Path",
    items: [
      "Visitor → Lead, no wasted clicks",
      "Every step designed to book you calls",
      "No complexity, no clutter — just results",
    ],
  },
  {
    category: "Fast Delivery",
    items: [
      "Delivered in 10 Days",
      "+₦50,000/month maintenance (optional)",
      "Support included from day one",
    ],
  },
];

const dominanceFeatures = [
  {
    category: "Quality Website",
    items: [
      "SEO + Blog + Lead Funnels",
      "Paystack + WhatsApp + Mobile optimized",
      "Built to convert visitors to customers",
    ],
  },
  {
    category: "Quality AI",
    items: [
      "Advanced AI that books appointments",
      "Auto follow-up 24/7 — zero missed leads",
      "Trained on your business + Multilingual",
    ],
  },
  {
    category: "Quality Ads",
    items: [
      "30 Days Facebook + Google Ads Setup",
      "10 Lead Target",
      "Ad copy + targeting + management",
    ],
  },
  {
    category: "Quality Support",
    items: [
      "Delivered in 14 Days",
      "90 Days Support + Training",
      "Domain + Hosting + SSL included",
    ],
  },
];

const empireFeatures = [
  {
    category: "Enterprise Website + Systems",
    items: [
      "Custom CRM + Inventory + Staff Portal",
      "Advanced API Integration + Database Architecture",
      "Enterprise Security + Cloud Hosting + Backup",
      "Built to scale to 1M+ users",
    ],
  },
  {
    category: "Empire AI + Automation",
    items: [
      "Advanced AI Chatbot trained on YOUR business",
      "Auto booking, follow-up, support 24/7",
      "Multilingual + Voice + WhatsApp Integration",
      "Lead qualification + Sales automation",
    ],
  },
  {
    category: "Enterprise Marketing",
    items: [
      "90 Days Facebook + Google Ads Management",
      "50 Lead Target",
      "SEO + Content Strategy + Email Automation",
      "Full Analytics + Conversion Tracking",
    ],
  },
  {
    category: "Elite Support",
    items: [
      "Delivered in 30 Days",
      "1 Year Priority Support + Maintenance",
      "Team Training + Dedicated Project Manager",
      "Domain, Enterprise Hosting, SSL, Security included",
    ],
  },
];

const comparisonRows = [
  {
    feature: "Starting Price",
    growth: "₦650,000",
    dominance: "₦950,000",
    empire: "₦2,500,000",
  },
  {
    feature: "Website",
    growth: "Landing Page + Funnel",
    dominance: "Full Site + SEO + Blog",
    empire: "Enterprise + Custom Systems",
  },
  {
    feature: "AI / Automation",
    growth: "—",
    dominance: "AI Booking + Follow-up",
    empire: "AI + Voice + Sales Automation",
  },
  {
    feature: "Ads Management",
    growth: "14 Days",
    dominance: "30 Days",
    empire: "90 Days",
  },
  { feature: "Lead Target", growth: "5", dominance: "10", empire: "50" },
  {
    feature: "Delivery Time",
    growth: "10 Days",
    dominance: "14 Days",
    empire: "30 Days",
  },
  {
    feature: "Support",
    growth: "From Day 1",
    dominance: "90 Days",
    empire: "1 Year Priority",
  },
  {
    feature: "Best For",
    growth: "Businesses ready to grow",
    dominance: "Businesses ready to lead",
    empire: "Enterprise brands",
  },
];

const faqs = [
  {
    q: "Do I pay monthly or one-time?",
    a: "One-time project fee. You pay 50% to begin and 50% on delivery. GROWTH includes an optional ₦50,000/month maintenance plan after launch if you want ongoing updates.",
  },
  {
    q: "Is the 'Lead Target' guaranteed?",
    a: "We manage your ad spend, targeting, and creative specifically to work toward that number, and we keep optimizing until we've done everything possible to hit it. Results depend on your offer and market, so we're upfront that it's a target we work hard toward, not a promise independent of your business.",
  },
  {
    q: "Can I upgrade from GROWTH to DOMINANCE or EMPIRE later?",
    a: "Yes — whatever you've already paid is credited toward the upgrade.",
  },
  {
    q: "How fast can we start?",
    a: "Projects begin within 2-3 days of your 50% deposit.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We include revision rounds during the build itself, so you're reviewing and approving as we go — not surprised at the end.",
  },
];

const CALENDLY_URL = "https://calendly.com/hello-lines-of-code/15min";
const WHATSAPP_URL = "https://wa.me/2348078018504";

function PricingCard({
  tier,
  badge,
  price,
  tagline,
  featureGroups,
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
      {badge && <span className="pricing-badge">{badge}</span>}
      <h3 className="pricing-tier">{tier}</h3>
      <p className="pricing-price">{price}</p>
      <p className="pricing-tagline">{tagline}</p>

      <div className="pricing-features">
        {featureGroups.map((group) => (
          <div key={group.category} className="feature-group">
            <p className="feature-category">{group.category}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span className="check">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="pricing-result">{result}</p>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noreferrer"
        className="pricing-btn"
      >
        Book Free Audit to Begin
      </a>
      <p className="pricing-note">50% deposit to start</p>
    </div>
  );
}

function Pricing() {
  const [heroRef, heroVisible] = useReveal();
  useTitles("Pricing | Lines of Code Technologies");

  return (
    <section id="pricing" className="pricing">
      <div
        className={`pricing-hero reveal-fade ${heroVisible ? "visible" : ""}`}
        ref={heroRef}
      >
        <p className="pricing-eyebrow">PRICING</p>
        <h1 className="pricing-heading">One Clear Price. Real Results.</h1>
        <p className="pricing-sub">
          No hidden fees. 50% to start, 50% on delivery.
          <br />
          We build systems that sell for you 24/7.
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

      <div className="pricing-grid pricing-grid-3">
        <PricingCard
          tier="GROWTH"
          badge="🚀"
          price="₦650,000"
          tagline="Your next level starts here — for businesses ready to stop guessing and start growing."
          featureGroups={growthFeatures}
          result="Grow beyond the ordinary — with a system that works while you sleep."
          delay={0}
        />
        <PricingCard
          tier="DOMINANCE"
          badge="⭐ Most Popular"
          price="₦950,000"
          tagline="For businesses that want to OWN their market."
          featureGroups={dominanceFeatures}
          result="Become #1 in your industry."
          highlighted
          delay={0.15}
        />
        <PricingCard
          tier="EMPIRE"
          badge="👑 Elite"
          price="₦2,500,000"
          tagline="For industry leaders who want ENTERPRISE DOMINANCE."
          featureGroups={empireFeatures}
          result="Become the #1 Enterprise Brand in your industry."
          delay={0.3}
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
                <th>EMPIRE</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.growth}</td>
                  <td>{row.dominance}</td>
                  <td>{row.empire}</td>
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
        <h2>Ready to Own Your Market?</h2>
        <p>
          Stop paying for a website that just "looks nice". Let's build a system
          that brings you customers.
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
