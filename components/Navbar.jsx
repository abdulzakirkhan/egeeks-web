"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation"; 
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Main Navbar */}
      <nav className="bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image src="/Home/logo.png" width={192}  height={12} alt="Bliss Travels" className="h-16" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-3">
              <Link href="/" className={`${pathname === "/" ? "text-[#951B46] border-b-2 border-b-[#951B46]":"text-white"} hover:text-red-600`}>
              Home
              </Link>

              

              <Link href="/international-tour-packages" className={`${pathname === "/international-tour-packages" ?  "text-[#951B46]":"text-white"} text-base hover:text-red-600`}>
                 Our services
              </Link>
              <Link href="/honeymoon-packages-from-pakistan" className={`${pathname === "/honeymoon-packages-from-pakistan" ? "text-[#951B46]":"text-white"}  text-base hover:text-red-600`}>
                Careers
              </Link>
              {/* Visa Dropdown - Open on Hover */}
              <div className="relative group">
                <button className="text-white hover:text-red-600 focus:outline-none">
                Company
                </button>
              </div>
              <Link href="/hajj" className={`${pathname === "/hajj" ? "text-[#951B46]":"text-white"}  text-base hover:text-red-600`}>
                Blogs
              </Link>
            </div>

            <div className="">
            <button className="bg-red px-4 py-2 text-white rounded-md h-btn w-161 text-btnText font-bold font-orbitron">Contact Us</button>
          </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden py-2 rounded-md text-white hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? "" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <Link href="/" className={` ${pathname === "/" ? "text-[#951B46] border-b-2 border-b-[#951B46]":"text-white"} hover:text-red-600`}>
              <span className="block">Home</span>
            </Link>

              {/* Visa Dropdown - Open on Hover */}
              <div className="relative group">
                <button className="text-white hover:text-red-600 focus:outline-none">
                  Visa
                </button>
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/visa-filling" className=" px-4 py-2 text-white hover:bg-gray-100">
                    <span className="block">VISAFILLING</span>
                  </Link>
                  <Link href="/visa-consultancy" className=" px-4 py-2 text-white hover:bg-gray-100">
                  <span className="block">VISA CONSULTANCY</span>
                  </Link>
                </div>
              </div>

              <Link href="/international-tour-packages" className={` ${pathname === "/international-tour-packages" ?  "text-[#951B46]":"text-white"} text-base hover:text-red-600`}>
                <span className="block">TOUR PACKAGES</span>
              </Link>
              <Link href="/honeymoon-packages-from-pakistan" className={` ${pathname === "/honeymoon-packages-from-pakistan" ? "text-[#951B46]":"text-white"}  text-base hover:text-red-600`}>
                <span className="block">HONEYMOONERS</span>
              </Link>
              <Link href="/new-year-packages"  className={`${pathname === "/new-year-packages" ? "text-[#951B46]":"text-white"}  text-base hover:text-red-600`}>
                <span className="block"> NEW YEAR PACKAGES</span>
              </Link>
              <Link href="/hajj" className={` ${pathname === "/hajj" ? "text-[#951B46]":"text-white"}  text-base hover:text-red-600`}>
                <span className="block"> HAJJ</span>
              </Link>
              <Link href="/umrah" className={` ${pathname === "/umrah" ? "text-[#951B46]":"text-white"}  text-base hover:text-red-600`}>
                <span className="block"> UMRAH</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
