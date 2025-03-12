"use client"

import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import React from 'react'
import Cards from './_components/Cards'
import LgCard from './_components/LgCard'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import LocationCard from './_components/LocationCard'

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
        }
    ]
    const singleCard=[
        {
            title:"Our Commitment",
            image:"/About-us/Cards/3.png",
            des1:"Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna. Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna.",
            des2:"Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna. Lorem ipsum dolor sit amet consectetur. Volutpat sed porttitor pretium tellus lacus justo. Dictum sed id commodo eget. Magna nibh ultrices facilisis lacus magnis sed. Dui et lectus vel interdum etiam nunc molestie nisl urna.",
        },
    ]




    const locationData = [
        {
            title: "Sharjah Office",
            address:"Office B 39-017, Block B, Sharjah Research Technology and Innovation Park, Sharjah. UAE",
            phone:"+971-503026376",
            email:"hr@egeeksglobal.com",
            image:"/About-us/1.png",
            location:  <MdLocationOn size={43} className="text-white -mt-2" />,
            phoneIcon:<IoIosCall />,
            emailIcon:<MdEmail />
        },
        {
            title: "Islamabad Office",
            address:"eGeeks Global, Office LGF-3 , Lower Ground Floor level Merdian Software Technology Park Nadra Building Rehmanabad Rawalpindi, Pakistan.",
            phone:"+92 51 2716350",
            email:"hr@egeeksglobal.com",
            image:"/About-us/2.png",
            location : <MdLocationOn size={43} className="text-white -mt-2" />,
            phoneIcon:<IoIosCall />,
            emailIcon:<MdEmail />
        },
        {
            title: "London Office",
            address:"60 Peach Street Wokingham RG4 01XG, London, UK",
            phone:"+44 7577 530783",
            email:"hr@egeeksglobal.com",
            image:"/About-us/3.png",
            location: <MdLocationOn size={43} className="text-white -mt-2" />,
            phoneIcon:<IoIosCall />,
            emailIcon:<MdEmail />
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
                    <LgCard key={index} image={card?.image}
                    index={index} title={card?.title}
                    des1={card?.des1} des2={card?.des2} des3={card?.des3} />
                ))}

            </div>
        </div>
      </section>


        <Cards />

        <div className="container mx-auto px-6 py-16 mt-12">
            <div className="flex flex-col gap-20">
                {singleCard.map((card, index) => (
                    <LgCard key={index} image={card?.image}
                    index={index} title={card?.title}
                    des1={card?.des1} des2={card?.des2} des3={card?.des3} />
                ))}

            </div>
        </div>

      <section className="py-12">
        <div className="container mx-auto px-6">
            <h1 className="heading2 font-orbitron !w-full text-center">Our Locations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center py-16">
                {locationData.map((card , index) => (
                    <LocationCard key={index} {...card}  />
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
