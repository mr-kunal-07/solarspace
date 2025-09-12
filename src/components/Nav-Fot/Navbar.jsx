"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaHome,
  FaInfoCircle,
  FaSolarPanel,
  FaProjectDiagram,
  FaPhone,
} from "react-icons/fa";
import { assets } from "../../assets/assets.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const router = useRouter();
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuOpen) return;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (e.key === "Tab" && menuEl) {
        const focusable = menuEl.querySelectorAll(
          'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const MobileLink = ({ href, children, index }) => {
    const handleClick = async () => {
      setMenuOpen(false);
      router.push(href);
    };

    const ref = index === 0 ? firstLinkRef : null;

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className="w-full text-left block text-white font-medium hover:text-[#E5C97B] transition-colors duration-200 py-2"
      >
        {children}
      </button>
    );
  };

  return (
    <>
      <nav
        className="bg-[#3B0A4F]/80 supports-[backdrop-filter]:backdrop-blur-md shadow-md sticky top-0 z-50 w-full transition-all duration-300"
        role="navigation"
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px]">
            <Link href="/" aria-label="Home" className="flex items-center">
              <div className="relative h-16 sm:h-20 w-40 sm:w-48">
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

            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <NavLink href="/" pathname={pathname}>HOME</NavLink>
              <NavLink href="/about" pathname={pathname}>ABOUT US</NavLink>
              <NavLink href="/services" pathname={pathname}>OUR SERVICES</NavLink>
              <NavLink href="/projects" pathname={pathname}>OUR PROJECTS</NavLink>
              <NavLink href="/contact" pathname={pathname}>CONTACT US</NavLink>

              <Link
                href="/contact"
                aria-label="Get a quote"
                className="block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] text-center px-5 py-2.5 rounded-md font-semibold shadow-md hover:from-[#D4AF37] hover:to-[#F1D97A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get a Quote!
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 w-full bg-gradient-to-r from-[#3B0A4F] via-[#4C1360] to-[#3B0A4F] backdrop-blur-lg shadow-2xl flex justify-around items-center h-16 z-50 rounded-t-2xl border-t border-[#E5C97B]/30">
        <BottomLink href="/" pathname={pathname} icon={<FaHome />} label="Home" />
        <BottomLink href="/about" pathname={pathname} icon={<FaInfoCircle />} label="About" />
        <BottomLink href="/services" pathname={pathname} icon={<FaSolarPanel />} label="Services" />
        <BottomLink href="/projects" pathname={pathname} icon={<FaProjectDiagram />} label="Projects" />
        <BottomLink href="/contact" pathname={pathname} icon={<FaPhone />} label="Contact" />
      </div>


    </>
  );
}

const NavLink = ({ href, children, pathname }) => {
  const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`text-white font-semibold relative group transition-all duration-300 ${active ? "text-[#E5C97B]" : ""}`}
    >
      {children}
      <span className={`block h-0.5 ${active ? "w-full" : "w-0 group-hover:w-full"} bg-[#E5C97B] transition-all duration-300`}></span>
    </Link>
  );
};

const BottomLink = ({ href, pathname, icon, label }) => {
  const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex flex-col items-center text-xs font-medium transition-all duration-300 ${isActive ? "text-[#E5C97B] scale-110" : "text-white hover:text-[#E5C97B]/80"}`}
    >
      <div className={`text-lg mb-0.5 ${isActive ? "drop-shadow-[0_0_8px_#E5C97B]" : ""}`} aria-hidden>
        {icon}
      </div>
      <span>{label}</span>
    </Link>
  );
};
