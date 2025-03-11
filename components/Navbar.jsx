"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Close dropdowns when clicking outside
  // const handleClickOutside = useCallback((event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsCompanyOpen(false);
  //   }
  //   if (headerRef.current && !headerRef.current.contains(event.target)) {
  //     setIsMobileMenuOpen(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [handleClickOutside]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const linkClass = (path) =>
    `text-base ${pathname === path ? "text-[#951B46] border-b-2 border-b-[#951B46]" : "text-white hover:text-[#951B46] hover:border-b-2 hover:border-b-[#951B46]"}`;

  return (
    <header ref={headerRef} className="absolute top-0 left-0 w-full z-50">
      <nav className="bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <Image src="/Home/logo.png" width={192} height={64} alt="Bliss Travels" className="h-16 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-around w-full items-center gap-8">
              <div className="flex justify-center mx-auto items-center gap-6">
                <Link href="/" className={linkClass("/")}>Home</Link>
                <Link href="/our-services" className={linkClass("/our-services")}>Our Services</Link>
                <Link href="/careers" className={linkClass("/careers")}>Careers</Link>
                
                {/* Company Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                    className="flex items-center text-white hover:text-[#951B46]"
                    aria-expanded={isCompanyOpen}
                  >
                    Company
                    <FaChevronDown className={`ml-2 transition-transform ${isCompanyOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isCompanyOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-8 right-0 bg-white shadow-lg rounded-lg min-w-[200px]"
                      >
                        <div className="flex flex-col py-2">
                          <Link href="/about-us" className={linkClass("/about-us")}>About Us</Link>
                          <Link href="/life-at-egeeks" className={linkClass("/life-at-egeeks")}>Life at eGeeks</Link>
                          <Link href="/events" className={linkClass("/events")}>Events</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/blogs" className={linkClass("/blogs")}>Blogs</Link>
              </div>

              <Link href="/contact-us" className="bg-[#951B46] px-6 py-2 text-white rounded-md font-bold hover:bg-[#7a1538] transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#951B46]"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
