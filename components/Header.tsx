import Link from "next/link";
import type { HeaderLink } from "@/types";
import Logo from "./Logo";
import { Button } from "./ui/button";

export default function Header() {
  const links: HeaderLink[] = [
    { title: "Features", href: "#features" },
    { title: "Get Started", href: "#cta" },
  ];

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="space-x-4">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary/80 cursor-pointer"
            >
              {link.title}
            </Link>
          ))}
          <Button size="lg">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
