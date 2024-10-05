import React from "react";
import { Lollipop, Eclipse } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="text-2xl font-bold flex gap-1 ">
        <Lollipop size={32} />
        <span> Carbonne</span>
      </div>
    </Link>
  );
}

export default Logo;
