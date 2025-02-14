"use client"; // Required for Next.js App Router

import React from "react";

const HeroSection = ({ bgImage, children }) => {
  return (
    <div
      className="relative w-full h-[96vh] bg-center pt-20"
      style={{ backgroundImage: `url(${bgImage})`,backgroundSize:"100% 100%" }}
    >
      <>{children}</>
    </div>
  );
};

export default HeroSection;
