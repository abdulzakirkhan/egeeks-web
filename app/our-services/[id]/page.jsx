"use client"
import Cards from '@/app/about-us/_components/Cards';
import { cardsData } from '@/app/data';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'
import SliderComponent from './_components/SliderComponent';

const ServicesPage = () => {
  const {id} = useParams();
  console.log("id",id)
  const service = cardsData.find(job => job.id === Number(id));
  console.log("service",service)
  return (
    <>
      <section className="mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="w-full">
              <Image src={service.image} width={1000} height={400} alt={service.title} className="w-full"  />
            </div>
            <div className="w-full space-y-8">
              <h1 className="text-white text-center text-3xl lg:text-4xl font-semibold">{service.title}</h1>
              <p className="text-white subtitle tracking-widest">{service.description}</p>


              <div className="text-center">
                <button className="h-63 w-224 bg-red text-white rounded-lg">Request Service</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cards />




      <section className="py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-3xl lg:text-5xl font-semibold">Other services we offer</h1>
          <div className="py-6">
            <SliderComponent />
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
