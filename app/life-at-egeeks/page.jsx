"use client"

import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import React from 'react'

const LifeAteGeeksPage = () => {

    const cardsData =[
        {
            innerTitle:"Work Culture",
            description:"Our work culture is built on trust, collaboration, and mutual respect. We prioritize open communication and create a space where every team member's voice is heard. You’ll find an inclusive environment that encourages collaboration and shared success. At eGeeks Global, we believe that diverse perspectives lead to innovative solutions, and we embrace the strengths that each individual brings to the table.",
            image:"/Life-Egeeks/Cards/1.png"
        },
        {
            innerTitle:"Learning Opportunities",
            description:"At eGeeks Global, continuous learning is at the heart of everything we do. We encourage our employees to stay ahead of industry trends by providing access to training programs, workshops, and mentorship opportunities. We believe in investing in the personal and professional growth of our team, ensuring that everyone has the resources and support they need to expand their knowledge and skillsets.",
            image:"/Life-Egeeks/Cards/2.png"
        },
        {
            innerTitle:"Innovation and Creativity",
            description:"Innovation and creativity are fundamental to our approach at eGeeks Global. We constantly seek new ways to solve problems, improve processes, and push the boundaries of what’s possible. Our team is encouraged to think outside the box and contribute fresh ideas, whether it's for the latest project or a long-term strategy. If you have a passion for creativity and a desire to make an impact, eGeeks Global is the place for you.",
            image:"/Life-Egeeks/Cards/3.png"
        },
        {
            innerTitle:"Work-Life Balance",
            description:"We understand the importance of maintaining a healthy work-life balance. Our flexible working hours, remote work options, and supportive policies are designed to help employees balance their personal lives with their professional commitments. At eGeeks Global, we want our team to feel fulfilled both at work and outside of it, ensuring everyone has the opportunity to recharge and pursue their personal passions.",
            image:"/Life-Egeeks/Cards/4.png"
        },
        {
            innerTitle:"Employee Perks",
            description:"At eGeeks Global, we value our employees and offer a range of perks to show our appreciation. From competitive salaries and performance bonuses to health benefits and wellness programs, we are committed to ensuring that our team is well taken care of. Additionally, we offer team-building events, access to cutting-edge tools and technologies, and opportunities for career advancement.",
            image:"/Life-Egeeks/Cards/5.png"
        },
     ]
  return (
    <>
        <HeroSection bgImage={"/Life-Egeeks/hero.png"}> 
            <div className="container mx-auto mt-12 px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 justify-center">
                <div className="w-full mt-12 md:col-span-12 flex flex-col justify-center items-center">
                    <h1 className="text-white text-6xl font-bold">Life at <span className="text-red">eGeeks Global</span> </h1>
                    <p className="text-white mt-6 py-3 lg:py-7 title text-center">At eGeeks Global, we believe in creating a workplace that fosters creativity, innovation, and collaboration. Our team is our greatest asset, and we are committed to providing an environment where everyone can thrive, grow, and contribute to our mission of delivering exceptional digital solutions to our clients.</p>

                </div>
                </div>
            </div>
        </HeroSection>



         <section className="py-12">
                <div className="container flex flex-col gap-12 mx-auto px-6">
                    {cardsData.map((card, index) => (
                        <div className={`grid  grid-cols-1 md:grid-cols-12 my-14 lg:grid-cols-12 justify-center items-center h-52`} key={index}>
                            {index % 2 !== 0 ? (
                                // Image first when index is even
                                <>
                                    <div className={`w-full md:col-span-5 h-full relative`}>
                                        <Image src={card.image} width={300} height={100} alt="" className="w-full" />
                                        <h1 className="text-2xl lg:text-4xl text-white absolute top-3 left-2">{card.innerTitle}</h1>
                                    </div>
                                    <div className="w-full h-full px-4 md:col-span-6 text-white">
                                        <h1 className="text-center heading-4 mb-8">{card.title}</h1>
                                        <p className="title tracking-wider text-[#FFFFFF]">{card.description}</p>
                                    </div>
                                </>
                            ) : (
                                // Text first when index is odd
                                <>
                                    <div className="w-full h-full px-4 md:col-span-6 text-white">
                                        <p className="title tracking-wider text-[#FFFFFF]">{card.description}</p>
                                    </div>
                                    <div className={`w-full h-full md:col-span-5 relative`}>
                                        <Image src={card.image} width={300} height={100} alt="" className="w-full" />
                                        <h1 className="text-2xl absolute top-2 left-2 lg:text-4xl text-white">{card.innerTitle}</h1>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
        </section>




        <section className="mt-16 pt-5 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/themeblack.png)"}}>
            <div className="container py-12 mx-auto px-6">
            <div className="flex flex-col justify-center items-center space-y-4">
                <h1 className="heading2">Join Our Team</h1>
                <p className="text-white title md:px-40 text-center pb-5">If you’re looking for a company that values innovation, creativity, and professional growth while maintaining a healthy work-life balance, eGeeks Global is the perfect place to build your career. Join us and be part of a dynamic team that’s making a difference.</p>
                <button className="text-btnText text-white border-2 border-[#FFFFFF] h-btn px-6 rounded-md">Join Team</button>
            </div>
            </div>
      </section>
    </>
  )
}

export default LifeAteGeeksPage
