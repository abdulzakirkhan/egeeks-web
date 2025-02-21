"use client";
import Image from "next/image";
import React from "react";

const Cards = ({ title }) => {
  const setsData = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, transparency, and ethical behavior in all our interactions.",
      icon: "/About-us/Sets/1.png",
    },
    {
      title: "Client Value",
      description:
        "We strive to exceed our clients' expectations and deliver measurable results that positively impact their business.",
      icon: "/About-us/Sets/2.png",
    },
    {
      title: "Accountability",
      description:
        "We take ownership of our actions, ensuring responsibility and reliability in every aspect of our work.",
      icon: "/About-us/Sets/3.png",
    },
    {
      title: "People Driven",
      description:
        "As a people-first organization, we prioritize the well-being and success of our employees, clients, and communities.",
      icon: "/About-us/Sets/4.png",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, combining diverse skills and perspectives to achieve extraordinary outcomes.",
      icon: "/About-us/Sets/5.png",
    },
  ];

  return (
    <section
      className="mt-20 bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/About-us/Sets/shadow.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl text-center font-bold">
          {title ? title : "What Sets Us Apart"}
        </h1>

        {/* Grid Layout */}
        <div className="flex flex-wrap justify-center gap-6 py-12">
          {setsData.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-16px)] p-6 md:p-8 border-2 border-[#5A686F] rounded-lg bg-transparent text-center md:text-left"
            >
              <Image src={card.icon} width={60} height={60} alt={card.title} className="mx-auto md:mx-0" />
              <h3 className="text-white text-2xl md:text-3xl mt-4">{card.title}</h3>
              <p className="subtitle text-[#FFFFFF] mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;