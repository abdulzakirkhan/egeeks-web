"use client"; // Required for Next.js App Router

import React from "react";

const HeroSection = ({ bgImage, children }) => {
  return (
    <div
      className="relative w-full bg-center pt-20 bg-cover sm:h-[80vh] md:h-[95vh] lg:h-[96vh]"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <>{children}</>
    </div>
  );
};

export default HeroSection;
