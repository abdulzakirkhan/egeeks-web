"use client";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop company dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCompanyOpen(false);
      }
      // Mobile menu
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header ref={headerRef} className="absolute top-0 left-0 w-full z-50">
      <nav className="bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Home/logo.png"
                width={192}
                height={64}
                alt="Bliss Travels"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-around w-full items-center gap-8">
              <div className="flex justify-center mx-auto items-center gap-6">
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "text-[#951B46] border-b-2 border-b-[#951B46]"
                      : "text-white"
                  } text-base hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]`}
                >
                  Home
                </Link>
                <Link
                  href="/our-services"
                  className={`${
                    pathname === "/our-services"
                      ? "text-[#951B46] border-b-2 border-b-[#951B46]"
                      : "text-white"
                  } text-base hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]`}
                >
                  Our Services
                </Link>
                <Link
                  href="/careers"
                  className={`${
                    pathname === "/careers" ? "text-[#951B46]" : "text-white"
                  } text-base hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]`}
                >
                  Careers
                </Link>
                
                {/* Company Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                    className="flex items-center text-white hover:text-[#951B46]"
                  >
                    Company
                    <FaChevronDown
                      className={`ml-2 transition-transform ${
                        isCompanyOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isCompanyOpen && (
                    <div className="absolute top-8 right-0 bg-white shadow-lg rounded-lg min-w-[200px]">
                      <div className="flex flex-col py-2">
                        <Link
                          href="/about-us"
                          className={`${
                            pathname === "/about-us" ? "text-[#951B46] border-b-2 border-b-[#951B46]" : "text-black"
                          } text-base px-4 py-2 hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]`}
                        >
                          About Us
                        </Link>
                        <Link
                          href="/life-at-egeeks"
                          className={`${
                            pathname === "/life-at-egeeks" ? "text-[#951B46] border-b-2 border-b-[#951B46]" : "text-black"
                          } text-base px-4 py-2 hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]`}
                        >
                          Life at eGeeks
                        </Link>
                        <Link
                          href="/events"
                          className={`${
                            pathname === "/events" ? "text-[#951B46] border-b-2 border-b-[#951B46]" : "text-black"
                          } text-base px-4 py-2 hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]`}
                        >
                          Events
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/blogs"
                  className={`${
                    pathname === "/blogs" ? "text-[#951B46]" : "text-white"
                  } text-base hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]`}
                >
                  Blogs
                </Link>
              </div>

              <Link href={"/contact-us"} className="bg-[#951B46] px-6 py-2 text-white rounded-md font-bold hover:bg-[#7a1538] transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#951B46]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-white hover:text-[#951B46]">
                Home
              </Link>
              <Link
                href="/our-services"
                className="block text-white hover:text-[#951B46]"
              >
                Our Services
              </Link>
              <Link
                href="/careers"
                className="block text-white hover:text-[#951B46]"
              >
                Careers
              </Link>

              {/* Mobile Company Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                  className="flex items-center w-full text-white hover:text-[#951B46]"
                >
                  Company
                  <FaChevronDown
                    className={`ml-2 transition-transform ${
                      isMobileCompanyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileCompanyOpen && (
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/about-us"
                      className="block text-gray-300 hover:text-white"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/life-at-egeeks"
                      className="block text-gray-300 hover:text-white"
                    >
                      Life at eGeeks
                    </Link>
                    <Link
                      href="/events"
                      className="block text-gray-300 hover:text-white"
                    >
                      Events
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blogs"
                className="block text-white hover:text-[#951B46]"
              >
                Blogs
              </Link>
              <Link href={"/contact-us"} className="w-full bg-[#951B46] px-6 py-2 text-white rounded-md font-bold hover:bg-[#7a1538]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;