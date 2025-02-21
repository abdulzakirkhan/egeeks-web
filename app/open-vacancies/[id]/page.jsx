"use client"
import React, { useState } from 'react'
import { vacancies } from '../data';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';
import { RiWhatsappFill } from "react-icons/ri";
const JobDetailsPage = () => {
    const { id } = useParams(); // Get the job ID from the URL
    const job = vacancies.find(job => job.id === Number(id));
    const [inputValue, setInputValue] = useState("https://yourwebsite.com/job-details");
    const [copied, setCopied] = useState(false);

    
    const benifits=[
        "A creative and inclusive work environment.",
        "Opportunities to work on exciting and diverse projects.",
        "Competitive salary and benefits.",
        "Professional development and growth opportunities.",
        "Flexible working arrangements, including remote options.",
    ]


    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputValue)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset "Copied!" after 2 seconds
            })
            .catch(err => console.error("Failed to copy:", err));
    };

  return (
    <>
      <section className="mt-24 pt-12">
        <div className="container mx-auto px-6">
        <div className="grid grid-cols-1n lg:grid-cols-12 gap-4">
            <div className="w-full lg:col-span-7">
                <h1 className="text-white text-3xl lg:text-6xl font-semibold">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-8 py-4">
                    <div className="flex items-center gap-3">
                        <Image src={"/Vacancies/bag.png"} width={24} height={24} alt="" />
                        <span className="text-20 text-white">{job.jobtype}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src={"/Vacancies/calander.png"} width={24} height={24} alt="" />
                        <span className="text-20 text-white">{job.posted}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src={"/Vacancies/location.png"} width={24} height={24} alt="" />
                        <span className="text-20 text-white">{job.location}</span>
                    </div>
                </div>

                <p className="text-white subtitle">{job.description}</p>

                <h1 className="text-white text-4xl font-semibold py-5">Job Responsibilities</h1>
                <ol className="text-white list-inside list-disc px-2">
                    {job.responsibilties.map((responsibility, index) => (
                        <li key={index} className="mb-2 subtitle">
                            <strong className="">{responsibility.title}:</strong> {responsibility.description}
                        </li>
                    ))}
                </ol>

                <h1  className="text-white text-4xl font-semibold py-5">Qualifications & Skills</h1>
                <ol className="text-white list-inside list-disc px-2">
                    {job.qualification.map((responsibility, index) => (
                        <li key={index} className="mb-2 subtitle">{responsibility}</li>
                    ))}
                </ol>
                <h1  className="text-white text-4xl font-semibold py-5 ">Why Join Us?</h1>
                <ol className="text-white list-inside list-disc px-2">
                    {benifits.map((responsibility, index) => (
                        <li key={index} className="mb-2 subtitle">{responsibility}</li>
                    ))}
                </ol>
                <div className="px-3 py-6">
                 <Link href={`/open-vacancies/${id}/application-form`} className="text-white flex justify-center items-center bg-[#951B46] w-241 h-63 rounded-lg">Apply Now</Link>
                </div>
            </div>
            <div className="w-full lg:col-span-5">
                <div className="cards roundedCust p-8 h-500 flex flex-col justify-center">
                    <h2 className="text-center border-b-2 border-white pb-3 text-white text-3xl">Job Details</h2>
                    <div className="md:px-12 space-y-4 pt-4">
                        <div className="flex text-white justify-between items-center">
                            <span>job Category:</span>
                            <span>{job.category}</span>
                        </div>
                        <div className="flex text-white justify-between items-center">
                            <span>job Job Type:</span>
                            <span>{job.jobtype}</span>
                        </div>
                        <div className="flex text-white justify-between items-center">
                            <span>Total Positions:</span>
                            <span>{job.totalPositions}</span>
                        </div>
                        <div className="flex text-white justify-between items-center">
                            <span>Experience:</span>
                            <span>{job.experience}</span>
                        </div>
                        <div className="flex text-white justify-between items-center">
                            <span>Posting Date:</span>
                            <span>{job.postedDate}</span>
                        </div>
                        <div className="flex text-white justify-between items-center">
                            <span>Apply Before:</span>
                            <span>{job.lastDate}</span>
                        </div>
                    </div>
                </div>


                <div className=" py-12 px-2 space-y-4">
                    <h1 className="text-white text-3xl font-semibold">Share this Job</h1>
                    <div className="relative">
                        <input type="text" className="w-full py-2 px-4 bg-transparent border rounded-lg text-white" readOnly value={inputValue} />
                        <button className="" onClick={copyToClipboard}>
                            {copied ? 
                            <span className="absolute top-2 right-3 text-green-600 font-bold">Copied</span> :
                            <Image src={"/Vacancies/copy.png"} width={32} height={32} alt='' className="absolute top-1 right-3" />
                            }
                        </button>
                    </div>

                    <div className="flex items-center text-white gap-6">
                        <Link href={""} className="flex w-8 h-8 justify-center items-center"><SiLinkedin className="w-full h-full" /></Link>
                        <Link href={""} className="flex w-10 h-10 justify-center items-center"><FaFacebook className="w-full h-full" /></Link>
                        <Link href={""} className="flex w-10 h-10 justify-center items-center"><IoMdMail className="w-full h-full" /></Link>
                        <Link href={""} className="flex w-11 h-11 justify-center items-center"><RiWhatsappFill className="w-full h-full" /></Link>
                    </div>

                </div>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default JobDetailsPage
