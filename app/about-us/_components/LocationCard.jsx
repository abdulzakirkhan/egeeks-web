import React from 'react'

const LocationCard = ({title,address,phone,email,image,location,phoneIcon,emailIcon}) => {
  return (
    <div className="min-w[417px]  h-full overflow-hidden p-8 bg-[#23282A] border-2 border-[#7E929B] rounded-2xl">
        <div className="p-6 pe-10 flex flex-col justify-center items-center">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <h1 className="text-white mt-6 heading-4">{title}</h1>
        </div>
        <div className="space-y-2">
            <p className="text-white text-base px-0 body-2 flex gap-2"> {location} {address} </p>
            <p className="text-white text-base px-0 body-2 flex gap-2"> {phoneIcon} {phone}</p>
            <p className="text-white text-base px-0 body-2 flex gap-2">{emailIcon} {email}</p>
        </div>
    </div>
  )
}

export default LocationCard