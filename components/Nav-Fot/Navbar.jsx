"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { assets } from "../../assets/assets.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleServices = () => setServicesOpen((prev) => !prev);

  // Close services dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  return (
    <nav className="bg-[#3B0A4F]/80 backdrop-blur-md shadow-md sticky top-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-50">
              <Image
                src={assets.LogoPc}
                alt="Solar Space"
                fill
                priority
                sizes="(max-width: 768px) 120px, 160px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink href="/" pathname={pathname}>HOME</NavLink>
            <NavLink href="/about" pathname={pathname}>ABOUT US</NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={toggleServices}
                className="flex items-center text-white font-semibold hover:text-[#E5C97B] transition duration-300"
              >
                SERVICES <FaChevronDown className="ml-1" />
              </button>

              <div
                className={`absolute left-0 mt-2 w-64 bg-[#4E1A64]/80 backdrop-blur-lg shadow-lg rounded-md z-10 transition-all transform origin-top ${servicesOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                  }`}
              >
                <DropdownLink href="/services/solar" onClick={() => setServicesOpen(false)}>SOLAR SERVICES</DropdownLink>
                <DropdownLink href="/services/surveying" onClick={() => setServicesOpen(false)}>SITE SURVEYING</DropdownLink>
                <DropdownLink href="/services/designing" onClick={() => setServicesOpen(false)}>SYSTEM DESIGNING</DropdownLink>
                <DropdownLink href="/services/installation" onClick={() => setServicesOpen(false)}>INSTALLATION</DropdownLink>
                <DropdownLink href="/services/liaisoning" onClick={() => setServicesOpen(false)}>LIAISONING</DropdownLink>
                <DropdownLink href="/services/trading" onClick={() => setServicesOpen(false)}>SOLAR / ELECTRICAL TRADING</DropdownLink>
              </div>
            </div>

            <NavLink href="/projects" pathname={pathname}>OUR PROJECTS</NavLink>
            <NavLink href="/contact" pathname={pathname}>CONTACT US</NavLink>

            <Link
              href="/contact"
              className="block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] text-center px-5 py-2.5 rounded-md font-semibold shadow-md hover:from-[#D4AF37] hover:to-[#F1D97A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Quote!
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white" aria-label="Toggle menu">
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden backdrop-blur-lg bg-[#3B0A4F]/80 transition-all duration-300 px-6 pb-6 pt-2 space-y-3 shadow-2xl`}
        >
          <MobileLink href="/" onClick={() => setMenuOpen(false)}>HOME</MobileLink>
          <MobileLink href="/about" onClick={() => setMenuOpen(false)}>ABOUT US</MobileLink>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center w-full text-white font-semibold"
            >
              SERVICES <FaChevronDown className="ml-1" />
            </button>

            <div
              className={`transition-all origin-top duration-300 transform ${servicesOpen ? "opacity-100 scale-100 max-h-[500px]" : "opacity-0 scale-95 max-h-0 overflow-hidden"
                } pl-4 pt-2 space-y-2`}
            >
              <MobileLink href="/services/solar" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>SOLAR SERVICES</MobileLink>
              <MobileLink href="/services/surveying" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>SITE SURVEYING</MobileLink>
              <MobileLink href="/services/designing" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>SYSTEM DESIGNING</MobileLink>
              <MobileLink href="/services/installation" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>INSTALLATION</MobileLink>
              <MobileLink href="/services/liaisoning" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>LIAISONING</MobileLink>
              <MobileLink href="/services/trading" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>SOLAR / ELECTRICAL TRADING</MobileLink>
            </div>
          </div>

          <MobileLink href="/projects" onClick={() => setMenuOpen(false)}>OUR PROJECTS</MobileLink>
          <MobileLink href="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</MobileLink>

          <Link
            href="/contact"
            className="block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] text-center px-5 py-2.5 rounded-md font-semibold shadow-md hover:from-[#D4AF37] hover:to-[#F1D97A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Quote!
          </Link>
        </div>
      )}

    </nav>
  );
}

// -----------------------------
// ✅ Reusable Components
// -----------------------------

const NavLink = ({ href, children, pathname }) => {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-white font-semibold relative group transition-all duration-300 ${isActive ? "text-[#E5C97B]" : ""}`}
    >
      {children}
      <span className="block h-0.5 w-0 group-hover:w-full bg-[#E5C97B] transition-all duration-300"></span>
    </Link>
  );
};

const MobileLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-white font-medium hover:text-[#E5C97B] transition-colors duration-200"
  >
    {children}
  </Link>
);

const DropdownLink = ({ href, onClick, children }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-2 text-white hover:bg-[#5A2272] hover:text-[#E5C97B] font-medium transition-all duration-200"
  >
    {children}
  </Link>
);
