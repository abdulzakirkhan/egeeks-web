"use client"

import React from 'react'

const EventsPage = () => {
  const events =[
    {
      title:"CEO Dinner with Sales Team: Strengthening Connections",
      description:"Our CEO treated the Sales Team to an unforgettable dinner, fostering deeper connections and celebrating their hard work.",
      date:"15/01/2025",
      image:"/Events/7.png"
    },
    {
      title:"SINES at NUST: Empowering Future Innovators",
      description:"The SINES event at NUST brought together aspiring innovators and industry experts for an insightful and engaging experience.",
      date:"15/01/2025",
      image:"/Events/11.png"
    },
    {
      title:"Celebrating Work Anniversary",
      description:"Join us in celebrating incredible journey with the company on their work anniversary!",
      date:"15/01/2025",
      image:"/Events/44.png"
    },
    {
      title:"Hi-Tea at Monal with the IT Team",
      description:"A delightful Hi Tea at Monal brought our IT Team together for a relaxed and engaging afternoon.",
      date:"15/01/2025",
      image:"/Events/55.png"
    },
  ]
  return (
    <>
      <section className="mt-32">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl text-white lg:text-6xl font-bold"> <span className="text-red">Events</span> at eGeeks Global</h1>
            <p className="subtitle py-3 text-white">At Egeeks Global, we believe that innovation thrives in a vibrant and engaging environment. Our events are designed to foster collaboration, celebrate achievements, and inspire creativity among our team members.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1276px] mx-auto py">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="flex flex-col gap-2">
                  <img src={"/Events/1.png"} alt='' className="w-full h-1/2 lg:max-w-[200px] object-cover" />
                  <img src={"/Events/2.png"} alt='' className="mt-3 h-1/2 w-full lg:max-w-[200px] object-cover" />
                </div>


                <img src={"/Events/3.png"} alt="" className="w-full max-w-[408px] object-cover" />
              </div>
              <img src={"/Events/6.png"} className="w-full max-w-[624px] object-cover" />
            </div>

            <div className="w-full flex flex-col lg:overflow-hidden gap-6">
              <div className="flex flex-wrap lg:overflow-hidden items-center gap-2">
                <img src={"/Events/4.png"} alt="" className="w-full max-w-[280px] object-cover" />
                <img src={"/Events/5.png"} alt="" className="w-full max-w-[280px] object-cover" />
              </div>
              <img src={"/Events/7.png"} className="w-full max-w-[639px] object-cover" />
            </div>
          </div>
        </div>
      </section>


      <section className="py-12">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-2xl lg:text-6xl font-bold text-white text-center">Events</h1>

          <div className="grid grid-cols-1 h-auto md:grid-cols-2 lg:grid-cols-2 py-12 gap-12">
            {events.map((eve,index) =>( 
              <div className="w-full" key={index}>
                <img src={eve.image} alt='' className="w-full md:h-96" />
                <div className="space-y-5 py-3 md:max-h-56">
                  <p className="text-white m-0 p-0">{eve.date}</p>
                  <h1 className="text-2xl lg:text-4xl m-0 font-bold text-white">{eve.title}</h1>
                  <p className="subtitle text-white">{eve.description}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default EventsPage
