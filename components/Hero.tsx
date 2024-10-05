import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <h1 className="text-6xl md:text-6xl font-bold mb-6">
        Get More Clients, Elevate Your Consulting Game{" "}
        <span className="drop-shadow-glow">Today</span>
      </h1>

      <p className="text-xl mb-8 text-gray-300 w-11/12 ">
        Create intelligent questionnaires, gather essential information about
        your customers and speed-up your freelance and consulting projects. All
        in one place.
      </p>

      <Link href="/create">
        <Button size="lg">Get Started</Button>
      </Link>
    </div>
  );
}
