import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Get More Clients, Elevate Your Consulting Game Today
      </h1>
      <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
        Create more intelligent questionnaires, gather essential information
        about your customers and speed-up your freelance and consulting
        projects.
      </p>
      <Button size="lg">Start Your Free Trial</Button>
    </section>
  );
}
