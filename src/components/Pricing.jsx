// Pricing.jsx
import React from "react";
import "../styles/pricing.css";
import useReveal from "./Hooks/useReveal";
import useTitles from "./Hooks/useTitles";
import { useLocale } from "../i18n/LocaleProvider";

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
  const { t } = useLocale();

  const growthFeatures = [
    {
      category: t("pricing.pricingCards.card1.features.category"),
      items: [
        t("pricing.pricingCards.card1.features.items.item1"),
        t("pricing.pricingCards.card1.features.items.item2"),
        t("pricing.pricingCards.card1.features.items.item3"),
      ],
    },
    {
      category: t("pricing.pricingCards.card1.features2.category"),
      items: [
        t("pricing.pricingCards.card1.features2.items.item1"),
        t("pricing.pricingCards.card1.features2.items.item2"),
        t("pricing.pricingCards.card1.features2.items.item3"),
      ],
    },
    {
      category: t("pricing.pricingCards.card1.features3.category"),
      items: [
        t("pricing.pricingCards.card1.features3.items.item1"),
        t("pricing.pricingCards.card1.features3.items.item2"),
        t("pricing.pricingCards.card1.features3.items.item3"),
      ],
    },
    {
      category: t("pricing.pricingCards.card1.features4.category"),
      items: [
        t("pricing.pricingCards.card1.features4.items.item1"),
        t("pricing.pricingCards.card1.features4.items.item2"),
        t("pricing.pricingCards.card1.features4.items.item3"),
      ],
    },
  ];

  const dominanceFeatures = [
    {
      category: t("pricing.pricingCards.card2.features.category"),
      items: [
        t("pricing.pricingCards.card2.features.items.item1"),
        t("pricing.pricingCards.card2.features.items.item2"),
        t("pricing.pricingCards.card2.features.items.item3"),
      ],
    },
    {
      category: t("pricing.pricingCards.card2.features.category"),
      items: [
        t("pricing.pricingCards.card2.features2.items.item1"),
        t("pricing.pricingCards.card2.features2.items.item2"),
        t("pricing.pricingCards.card2.features2.items.item3"),
      ],
    },
    {
      category: t("pricing.pricingCards.card2.features3.category"),
      items: [
        t("pricing.pricingCards.card2.features3.items.item1"),
        t("pricing.pricingCards.card2.features3.items.item2"),
        t("pricing.pricingCards.card2.features3.items.item3"),
        ,
      ],
    },
    {
      category: t("pricing.pricingCards.card2.features4.category"),
      items: [
        t("pricing.pricingCards.card2.features4.items.item1"),
        t("pricing.pricingCards.card2.features4.items.item2"),
        t("pricing.pricingCards.card2.features4.items.item3"),
      ],
    },
  ];

  const empireFeatures = [
    {
      category: t("pricing.pricingCards.card3.features.category"),
      items: [
        t("pricing.pricingCards.card3.features.items.item1"),
        t("pricing.pricingCards.card3.features.items.item2"),
        t("pricing.pricingCards.card3.features.items.item3"),
        t("pricing.pricingCards.card3.features.items.item4"),
      ],
    },
    {
      category: t("pricing.pricingCards.card3.features2.category"),
      items: [
        t("pricing.pricingCards.card3.features2.items.item1"),
        t("pricing.pricingCards.card3.features2.items.item2"),
        t("pricing.pricingCards.card3.features2.items.item3"),
        t("pricing.pricingCards.card3.features2.items.item4"),
      ],
    },
    {
      category: t("pricing.pricingCards.card3.features3.category"),
      items: [
        t("pricing.pricingCards.card3.features3.items.item1"),
        t("pricing.pricingCards.card3.features3.items.item2"),
        t("pricing.pricingCards.card3.features3.items.item3"),
        t("pricing.pricingCards.card3.features3.items.item4"),
      ],
    },
    {
      category: t("pricing.pricingCards.card3.features4.category"),
      items: [
        t("pricing.pricingCards.card3.features4.items.item1"),
        t("pricing.pricingCards.card3.features4.items.item2"),
        t("pricing.pricingCards.card3.features4.items.item3"),
        t("pricing.pricingCards.card3.features4.items.item4"),
      ],
    },
  ];

  const comparisonRows = [
    {
      feature: t("pricing.comparison.table.rows.row1.feature"),
      growth: t("pricing.comparison.table.rows.row1.growth"),
      dominance: t("pricing.comparison.table.rows.row1.dominance"),
      empire: t("pricing.comparison.table.rows.row1.empire"),
    },
    {
      feature: t("pricing.comparison.table.rows.row2.feature"),
      growth: t("pricing.comparison.table.rows.row2.growth"),
      dominance: t("pricing.comparison.table.rows.row2.dominance"),
      empire: t("pricing.comparison.table.rows.row2.empire"),
    },

    {
      feature: t("pricing.comparison.table.rows.row3.feature"),
      growth: t("pricing.comparison.table.rows.row3.growth"),
      dominance: t("pricing.comparison.table.rows.row3.dominance"),
      empire: t("pricing.comparison.table.rows.row3.empire"),
    },
    {
      feature: t("pricing.comparison.table.rows.row4.feature"),
      growth: t("pricing.comparison.table.rows.row4.growth"),
      dominance: t("pricing.comparison.table.rows.row4.dominance"),
      empire: t("pricing.comparison.table.rows.row4.empire"),
    },
    {
      feature: t("pricing.comparison.table.rows.row5.feature"),
      growth: t("pricing.comparison.table.rows.row5.growth"),
      dominance: t("pricing.comparison.table.rows.row5.dominance"),
      empire: t("pricing.comparison.table.rows.row5.empire"),
    },
    {
      feature: t("pricing.comparison.table.rows.row6.feature"),
      growth: t("pricing.comparison.table.rows.row6.growth"),
      dominance: t("pricing.comparison.table.rows.row6.dominance"),
      empire: t("pricing.comparison.table.rows.row6.empire"),
    },
    {
      feature: t("pricing.comparison.table.rows.row7.feature"),
      growth: t("pricing.comparison.table.rows.row7.growth"),
      dominance: t("pricing.comparison.table.rows.row7.dominance"),
      empire: t("pricing.comparison.table.rows.row7.empire"),
    },
    {
      feature: t("pricing.comparison.table.rows.row8.feature"),
      growth: t("pricing.comparison.table.rows.row8.growth"),
      dominance: t("pricing.comparison.table.rows.row8.dominance"),
      empire: t("pricing.comparison.table.rows.row8.empire"),
    },
  ];

  const faqs = [
    {
      q: t("pricing.faq.questions.q1.q"),
      a: t("pricing.faq.questions.q1.a"),
    },
    {
      q: t("pricing.faq.questions.q2.q"),
      a: t("pricing.faq.questions.q2.a"),
    },
    {
      q: t("pricing.faq.questions.q3.q"),
      a: t("pricing.faq.questions.q3.a"),
    },
    {
      q: t("pricing.faq.questions.q4.q"),
      a: t("pricing.faq.questions.q4.a"),
    },
    {
      q: t("pricing.faq.questions.q5.q"),
      a: t("pricing.faq.questions.q5.a"),
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div
        className={`pricing-hero reveal-fade ${heroVisible ? "visible" : ""}`}
        ref={heroRef}
      >
        <p className="pricing-eyebrow">{t("pricing.eyebrow")} </p>
        <h1 className="pricing-heading">{t("pricing.heading")}</h1>
        <p className="pricing-sub">
          {t("pricing.sub1")}
          <br />
          {t("pricing.sub2")}
        </p>
        <div className="pricing-hero-ctas">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            {t("pricing.btn1")}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-text"
          >
            {t("pricing.btn2")}
          </a>
        </div>
      </div>

      <div className="pricing-grid pricing-grid-3">
        <PricingCard
          tier={t("pricing.pricingCards.card1.tier")}
          badge="🚀"
          price={t("pricing.pricingCards.card1.price")}
          tagline={t("pricing.pricingCards.card1.tagline")}
          featureGroups={growthFeatures}
          result={t("pricing.pricingCards.card1.result")}
          delay={0}
        />
        <PricingCard
          tier={t("pricing.pricingCards.card2.tier")}
          badge={t("pricing.pricingCards.card2.badge")}
          price={t("pricing.pricingCards.card2.price")}
          tagline={t("pricing.pricingCards.card2.tagline")}
          featureGroups={dominanceFeatures}
          result={t("pricing.pricingCards.card2.result")}
          highlighted
          delay={0.15}
        />
        <PricingCard
          tier={t("pricing.pricingCards.card3.tier")}
          badge={t("pricing.pricingCards.card3.badge")}
          price={t("pricing.pricingCards.card3.price")}
          tagline={t("pricing.pricingCards.card3.tagline")}
          featureGroups={empireFeatures}
          result={t("pricing.pricingCards.card3.result")}
          delay={0.3}
        />
      </div>

      <div className="comparison-wrap">
        <h2 className="comparison-heading">
          {t("pricing.comparison.heading")}
        </h2>
        <div className="comparison-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th> {t("pricing.comparison.table.head1")} </th>
                <th>{t("pricing.comparison.table.head2")}</th>
                <th>{t("pricing.comparison.table.head3")}</th>
                <th>{t("pricing.comparison.table.head4")}</th>
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
          {t("pricing.comparison.table.button")}
        </a>
      </div>

      <div className="pricing-faq">
        <h2 className="faq-heading">{t("pricing.faq.heading")}</h2>
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>

      <div className="pricing-final-cta">
        <h2>{t("pricing.closing.heading")}</h2>
        <p>{t("pricing.closing.sub")}</p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          {t("pricing.closing.btn1")}
        </a>
        <p className="final-cta-sub">{t("pricing.closing.btn2")}</p>
      </div>
    </section>
  );
}

export default Pricing;
