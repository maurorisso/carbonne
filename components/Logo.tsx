import React from "react";
import { Lollipop } from "lucide-react";
function Logo() {
  return (
    <div className="text-2xl font-bold flex gap-1 ">
      <Lollipop size={32} />
      <span> Carbonne</span>
    </div>
  );
}

export default Logo;
