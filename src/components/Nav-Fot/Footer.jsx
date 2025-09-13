"use client";

import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCheckCircle,
  FaArrowUp,
} from "react-icons/fa";

// Data
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const WHY_US = [
  "Customized Solar Solutions",
  "End-to-End Project Support",
  "Government Subsidy Guidance",
  "Free Site Survey & Load Approval",
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080708] text-white pt-12 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-[#E5C97B] tracking-wider">SOLAR SPACE</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Sustainable solar & electrical services — affordable, reliable and designed for your home or business.
            Save up to <strong className="text-[#E5C97B]">90%</strong> on power bills while cutting carbon footprint.
          </p>

          <div className="mt-3 flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transform transition"
              aria-label="Get a quote"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-2 p-2 rounded-full bg-white/5 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/40"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links" className="sm:pl-4">
          <h3 className="text-xl font-semibold text-[#E5C97B] mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block hover:text-[#E5C97B] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/30 rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Why Choose Us */}
        <div className="sm:pl-4">
          <h3 className="text-xl font-semibold text-[#E5C97B] mb-4">Why Choose Us</h3>
          <ul className="grid gap-2 text-sm text-gray-300">
            {WHY_US.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-[#C5A352]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
        {/* Contact Info */}
        <address className="not-italic text-sm text-gray-300">
          <h3 className="text-xl font-semibold text-[#E5C97B] mb-4">Contact</h3>

          <div className="flex items-start gap-3 mb-4">
            <FaMapMarkerAlt className="text-[#E5C97B] mt-1" aria-hidden />
            <div className="text-gray-300">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ground+Floor+Shop+15+Shree+Shankar+Nivas+Mulund+Check+Naka+LBS+Road+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E5C97B] transition-colors"
              >
                Ground Floor, Shop No. 15, Shree Shankar Nivas,
                <br />
                Mulund Check Naka, LBS Road, Mumbai 400080
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-[#E5C97B]" aria-hidden />
            <div className="flex gap-2 flex-wrap">
              <a className="hover:text-[#E5C97B]" href="tel:+919372392879">
                9372392879 /
              </a>
              <a className="hover:text-[#E5C97B]" href="tel:+919082534578">
                9082534578 /
              </a>
              <a className="hover:text-[#E5C97B]" href="tel:+917021019540">
                7021019540
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-[#E5C97B]" aria-hidden />
            <a className="hover:text-[#E5C97B]" href="mailto:solarspace2025@gmail.com">
              solarspace2025@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="text-[#E5C97B] mt-1" aria-hidden />
            <div className="text-gray-300 leading-relaxed">
              <div>Mon - Sat: 10:00 AM - 7:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </address>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Solar Space. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {/* Social icons - circular with hover */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#E5C97B] hover:bg-[#E5C97B] hover:text-[#3B0A4F] transition transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/30"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* small policy links */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-[#E5C97B]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#E5C97B]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
