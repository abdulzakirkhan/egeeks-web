"use client"
import animationData from "@/public/ani.json";
import Lottie from "lottie-react";
import HeroSection from "@/components/HeroSection";
import Progress from "@/components/Progress";
import TechSlider from "@/components/TechSlider";
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

  const technologies =["/Home/dev/Python.png","/Home/dev/react.png","/Home/dev/Mysql.png","/Home/dev/javascript.png","/Home/dev/Css.png","/Home/dev/Php.png"]

  const lis=[
    {
      title:<><span className="text-red font-semibold">AI-Driven Expertise </span> We leverage the latest in AI to deliver smarter, faster, and more impactful solutions. </>
    },
    {
      title:<><span className="text-red font-semibold">Tailored Strategies </span>Every solution is customized to meet your unique business goals.</>
    },
    {
      title:<><span className="text-red font-semibold">Proven Results </span>Our clients see real, measurable success with our data-driven approach.</>
    },
    {
      title:<><span className="text-red font-semibold">Dedicated Support </span> We’re with you every step of the way, offering expert guidance and reliable service.</>
    },
    
  ]

  const featuresCards=[
    {
      title:"Lorem ipsum dolor sit amet consectetur.",
      date:"15/01/2025",
      dept:"Artificial Intelligence",
      description:"Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.",
      image:"/Home/features/1.png"
    },
    {
      title:"Lorem ipsum dolor sit amet consectetur.",
      date:"15/01/2025",
      dept:"Artificial Intelligence",
      description:"Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.",
      image:"/Home/features/2.png"
    },
    {
      title:"Lorem ipsum dolor sit amet consectetur.",
      date:"15/01/2025",
      dept:"Software Development",
      description:"Lorem ipsum dolor sit amet consectetur. Ut quam vitae rutrum fames ullamcorper ultricies. Purus urna diam sed urna cursus.",
      image:"/Home/features/3.png"
    },
  ]
  return (
    <>
      <HeroSection bgImage={"/Home/hero.png"}> 
      <div className="container mx-auto lg:mt-12 px-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="w-full lg:mt-20 md:col-span-7">
            <h1 className="text-white text-2xl lg:text-5xl font-bold">Empowering Innovation with</h1>
            <h1 className="text-red text-5xl font-bold mt-4">AI-Driven Solutions</h1>
            <p className="text-white mt-4 title">At Egeeks Global, we deliver innovative services in Artificial Intelligence, Digital Marketing, SEO, and IT Solutions to elevate your business.</p>



            <div className="flex gap-4 items-center py-7">
              <button className="bg-red text-btnText text-white rounded-md w-161 h-btn">Get In Touch</button>
              <button className="text-btnText text-white  w-161 h-btn rounded-md border-2 border-[#FFFFFF]">Learn More</button>
            </div>
          </div>

          <div className="w-full relative md:col-span-5">
            <div className="h-full w-full lg:-mt-32 me-2 lg:w-full lg:h-[95vh]">
              <Lottie className="h-full w-full" animationData={animationData} loop={true} />
            </div>
          </div>
        </div>
      </div>
        <div className="w-full absolute -bottom-8 hidden xl:block h-32 bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/shadow.png)",zIndex:"999",backdropFilter:"blur(14px)"}} />
      </HeroSection>


      <section className="bg-[#0C0C0C] -mt-6 py-12">
        <div className="container mx-auto px-6 mt-12">
          <h1 className="text-5xl font-bold z-50 text-white text-center">Our Areas of <span className="text-red">Expertise</span> </h1>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
            {
              cards.map((card,index) => (
                <div className="w-full cards border-2 flex justify-center items-center h-80 lg:h-60 border-[#6D7D86]" key={index}>
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



      <section className="bg-no-repeat bg-center w-full lg:h-[90vh]" style={{backgroundImage:"url(/Home/ai.png)"}}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 py-6">
            <div className="w-full md:col-span-4"></div>
            <div className="w-full md:col-span-8">
              <h1 className="text-2xl lg:text-5xl text-white font-bold">AI-Powered Solutions for a </h1>
              <h1 className="text-red font-bold text-5xl">Smarter Tomorrow</h1>
              <p className="text-white py-5 tracking-wider">In a world driven by rapid technological advancements, harnessing the power of Artificial Intelligence is no longer a luxury—it's a necessity. At the forefront of this revolution, we provide cutting-edge AI-powered solutions designed to transform your vision into reality. From streamlining business operations to enhancing customer experiences, our AI-driven tools empower individuals and organizations to stay ahead in a competitive landscape.</p>

              <h1 className="text-white text-5xl font-semibold">Tailored Innovation for Your</h1>
              <h1 className="text-red text-5xl font-semibold">Unique Needs</h1>
              <p className="py-5 text-white tracking-wider">Whether you're looking to optimize your workflow, develop intelligent systems, or make data-driven decisions, we deliver tailor-made solutions to meet your unique needs. Join us on the journey to a smarter tomorrow, where innovation knows no bounds and possibilities are limitless.</p>
            </div>
          </div>
        </div>
      </section>




      {/* <section className="mt-16 pt-5 bg-cover bg-no-repeat w-full bg-center" style={{backgroundImage:"url(/Home/theme.png)"}}>
        <div className="container py-12 mx-auto px-6">
          <h1 className="text-2xl lg:text-5xl text-white text-center font-bold">Technologies we work with</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center gap-12 py-8">
            {technologies.map((item,index) =>(
              <div className="w-full flex justify-center items-center" key={index}>
                <Image src={item} width={`${index === 0 ? 300 : index === 1 ? 80 : index === 2 ? 110 : index === 3 ? 70 : index === 4 ? 110 : 120}`} height={120} alt="" className="" />
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <TechSlider />




      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="w-full lg:col-span-7">
              <h1 className="text-5xl text-white font-bold">Why <span className="text-red">Choose Us</span></h1>
              <p className="mt-5 text-white title">At <strong>Egeeks Global</strong>, we are a team of forward-thinking innovators committed to transforming businesses with AI-powered solutions. </p>

              <ol className="space-y-1 tracking-wider title pt-5">
                {lis.map((li,index)=> (
                  <li className="text-white" key={index}>{li.title}</li>
                ))}
              </ol>

              <div className="text-center mt-5">
                <button className="text-btnText w-161 h-btn bg-red rounded-md text-white">Get Started</button>
              </div>
            </div>
            <div className="w-full relative lg:col-span-5">
                {/* <img src={"/Home/hand-bg.png"} alt="" className="absolute -top-9 -right-22 z-0" /> */}
                <div className="bg-no-repeat bg-center w-full xl:max-w-96 xl:ms-32" style={{backgroundImage:"url(/Home/hand-bg.png)", backgroundSize:"100% 100%"}}>
                  <img src={"/Home/hand.png"} alt="" height={200} className="w-full" />
                </div>
            </div>
          </div>
        </div>
      </section>






      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-2">
            <h5 className="text-white text-5xl">Your Vision</h5>
            <h1 className="text-2xl lg:text-5xl text-red font-semibold"> Our Technology.</h1>
            <p className="title text-[#EEEEEE]">Partner with us to achieve unparalleled success in the digital world.</p>
          </div>
        </div>
          <div className="pt-5 mt-8 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/theme.png)"}}>
            <div className="container py-12 mx-auto px-6">
              <div className="flex flex-wrap justify-center items-center gap-12 py-8">
                <Progress percentage={99} title={"Client Satisfication"} />
                <Progress percentage={95} title={"Client Retention Rate"} w={"w-281"} />
                <Progress percentage={"100+"} title={"Pool of Experts"} w={"w-281"} />
              </div>
            </div>
          </div>
      </section>






      <section>
        <div className="container mx-auto px-6">
          <h1 className="text-white text-5xl font-semibold">Featured Insights</h1>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-10">
            {featuresCards.map((card,index) => (        
              <div className="w-full" key={index}>
                <Image src={card.image} width={200} className="w-full" height={400} alt="" />
                <div className="flex justify-between items-center py-6">
                  <span className="text-white">{card.date}</span>
                  <span className="text-white">{card.dept}</span>
                </div>
                <h1 className="text-3xl text-white">{card.title}</h1>
                <p className="text-white font-normal title">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section>
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-2">
            <h1 className="text-2xl lg:text-5xl font-semibold text-white">Certifications</h1>
            <p className="text-white title">Our certifications validate our commitment to delivering high-quality, reliable, and innovative solutions.</p>
          </div>
          <div className="flex justify-center items-center gap-12 py-8">
            <div className="">
              <Image src={"/Home/certifications/1.png"} width={200} height={300} alt="" className="" />
            </div>
            <div className="">
             <Image src={"/Home/certifications/2.png"} width={200} height={300} alt="" className="" />
            </div>
            <div className="">
             <Image src={"/Home/certifications/3.png"} width={200} height={300} alt="" className="" />
            </div>
          </div>
        </div>
      </section>





      <section className="mt-16 pt-5 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/themeblack.png)"}}>
        <div className="container py-12 mx-auto px-6">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="heading2">Ready to Transform Your Business?</h1>
            <p className="text-white title md:px-40 text-center pb-5">Partner with Egeeks Global to unlock the power of AI, elevate your digital strategy, and achieve sustainable growth.</p>
            <button className="text-btnText text-white bg-red h-btn px-6 rounded-md">Let's Work Together</button>
          </div>
        </div>
      </section>

      
    </>
  );
}
