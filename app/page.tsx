import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section hasWhiteBackground={true} className="text-background">
        <div>
          <h2 className="text-4xl font-bold mb-6">Why Carbonne?</h2>
          <p className="text-xl mb-8">
            Carbonne is a platform that helps you create intelligent
            questionnaires, gather essential information about your customers
            and speed-up your freelance and consulting projects. All in one
            place.
          </p>
        </div>
      </Section>
    </>
  );
}
