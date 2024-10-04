import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MarketingQuestionnaire from "@/components/MarketingForm";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Hero />
        <MarketingQuestionnaire />
      </div>
      <Footer />
    </div>
  );
}
