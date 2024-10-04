import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Revolutionize Your Consulting Business with AI
      </h1>
      <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
        Create smart questionnaires, gather crucial client information, and gain
        AI-powered insights to streamline your freelance and consulting
        projects.
      </p>
      <Button size="lg">Start Your Free Trial</Button>
    </section>
  );
}
