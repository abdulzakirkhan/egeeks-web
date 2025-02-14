"use client"



import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {


  const cards=[
    {
      title:"Artifical Intelligence",
      description:"Our AI solutions include machine learning, natural language processing, and predictive analytics, helping you automate processes and gain actionable insights.",
      icon:"/Home/icons/ai.png"
    },
    {
      title:"Web Development",
      description:"Our web development team delivers customized solutions, including e-commerce platforms, content management systems, and more.",
      icon:"/Home/icons/web.png"
    },
    {
      title:"Digital Marketing",
      description:"Maximize your online reach and grow your brand with our digital marketing services. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns.",
      icon:"/Home/icons/marketing.png"
    },
    {
      title:"Research",
      description:"Our research services are designed to provide you with deep insights and well-analyzed data. Whether you need academic research, market analysis, or technical studies.",
      icon:"/Home/icons/research.png"
    },
    {
      title:"Mobile App Development",
      description:"We specialize in building apps for both Android and iOS platforms, ensuring top performance and user engagement.",
      icon:"/Home/icons/mobile.png"
    },
    {
      title:"Designing",
      description:"Our research services are designed to provide you with deep insights and well-analysed data. ",
      icon:"/Home/icons/designing.png"
    },
  ]

  
  return (
    <>
      <HeroSection bgImage={"/Home/hero.png"}> 
      <div className="container mx-auto mt-12 px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="w-full mt-20 md:col-span-7">
            <h1 className="text-white text-5xl font-bold">Empowering Innovation with</h1>
            <h1 className="text-red text-5xl font-bold mt-4">AI-Driven Solutions</h1>
            <p className="text-white mt-4 title">At Egeeks Global, we deliver innovative services in Artificial Intelligence, Digital Marketing, SEO, and IT Solutions to elevate your business.</p>



            <div className="flex gap-4 items-center py-7">
              <button className="bg-red text-btnText text-white rounded-md w-161 h-btn">Get In Touch</button>
              <button className="text-btnText text-white border-2 w-161 h-btn rounded-md border-[#FFFFFF]">Learn More</button>
            </div>
          </div>

          <div className="w-full relative md:col-span-5">
            <div className="bg-no-repeat absolute -top-36 -right-20 me-2 bg-center w-full h-[95vh]" style={{backgroundImage:"url(/Home/animation.png)",backgroundSize:"100% 100%"}}></div>
          </div>
        </div>
      </div>
      <div className="w-full h-28 mt-24 bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/shadow.png)",zIndex:"999",backdropFilter:"blur(14px)"}} />
      </HeroSection>


      <section className="bg-[#0C0C0C] -mt-6 py-12">
        <div className="container mx-auto px-6 mt-12">
          <h1 className="text-5xl font-bold text-white text-center">Our Areas of <span className="text-red">Expertise</span> </h1>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
            {
              cards.map((card,index) => (
                <div className="w-full cards border-2 flex justify-center items-center h-60 border-[#6D7D86]" key={index}>
                  <div className="flex px-4 flex-col justify-center items-center text-center gap-6">
                    <Image src={card.icon} width={30} height={20} alt={card.title} />
                    <h1 className="p-0 m-0 text-white">{card.title}</h1>
                    <p className="p-0 m-0 text-white">{card.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>



      <section className="bg-no-repeat bg-center w-full h-[64vh]" style={{backgroundImage:"url(/Home/ai.png)"}}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 py-6">
            <div className="w-full md:col-span-4"></div>
            <div className="w-full md:col-span-8">
              <h1 className="text-5xl text-white font-bold">AI-Powered Solutions for a </h1>
              <h1 className="text-red font-bold text-5xl">Smarter Tomorrow</h1>
              <p className="text-white py-5 tracking-wider">In a world driven by rapid technological advancements, harnessing the power of Artificial Intelligence is no longer a luxury—it's a necessity. At the forefront of this revolution, we provide cutting-edge AI-powered solutions designed to transform your vision into reality. From streamlining business operations to enhancing customer experiences, our AI-driven tools empower individuals and organizations to stay ahead in a competitive landscape.</p>

              <h1 className="text-white text-5xl font-semibold">Tailored Innovation for Your</h1>
              <h1 className="text-red text-5xl font-semibold">Unique Needs</h1>
              <p className="py-5 text-white tracking-wider">Whether you're looking to optimize your workflow, develop intelligent systems, or make data-driven decisions, we deliver tailor-made solutions to meet your unique needs. Join us on the journey to a smarter tomorrow, where innovation knows no bounds and possibilities are limitless.</p>
            </div>
          </div>
        </div>
        <div className="w-full h-20 -mt-6 bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/shadow.png)",zIndex:"999",backdropFilter:"blur(14px)"}} />
      </section>
    </>
  );
}
