"use client"
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CareersPage = () => {
    const cardsData=[
        {
            description:"We foster a culture of creativity and innovation, where employees are encouraged to bring fresh ideas and take ownership of meaningful projects.",
            image:"/Careers/1.png"
        },
        {
            description:"We prioritize professional development, offering training programs, mentorship, and a clear career advancement path to help you achieve your goals.",
            image:"/Careers/2.png"
        },
        {
            description:"Our team values collaboration, inclusivity, and mutual support, creating a positive and motivating workplace where everyone's voice is heard.",
            image:"/Careers/3.png"
        },
        {
            description:" You'll have the opportunity to work on innovative and impactful projects, including AI-powered tools, intelligent automation, and transformative technologies that shape the future of industries.",
            image:"/Careers/4.png"
        },
        {
            description:"We offer competitive compensation packages, flexible working options, and benefits that support both your professional and personal well-being.",
            image:"/Careers/5.png"
        },
    ]


    const icons=[
        {
            title:"Paid Leaves",
            icon:"/Careers/icons/1.png"
        },
        {
            title:"Subsidized Lunch",
            icon:"/Careers/icons/2.png"
        },
        {
            title:"EOBI Insurance",
            icon:"/Careers/icons/3.png"
        },
        {
            title:"Annual Increment",
            icon:"/Careers/icons/4.png"
        },
        {
            title:"House Rent",
            icon:"/Careers/icons/5.png"
        },
        {
            title:"Competitive Salary",
            icon:"/Careers/icons/6.png"
        },
    ]
  return (
    <>
    <HeroSection bgImage={"/Careers/hero.png"}> 
        <div className="container mx-auto mt-12 px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 justify-center">
            <div className="w-full mt-2 md:col-span-12 flex flex-col justify-center items-center">
                <h1 className="text-white text-6xl font-bold">Join our Team</h1>
                <p className="text-white mt-4 title text-center">At eGeeks Global, we believe that our greatest asset is our people. We are always looking for passionate, creative, and driven individuals to join our team and contribute to our mission of delivering innovative solutions. If you're ready to make an impact and be part of a forward-thinking company, we’d love to hear from you!</p>



                <div className="py-7">
                <Link href={"/open-vacancies"} className="text-btnText flex justify-center items-center text-white w-224 h-btn rounded-md border border-[#FFFFFF]">Explorer Jobs</Link>
                </div>


            </div>
            </div>
        </div>
        <div className="w-full h-28 hidden lg:flex absolute bottom-0 bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/shadow.png)",zIndex:"999",backdropFilter:"blur(14px)"}} />
      </HeroSection>


      <section className="py-8 bg-center bg-no-repeat" style={{backgroundImage :"url(/Careers/shadow-left.png)",backgroundSize:"100% 100%"}}>
        <div className="container mx-auto px-6">
            <h1 className="text-white text-4xl font-bold">Why Work With Us?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-center py-8" >
                {cardsData.map((card,index) => (
                    <div className={`w-full ${index === cardsData.length -1 ? "md:col-span-2" :""}`} key={index}>
                        <div className={`${index === cardsData.length -1 ? "md:col-span-2 flex justify-center items-center" : ""}`}>

                            <div className={`flex flex-col md:flex-row w-full ${index === cardsData.length -1 ? "md:w-1/2" :""} items-center gap-3`}>
                                <Image src={"/Careers/1.png"} width={200} height={200} alt='' className='' />
                                <p className="text-white">We foster a culture of creativity and innovation, where employees are encouraged to bring fresh ideas and take ownership of meaningful projects.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      

      <section className="bg-center bg-no-repeat py-12 mt-8"style={{backgroundImage :"url(/Careers/shadow-right.png)",backgroundSize:"100% 100%"}}>
        <div className="container mx-auto px-6">
            <h1 className="text-white text-2xl pb-7 lg:text-4xl font-bold text-center"> <span className="text-red">Benefits</span> & Perks</h1>


            <div className="flex justify-center items-center gap-8 lg:gap-20 px-8 cust flex-wrap w-full h-min py-12 rounded-md border-2 border-[#5A686F]">
                {icons.map((item,index) =>(
                    <div className="flex flex-col items-center" key={index}>
                        <div className="">
                            <Image src={item.icon} width={`${index === 2 ? 100 : index === 0 ? 120 : index === 1 ? 120 : index === 3 ? 120 : index === 4 ? 120 : 120}`} height={179} alt='' className='' />
                        </div>
                        <h1 className="b-title">{item.title}</h1>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default CareersPage