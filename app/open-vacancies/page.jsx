"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoSearch } from "react-icons/io5";

const OpenVacanciesPage = () => {
    const vacancies = [
        {
            id:1,
            title:"Junior UI/UX Designer",
            contractType:"Permanent",
            posted:"Posted 1 month ago",
            location:"Rawalpindi"
        },
        {
            id:2,
            title:"Software Engineer (.NET)",
            contractType:"Internship",
            posted:"Posted 2 months ago",
            location:"Rawalpindi"
        },
        {
            id:3,
            title:"Assistant Team Lead",
            contractType:"Permanent",
            posted:"Posted 2 months ago",
            location:"Rawalpindi"
        },
        {
            id:4,
            title:"Human Resource Intern",
            contractType:"Internship",
            posted:"Posted 1 year ago",
            location:"Rawalpindi"
        },
        {
            id:5,
            title:"Full Stack Engineer (React & Python)",
            contractType:"Internship",
            posted:"Posted 1 year ago",
            location:"Rawalpindi"
        },
        {
            id:6,
            title:"Mobile Application Developer",
            contractType:"Permanent",
            posted:"Posted 1 year ago",
            location:"Rawalpindi"
        },
        {
            id:7,
            title:"Human Resource Intern",
            contractType:"Internship",
            posted:"Posted 1 year ago",
            location:"Rawalpindi"
        },
    ]
  return (
    <>
      <section className="mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center py-12 border-b border-gray-600">
            <div>
              <h1 className="text-white text-3xl lg:text-6xl font-bold">
                Open Vacancies
              </h1>
            </div>
            <div className="relative">
              <input
                placeholder="Search"
                className="bg-transparent border-2 py-2 px-6 rounded-lg text-white border-red focus:outline-none"
              />
              <IoSearch size={26} className="absolute top-2 right-2 text-white" />
            </div>
          </div>
          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 gap-5 mt-6">
            <div className="w-full space-y-4 md:space-y-0 lg:space-x-3 flex flex-wrap">
                {/* Category Dropdown */}
                <select className="text-white p-3 w-full lg:w-244 bg-red rounded-md">
                <option value="">Category</option>
                <option value="engineering">Engineering</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                </select>

                {/* Job Type Dropdown */}
                <select className="text-white p-3 w-full lg:w-244 bg-red rounded-md">
                <option value="">Job Type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="remote">Remote</option>
                </select>

                {/* Location Dropdown */}
                <select className="text-white p-3 w-full lg:w-244 bg-red rounded-md">
                <option value="">Location</option>
                <option value="new-york">New York</option>
                <option value="san-francisco">San Francisco</option>
                <option value="remote">Remote</option>
                </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 py-12">

            {vacancies.map((job,index) => (
                <div className="w-full flex-wrap bg-white rounded-lg flex justify-between items-center p-6" key={index}>
                    <div className="space-y-3">
                        <h2 className="text-black text-32 font-semibold">{job.title}</h2>
                        <div className="flex items-center gap-2">
                            <Image src={"/Vacancies/bag.png"} width={24} height={24} alt="" />    
                            <span className="text-20">{job.contractType}</span>
                        </div>
                        <div className="flex items-center flex-wrap py-4 md:pu-0 gap-2">
                            <div className="flex items-center gap-2">
                                <Image src={"/Vacancies/calander.png"} width={24} height={24} alt="" />  
                                <span className="text-20">{job.posted}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src={"/Vacancies/location.png"} width={24} height={24} alt="" />  
                                <span className="text-20">{job.location}</span>
                            </div>
                        </div>
                    </div>

                    <Link href={`/open-vacancies/${job.id}`} className="flex justify-center rounded-lg items-center text-white w-137 h-56 bg-red">Apply Now</Link>
                </div>
            ))}
          </div>


          <div className="text-center">
            <button className="text-white bg-red text-btnText w-208 h-63 rounded-lg">Load More</button>
          </div>


        </div>
        



        <section className="mt-16 pt-5 bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url(/Home/themeblack.png)"}}>
          <div className="container py-12 mx-auto px-6">
            <div className="flex flex-col justify-center items-center space-y-4">
              <h1 className="heading2">Didn’t find the position you were looking for?</h1>
              <p className="text-white title md:px-40 text-center pb-5">Submit your application for future opportunities.</p>
              <Link href={"/application-form"} className="text-btnText border flex justify-center items-center text-white bg-transparent h-btn px-6 rounded-md">Submit Application</Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OpenVacanciesPage;
