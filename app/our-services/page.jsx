"use client"
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
     const cardsData =[
        {
            id: 1,
            title:"Artifical Intelligence",
            description:"Unlock the full potential of Artificial Intelligence with our cutting-edge AI services tailored to meet your unique needs. Whether you're looking to develop smart chatbots, automate workflows, enhance decision-making with predictive analytics, or design AI-powered solutions, we deliver innovative and scalable results. Our team ensures seamless integration, user-friendly interfaces, and ethical AI practices, empowering businesses and individuals to stay ahead in the ever-evolving tech landscape. Let us help you transform ideas into intelligent solutions!",
            image:"/Services/1.png"
        },
        {
            id: 2,
            title:"Web Development",
            description:"Our web development services are designed to bring your vision to life with cutting-edge technology and user-focused designs. We specialize in creating dynamic, responsive, and visually appealing websites that deliver seamless user experiences across all devices. From custom website development to e-commerce platforms, content management systems, and web applications, we ensure every project is tailored to your specific needs and goals. Our team combines technical expertise with creative flair to build websites that not only look great but also perform flawlessly, helping you establish a strong online presence and achieve your business objectives.",
            image:"/Services/2.png"
        },
        {
            id: 3,
            title:"Digital Marketing",
            description:"Our digital marketing services are designed to help your brand thrive in the ever-evolving online landscape. We craft data-driven strategies that combine creativity and technology to boost your online presence and connect with your target audience effectively. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management, content marketing, and email campaigns, we offer comprehensive solutions tailored to your goals. Let us help you increase brand awareness, drive traffic, and achieve measurable results that elevate your business to new heights.",
            image:"/Services/3.png"
        },
        {
            id: 4,
            title:"Mobile App Development",
            description:"Our mobile app development services bring your ideas to life with innovative, user-centric solutions. We specialize in designing and building high-performance mobile applications for iOS and Android platforms, tailored to meet your specific needs and goals. From concept to launch, our team ensures every app is visually appealing, feature-rich, and optimized for seamless user experiences. Whether you need a business app, e-commerce solution, or custom mobile tool, we deliver reliable, scalable, and future-ready applications that help you connect with your audience and stay ahead in the digital age.",
            image:"/Services/4.png"
        },
        {
            id: 5,
            title:"UI/UX Designing",
            description:"Our design services combine creativity and strategy to deliver visually stunning and impactful solutions. Whether you need captivating graphic designs, user-friendly interfaces, or engaging branding materials, our team is dedicated to crafting designs that resonate with your audience. From logo creation and marketing collateral to web and app design, we focus on blending aesthetics with functionality to create memorable experiences. Let us help you communicate your brand's identity and vision through designs that leave a lasting impression and drive meaningful engagement.",
            image:"/Services/5.png"
        },
        {
            id: 6,
            title:"Research",
            description:"Our research services provide in-depth, data-driven insights to empower informed decision-making and drive success. Whether you're conducting academic studies, market research, or business analysis, we deliver thorough and reliable results tailored to your objectives. From gathering and analyzing data to presenting actionable findings, our team ensures accuracy, relevance, and clarity. Let us support your research needs with expertise and dedication, helping you uncover valuable knowledge and achieve your goals with confidence.",
            image:"/Services/6.png"
        },
     ]
  return (
    <>
      <HeroSection bgImage={"/Services/hero.png"}> 
        <div className="container mx-auto mt-12 px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="w-full md:col-span-8">
                <h1 className="text-white text-6xl font-bold">Innovative Solutions for a</h1>
                <h1 className="text-red text-6xl font-bold mt-4">Smarter Tomorrow</h1>
                <p className="text-white mt-4 title">At eGeeks Global, we redefine the way you approach challenges with cutting-edge services designed to empower individuals and businesses alike. Explore our comprehensive services.</p>



                <div className="py-7">
                <button className="text-btnText text-white w-258 h-btn rounded-md border border-[#FFFFFF]">Request Service</button>
                </div>


            </div>
            </div>
        </div>
      </HeroSection>


      <section className="mt-8 lg:mt-20 lg:py-12">
        <div className="container mx-auto px-6">
            <h1 className="text-white text-2xl md:mt-0 lg:text-5xl pb-14 font-bold text-center">Services we offer</h1>
            {cardsData.map((card, index) => (
                <Link href={`/our-services/${card.id}`} className={`grid gap-4 lg:gap-12  ${index === 1 ? "bg-[#23282A] rounded-l-lg rounded-r-xl ps-0 lg:ps-3" : index === 3 ? "bg-[#23282A] rounded-l-lg rounded-r-xl lg:ps-3" : index === 5 ? "bg-[#23282A] rounded-l-lg rounded-r-xl lg:ps-3" : ""} grid-cols-1 md:grid-cols-12 my-14 lg:grid-cols-12 justify-center items-center`} key={index}>
                    {index % 2 === 0 ? (
                        // Image first when index is even
                        <>
                            <div className={`w-full md:col-span-4`}>
                                <Image src={card.image} width={300} height={100} alt="" className="w-full lg:h-96 lg:w-96" />
                            </div>
                            <div className="w-full md:col-span-8 text-white">
                                <h1 className="text-center heading-4 mb-8">{card.title}</h1>
                                <p className="subtitle tracking-wider text-[#FFFFFF]">{card.description}</p>
                            </div>
                        </>
                    ) : (
                        // Text first when index is odd
                        <>
                            <div className="w-full md:col-span-8 p-4 lg:-p-0 text-white">
                                <h1 className="text-center heading-4 mb-8">{card.title}</h1>
                                <p className="subtitle tracking-wider text-[#FFFFFF]">{card.description}</p>
                            </div>
                            <div className={`w-full ${index === 1 ? "flex justify-end" : index === 3 ? "flex justify-end" : index === 5 ? "flex justify-end" :""} md:col-span-4`}>
                                <Image src={card.image} width={300} height={100} alt="" className="w-full lg:h-96 lg:w-96" />
                            </div>
                        </>
                    )}
                </Link>
            ))}
        </div>
      </section>

      <section className="my-16 pt-5 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/themeblack.png)"}}>
        <div className="container py-12 mx-auto px-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="heading2">Take the Leap into Innovation!</h1>
            <p className="text-white title md:px-40 text-center pb-5">We’re here to help you embrace new possibilities.</p>
            <button className="text-btnText text-white border h-btn px-6 rounded-md">Inquire Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
