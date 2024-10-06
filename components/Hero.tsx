import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <h1 className="text-5xl md:text-5xl font-bold mb-6 font-cal">
        Your All-in-One Client Management tool. Elevate Your Consulting Game{" "}
        <span className="drop-shadow-glow">Today</span>
      </h1>
      <p className="text-xl mb-8 text-gray-300 w-11/12 ">
        Create AI-driven Forms, collect essential client insights and boost your
        freelance and consulting projects. All in one place.
      </p>

      <div className="flex gap-2">
        <Link href="/dashboard">
          <Button size="lg">Get Started</Button>
        </Link>

        <Link href="youtube.com">
          <Button variant="atc" size="lg">
            Watch Video
          </Button>
        </Link>
      </div>
    </div>
  );
}
