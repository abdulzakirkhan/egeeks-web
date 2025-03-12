"use client"
import Image from 'next/image'
import React from 'react'

const LgCard = ({image,title,des1,des2,des3,index}) => {
  return (
    <>
      <div className={`flex justify-center flex-wrap lg:flex-nowrap items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} key={index} >
            <div className="">
                <Image src={image} width={392} height={392} alt="" className="" />
            </div>
            <div className="w-full">
                <h1 className={`text-white  ${index === 0 ? "text-end" :""} w-full text-2xl lg:text-5xl font-semibold -mt-10 py-3`}>
                    {title}
                </h1>

                <div className={`cards2 lg:h-64 flex flex-col justify-center  ${index === 0 ? "lg:-ml-12" : "lg:-mr-12"} bg-transparent text-[#FFFFFF] p-6 border-2 border-[#ADC8D5] rounded-lg`}>
                    <p className="subtitle py-3">{des1}</p>

                    <p className="subtitle py-3">{des2}</p>

                    <p className="subtitle">{des3}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LgCard
