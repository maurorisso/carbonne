import Link from "next/link";
import type { HeaderLink } from "@/types";
import Logo from "./Logo";
import { Button } from "./ui/button";

export default function Header() {
  const links: HeaderLink[] = [
    { title: "Features", href: "#features" },
    { title: "Get Started", href: "/create" },
  ];

  return (
    <header className="w-10/12 mx-auto py-6 ">
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

          <Link href="/create">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
