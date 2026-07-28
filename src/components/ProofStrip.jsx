// ProofStrip.jsx
import React, { useEffect, useState } from "react";
import "../styles/proofstrip.css";
import useReveal from "./Hooks/useReveal";

// Swap "value" for real numbers once you have them — count-up only
// applies to numeric values; non-numeric ones (like "7-14") display as-is.
const stats = [
  { value: 50, suffix: "+", label: "Businesses served" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: null, display: "7–14", label: "Days to launch" },
  { value: null, display: "24/7", label: "Support response" },
];

function useCountUp(target, active, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === null) return;
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out curve so it settles rather than ticking linearly
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, delay }) {
  const [ref, visible] = useReveal(0.4);
  const count = useCountUp(stat.value, visible);

  return (
    <div
      ref={ref}
      className={`proof-item reveal-fade ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      <span className="proof-value">
        {stat.value !== null ? `${count}${stat.suffix}` : stat.display}
      </span>
      <span className="proof-label">{stat.label}</span>
    </div>
  );
}

function ProofStrip() {
  return (
    <div className="proof-strip">
      {stats.map((s, i) => (
        <StatItem key={s.label} stat={s} delay={i * 0.1} />
      ))}
    </div>
  );
}

export default ProofStrip;
