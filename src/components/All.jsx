import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import ProofStrip from "./ProofStrip";

function All() {
  return (
    <div style={{ marginTop: "75px" }}>
      <Hero />
      <ProofStrip />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default All;
