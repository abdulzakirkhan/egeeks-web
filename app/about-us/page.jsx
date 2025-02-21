"use client"

import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import React from 'react'
import Cards from './_components/Cards'

const AbouUsPage = () => {
    const cards =[
        {
            title:"Our Vision",
            image:"/About-us/Cards/1.png",
            des1:"Lorem ipsum dolor sit amet consectetur. Imperdiet convallis lacus sagittis lorem diam nibh et quis hendrerit. Ac enim elementum consectetur duis integer magna lacus. Eu viverra faucibus urna pellentesque eu. Massa eleifend est duis platea eget.",
            des2:"Lorem ipsum dolor sit amet consectetur. Imperdiet convallis lacus sagittis lorem diam nibh et quis hendrerit. Ac enim elementum consectetur duis integer magna lacus. Eu viverra faucibus urna pellentesque eu. Massa eleifend est duis platea eget.",
            des3:"Lorem ipsum dolor sit amet consectetur. Imperdiet convallis lacus sagittis lorem diam nibh et quis hendrerit. Ac enim elementum consectetur duis integer magna lacus. Eu viverra faucibus urna pellentesque eu. Massa eleifend est duis platea eget."
        },
        {
            title:"Our Approach",
            image:"/About-us/Cards/2.png",
            des1:"Lorem ipsum dolor sit amet consectetur. Imperdiet convallis lacus sagittis lorem diam nibh et quis hendrerit. Ac enim elementum consectetur duis integer magna lacus. Eu viverra faucibus urna pellentesque eu. Massa eleifend est duis platea eget.",
            des2:"Lorem ipsum dolor sit amet consectetur. Imperdiet convallis lacus sagittis lorem diam nibh et quis hendrerit. Ac enim elementum consectetur duis integer magna lacus. Eu viverra faucibus urna pellentesque eu. Massa eleifend est duis platea eget."
        },
    ]


    const singleCard=[
        {
            title:"Our Commitment",
            image:"/About-us/Cards/3.png",
            des1:"Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna. Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna.",
            des2:"Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna. Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna.",
        },
    ]
  return (
    <>
        <HeroSection bgImage={"/About-us/hero.png"}> 
        <div className=""> {/* Ensure HeroSection acts as a relative container */}
            <div className="container mx-auto lg:mt-12 px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 justify-center">
                    <div className="w-full lg:mt-20 md:col-span-12 flex flex-col justify-center items-center">
                        <h1 className="text-white text-center text-6xl font-bold lg:py-6">
                            Our Path to <span className="text-red">Innovation</span>
                        </h1>
                        <p className="text-white mt-6 py-3 lg:py-7 title text-center">
                            We are passionate about driving innovation and creating meaningful solutions. Our team combines expertise in technology, design, and strategy to deliver services that empower individuals and businesses to thrive. With a customer-centric approach and a focus on excellence, we work tirelessly to turn your vision into reality and help you achieve lasting success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Fixed Shadow Image */}
            <div 
                className="w-full absolute bottom-0 hidden lg:block h-28 left-0 bg-no-repeat bg-center" 
                style={{
                    backgroundImage: "url(/Home/shadow.png)",
                    zIndex: "999",
                    backdropFilter: "blur(14px)"
                }} 
            />
        </div>
    </HeroSection>




      <section className="mt-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col gap-20">
                {cards.map((card, index) => (
                    <div className={`flex justify-center flex-wrap lg:flex-nowrap items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} key={index} >
                        <div className="">
                            <Image src={card.image} width={392} height={392} alt="" className="" />
                        </div>
                        <div className="w-full">
                            <h1 className={`text-white  ${index === 0 ? "text-end" :""} w-full text-2xl lg:text-5xl font-semibold -mt-10 py-3`}>
                                {card.title}
                            </h1>

                            <div className={`cards2 lg:h-64 flex flex-col justify-center  ${index === 0 ? "lg:-ml-12" : "lg:-mr-12"} bg-transparent text-[#FFFFFF] p-6 border-2 border-[#ADC8D5] rounded-lg`}>
                                <p className="subtitle py-3">{card?.des1}</p>

                                <p className="subtitle py-3">{card?.des2}</p>

                                <p className="subtitle">{card.des3}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>


        <Cards />



      {/* <section className="py-12">
        <div className="container mx-auto px-6">
        <div className="flex flex-col gap-20">
                {singleCard.map((card, index) => (
                    <div
                        className={`flex justify-center items-center gap-4`}
                        key={index}
                    >
                        <div className="">
                          <Image src={card.image} width={428} height={428} alt="" className="" />
                        </div>
                        <div className="w-full">
                        <h1 className={`text-white text-end w-full text-2xl lg:text-5xl font-semibold -mt-10 py-3`}>
                            {card.title}
                        </h1>

                        <div className={`cards2 h-60 flex flex-col justify-center -ml-24 -mt-3 bg-transparent text-[#FFFFFF] p-6 border-2 border-[#ADC8D5] rounded-lg`}>
                            <p className="subtitle py-3">{card?.des1}</p>

                            <p className="subtitle py-3">{card?.des2}</p>

                            <p className="subtitle">{card.des3}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section> */}



      <section className="mt-16 pt-5 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/themeblack.png)"}}>
        <div className="container py-12 mx-auto px-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="heading2">Ready to Transform Your Business?</h1>
            <p className="text-white title md:px-40 text-center pb-5">Partner with Egeeks Global to unlock the power of AI, elevate your digital strategy, and achieve sustainable growth.</p>
            <button className="text-btnText text-white bg-red h-btn px-6 rounded-md">Contact us Today</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AbouUsPage
