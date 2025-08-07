"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active link (optional)
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { assets } from "../../assets/assets.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const pathname = usePathname(); // Optional for active route

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleServices = () => setServicesOpen((prev) => !prev);

  // Close services dropdown when clicking outside
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
    <nav className="bg-[#3B0A4F] shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-40">
              <Image
                src={assets.logo}
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
            <div className="relative group" ref={servicesRef}>
              <button
                onClick={toggleServices}
                className="flex items-center text-white font-semibold hover:text-[#E5C97B] transition duration-300"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                SERVICES <FaChevronDown className="ml-1" />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-[#4E1A64] shadow-lg rounded-md z-10 transition-all duration-200 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                  <DropdownLink href="/services/solar" onClick={() => setServicesOpen(false)}>
                    SOLAR SERVICES
                  </DropdownLink>
                  <DropdownLink href="/services/electrical" onClick={() => setServicesOpen(false)}>
                    ELECTRICAL SERVICES
                  </DropdownLink>
                </div>
              )}
            </div>

            <NavLink href="/projects" pathname={pathname}>OUR PROJECTS</NavLink>
            <NavLink href="/contact" pathname={pathname}>CONTACT US</NavLink>

            {/* CTA Button */}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] text-center px-5 py-2.5 rounded-md font-semibold shadow-md 
             hover:from-[#D4AF37] hover:to-[#F1D97A] 
             transition-all duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
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
        <div className="md:hidden bg-[#3B0A4F] shadow-lg px-6 pb-6 pt-2 space-y-3">
          <MobileLink href="/" onClick={() => setMenuOpen(false)}>HOME</MobileLink>
          <MobileLink href="/about" onClick={() => setMenuOpen(false)}>ABOUT US</MobileLink>

          {/* Services Dropdown (Mobile) */}
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center w-full text-white font-semibold"
            >
              SERVICES <FaChevronDown className="ml-1" />
            </button>

            {servicesOpen && (
              <div className="pl-4 pt-1 space-y-1">
                <MobileLink
                  href="/services/solar"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  SOLAR SERVICES
                </MobileLink>
                <MobileLink
                  href="/services/electrical"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  ELECTRICAL SERVICES
                </MobileLink>
              </div>
            )}
          </div>

          <MobileLink href="/projects" onClick={() => setMenuOpen(false)}>OUR PROJECTS</MobileLink>
          <MobileLink href="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</MobileLink>

          {/* CTA Button */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] text-center px-5 py-2.5 rounded-md font-semibold shadow-md 
             hover:from-[#D4AF37] hover:to-[#F1D97A] 
             transition-all duration-300 ease-in-out 
             transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
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
      className={`text-white font-semibold relative group transition-all duration-300 ${isActive ? "text-[#E5C97B]" : ""
        }`}
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
