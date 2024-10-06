import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Section hasWhiteBackground={true} className="text-background">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-cal">Why Carbonne?</h2>
            <p className="text-xl mb-8">
              Carbonne is a platform that helps you create intelligent forms,
              gather essential information about your customers and speed-up
              your freelance and consulting projects. All in one place.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
