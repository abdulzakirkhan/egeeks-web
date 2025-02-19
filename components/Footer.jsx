"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall, IoLocationSharp, IoMailSharp } from "react-icons/io5";
// import { IoCall } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-12 px-5">
        <div className="container mx-auto px-6 border-t border-gray-600 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-8">
                {/* Column 1: Logo & Contact Info */}
                <div className="w-full space-y-3 lg:col-span-4">
                    <img src="/Home/logo.png" alt="Logo" className="w-32 mb-3" />
                    <div className="flex gap-2">
                    <IoLocationSharp size={70} className="-mt-6" /> 
                    <p className="text-sm">eGeeks Global, Office LGF-3 , LG Floor level Merdian Software Technology Park Nadra Building Rehmanabad Rawalpindi, Pakistan.</p>
                    </div>
                    <p className="text-sm flex items-center gap-2"> <span><IoCall size={20} /></span> +92 51 2716350</p>
                    <p className="text-sm flex items-center gap-2"> <span><IoMailSharp size={20} /></span> hr@egeeksglobal.com</p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="w-full lg:col-span-2">
                    <h2 className="text-lg mb-3 text-red border-b-2 border-red" style={{width:"60%"}}>Quick Links</h2>
                    <div className="space-y-2 flex flex-col">
                        <Link href={""} className="subtitle w-1/2 hover:text-red hover:border-b-2 hover:border-red">Careers</Link>
                        <Link  href={""} className="subtitle w-1/2 hover:text-red hover:border-b-2 hover:border-red">About us</Link>
                        <Link  href={""} className="subtitle hover:text-red hover:border-b-2 hover:border-red">Life at eGeeksGlobal</Link>
                        <Link  href={""} className="subtitle w-1/2 hover:text-red hover:border-b-2 hover:border-red">Events</Link>
                    </div>
                </div>

                {/* Column 3: Services */}
                <div className="w-full lg:col-span-3">
                    <h2 className="text-lg mb-3 text-red border-b-2 border-red" style={{width:"60%"}}>Services we Offer</h2>
                    <div className="space-y-2 flex flex-col">
                        <Link href={""} className="subtitle hover:text-red">Artificial Intelligence</Link>
                        <Link href={""} className="subtitle hover:text-red">Software Development</Link>
                        <Link href={""} className="subtitle w-1/2 hover:text-red">SEO</Link>
                        <Link href={""} className="subtitle w-1/2 hover:text-red">Research</Link>
                        <Link href={""} className="subtitle w-1/2 hover:text-red">Designing</Link>
                    </div>
                </div>

                {/* Column 4: Resources */}
                <div className="w-full lg:col-span-3">
                    <h2 className="text-lg mb-3 text-red border-b-2 border-red" style={{width:"60%"}}>Privacy Policy</h2>
                    <ul className="space-y-2 flex flex-col">
                        <Link href={""} className="subtitle hover:text-red">Privacy Policy</Link>
                        <Link href={""} className="subtitle hover:text-red">Terms & Conditions</Link>
                        <Link href={""} className="subtitle hover:text-red">Disclaimer</Link>
                    </ul>


                    <div className="mt-16">
                        <h2 className="text-lg mb-3 text-red border-b-2 border-red" style={{width:"60%"}}>Find us at</h2>
                        <div className="flex gap-8 pt-12">
                            <Link href={""}> <Image src={"/footer/facebook.png"} width={60} height={50} alt="follow us on facebook" /> </Link>
                            <Link href={""}> <Image src={"/footer/insta.png"} width={60} height={50} alt="follow us on facebook" /> </Link>
                            <Link href={""}> <Image src={"/footer/in.png"} width={60} height={50} alt="follow us on facebook" /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Footer Bottom */}
      <div className="container mx-auto">
        <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
            © {new Date().getFullYear()}eGeeksGlobal. ALL Rights Reserved. Privacy Policy | Terms of Service
        </div>
      </div>
    </footer>
  );
};

export default Footer;
