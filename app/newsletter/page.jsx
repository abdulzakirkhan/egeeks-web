"use client";

import Card from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const NewsLetterPage = () => {
  const data = [
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/1.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/2.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/3.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/4.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/5.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/6.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/5.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/7.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/8.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/9.png" },
    { title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.", createdAt: "15/01/2025", image: "/New-Letter/6.png" },
  ];

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, Math.min(currentPage * itemsPerPage, data.length));


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <HeroSection bgImage={"/Home/hero.png"} width={"h-[95vh] lg:h-[85vh]"}>
        <div className="container mx-auto lg:mt-12 px-6 lg:pt-8">
          <div className="flex mt-32 lg:mt-0 flex-col justify-center items-center px-12">
            <div className="lg:w-[80%] px-4">
              <h1 className="text-[62px] text-center text-white">Newsletter</h1>
              <p className="text-white text-center text-[20px font-[400] text-center]">
                Discover insights, tips, and inspiration on technology, career growth, and content creation. Explore featured highlights or catch the latest updates!
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center !relative lg:h-[700px] lg:w-[1100px]">
            <div className="flex z-50 w-full justify-end items-start mt-12 md:mt-0 lg:pb-8 lg:-mt-32">
              <div className="relative w-full px-4 lg:px-0 lg:w-auto lg:-me-32">
                <input type="text" placeholder="Search" className="py-2 w-full lg:w-auto px-6 border-2 border-red rounded-lg outline-none bg-[#331327] text-white placeholder:text-white" />
                <IoSearch className="text-white absolute top-2 right-6 lg:right-2" size={32} />
              </div>
            </div>
            <Image src={"/New-Letter/shadow.png"} width={1000} height={1000} alt="" className="hidden lg:block lg:w-[1000px] h-full !absolute !bottom-0 !left-11 !z-0" />
          </div>
        </div>
      </HeroSection>

      {/* Cards Section */}
      <section className="p-0 relative before:content-[''] before:overflow-x-hidden after:overflow-x-hidden after:lg:overflow-x-auto before:lg:overflow-x-auto before:absolute before:top-96 before:left-0 before:lg:-left-20 before:w-full before:lg:w-[600px] before:h-[600px] before:bg-cover before:bg-center before:bg-no-repeat before:-z-10 before:bg-[url('/New-Letter/sh.png')]      after:content-[''] after:absolute after:bottom-32 after:right-0 after:lg:-right-0 after:w-full after:lg:w-[600px] after:h-[600px] after:bg-cover after:bg-center after:bg-no-repeat after:-z-10 after:bg-[url('/New-Letter/sh.png')]">
        <div className="container my-0 py-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedData.map((card, index) => (
              <Card key={index} title={card.title}
               description={card.description}
                createdAt={card.createdAt} image={card.image}
                />
            ))}
          </div>
        </div>

        {/* Pagination */}
            <div className="container my-0 py-0 mx-auto">
                <div className="flex justify-end mt-6">
                    <div className="flex space-x-2">
                        {[1, 2].map((page, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 border rounded-full ${currentPage === page ? "bg-red text-white" : "bg-transparent text-white"}`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                        ))}
                        <button 
                        className={`px-4 py-2 border rounded-xl text-white ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-red transition-all duration-300"}`} 
                        onClick={() => handlePageChange(currentPage + 1)}  
                        disabled={currentPage === totalPages}
                        >
                        Next
                        </button>
                    </div>
                </div>
            </div>
      </section>
    </>
  );
};

export default NewsLetterPage;
