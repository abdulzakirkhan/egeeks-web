import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const SliderComponent = () => {
    const setsData = [
        {
            title: "Integrity",
            description: "We uphold the highest standards of honesty, transparency, and ethical behavior in all our interactions.",
            icon: "/About-us/Sets/1.png"
        },
        {
            title: "Client Value",
            description: "We strive to exceed our clients' expectations and deliver measurable results that positively impact their business.",
            icon: "/About-us/Sets/2.png"
        },
        {
            title: "Accountability",
            description: "We take ownership of our actions, ensuring responsibility and reliability in every aspect of our work.",
            icon: "/About-us/Sets/3.png"
        },
        {
            title: "People Driven",
            description: "As a people-first organization, we prioritize the well-being and success of our employees, clients, and communities.",
            icon: "/About-us/Sets/4.png"
        },
        {
            title: "Collaboration",
            description: "We believe in the power of teamwork, combining diverse skills and perspectives to achieve extraordinary outcomes.",
            icon: "/About-us/Sets/5.png"
        },
    ];

    return (
        <div className="relative">
            {/* Custom Navigation Arrows on Top Right */}
            <div className="absolute justify-between lg:justify-end top-1/2 left-0 w-full lg:w-auto lg:!-top-12 lg:right-0 !flex lg:!gap-12 !z-10 !p-2">
                <div className="swiper-button-prev !static !text-white !text-xs"></div>
                <div className="swiper-button-next !static !text-white !text-xs"></div>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {setsData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full space-y-3 bg-white p-8 border-2 border-[#5A686F] h-72 cards md:h-64">
                            <Image src={card.icon} width={60} height={60} alt={card.title} />
                            <h3 className="text-2xl text-white lg:text-3xl">{card.title}</h3>
                            <p className="subtitle text-white">{card.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderComponent;
