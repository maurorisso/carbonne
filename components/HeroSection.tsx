import React from "react";
import Section from "./Section";
import Hero from "./Hero";
import MarketingQuestionnaire from "./MarketingForm";

function HeroSection() {
  return (
    <Section hasBorder={false}>
      <div className="grid  grid-cols-[60%,40%]">
        <Hero />
        <MarketingQuestionnaire />
      </div>
    </Section>
  );
}

export default HeroSection;
