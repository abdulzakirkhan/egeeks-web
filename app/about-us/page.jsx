"use client"

import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import React from 'react'

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

    const setsData =[
        {
            title:"Integrity",
            description:"We uphold the highest standards of honesty, transparency, and ethical behavior in all our interactions.",
            icon:"/About-us/Sets/1.png"
        },
        {
            title:"Client Value",
            description:"We strive to exceed our clients expectations and deliver measurable results that positively impact their business.",
            icon:"/About-us/Sets/2.png"
        },
        {
            title:"Accountbility",
            description:"We take ownership of our actions, ensuring responsibility and reliability in every aspect of our work.",
            icon:"/About-us/Sets/3.png"
        },
        {
            title:"People Driven",
            description:"As a people-first organization, we prioritize the well-being and success of our employees, clients, and communities.",
            icon:"/About-us/Sets/4.png"
        },
        {
            title:"Collaboration",
            description:"We believe in the power of teamwork, combining diverse skills and perspectives to achieve extraordinary outcomes.",
            icon:"/About-us/Sets/5.png"
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
            <div className="container mx-auto mt-12 px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 justify-center">
                <div className="w-full mt-20 md:col-span-12 flex flex-col justify-center items-center">
                    <h1 className="text-white text-6xl font-bold lg:py-6">Our Path to <span className="text-red">Innovation</span> </h1>
                    <p className="text-white mt-6 py-3 lg:py-7 title text-center">We are passionate about driving innovation and creating meaningful solutions. Our team combines expertise in technology, design, and strategy to deliver services that empower individuals and businesses to thrive. With a customer-centric approach and a focus on excellence, we work tirelessly to turn your vision into reality and help you achieve lasting success.</p>

                </div>
                </div>
            </div>
            <div className="w-full hidden lg:block h-28 mt-24 bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/shadow.png)",zIndex:"999",backdropFilter:"blur(14px)"}} />
      </HeroSection>



      <section className="mt-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col gap-20">
                {cards.map((card, index) => (
                    <div
                        className={`flex justify-center items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        key={index}
                    >
                        <div className="">
                        <Image
                            src={card.image}
                            width={392}
                            height={392}
                            alt=""
                            className=""
                        />
                        </div>
                        <div className="w-full">
                        <h1 className={`text-white  ${index === 0 ? "text-end" :""} w-full text-2xl lg:text-5xl font-semibold -mt-10 py-3`}>
                            {card.title}
                        </h1>

                        <div className={`cards2 h-64 flex flex-col justify-center  ${index === 0 ? "-ml-12" : "-mr-12"} bg-transparent text-[#FFFFFF] p-6 border-2 border-[#ADC8D5] rounded-lg`}>
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


      <section className="mt-20 bg-center bg-no-repeat" style={{backgroundImage:"url(/About-us/Sets/shadow.png)",backgroundSize:"cover"}}>
        <div className="container mx-auto px-6">
            <h1 className="text-white text-2xl lg:text-5xl text-center font-bold">What Sets Us Apart</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center py-12">
                {setsData.slice(0, 3).map((card, index) => (
                    <div className="w-full space-y-3 p-8 border-2 border-[#5A686F] cards h-64" key={index}>
                    <Image src={card.icon} width={60} height={60} alt="" />
                    <h3 className="text-white text-2xl lg:text-3xl">{card.title}</h3>
                    <p className="subtitle text-[#FFFFFF]">{card.description}</p>
                    </div>
                ))}
                {setsData.length === 5 && (
                    <div className="flex justify-center gap-6 col-span-3">
                    {setsData.slice(3).map((card, index) => (
                        <div className="w-full md:w-1/3 space-y-3 p-8 border-2 border-[#5A686F] cards h-64" key={index}>
                        <Image src={card.icon} width={60} height={60} alt="" />
                        <h3 className="text-white text-2xl lg:text-3xl">{card.title}</h3>
                        <p className="subtitle text-[#FFFFFF]">{card.description}</p>
                        </div>
                    ))}
                    </div>
                )}
            </div>

            
        </div>
      </section>



      <section className="py-12">
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
      </section>



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
