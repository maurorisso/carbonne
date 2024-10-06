import React from "react";

type Props = {
  children: React.ReactNode;
  hasBorder?: boolean;
  className?: string;
  hasWhiteBackground?: boolean;
};

function Section({
  children,
  hasBorder = false,
  hasWhiteBackground = false,
  className = "",
}: Props) {
  return (
    <div
      className={`w-full py-20 ${
        hasBorder ? "border-t-2 border-stone-50" : ""
      } ${hasWhiteBackground ? "bg-stone-50" : ""}
      ${className ? className : ""}
      `}
    >
      <div className="w-8/12 mx-auto flex flex-col items-center justify-center ">
        {children}
      </div>
    </div>
  );
}

export default Section;
