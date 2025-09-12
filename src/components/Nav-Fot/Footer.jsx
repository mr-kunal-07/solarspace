"use client";

import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-[#0F0F0F] text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-[#E5C97B] mb-4">SOLAR SPACE</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Dedicated to a sustainable future, SOLAR SPACE offers affordable
            solar and electrical services. Save up to 90% on electricity bills
            while reducing your carbon footprint.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#E5C97B] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#E5C97B] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-xl font-semibold text-[#E5C97B] mb-4">Why Choose Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Customized Solar Solutions</li>
            <li>End-to-End Project Support</li>
            <li>Government Subsidy Guidance</li>
            <li>Free Site Survey & Load Approval</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#E5C97B] mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#E5C97B] mt-1" />
              <span>
                Ground Floor, Shop No. 15, Shree Shankar Nivas, Mulund Check
                Naka, LBS Road, Mumbai Suburban, Mumbai 400080
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#E5C97B]" />
              <span>9372392879 / 9082534578 / 7021019540</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#E5C97B]" />
              <span>solarspace2025@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="text-[#E5C97B] mt-1" />
              <span>
                <div>Mon - Sat: 10:00 AM - 7:00 PM</div>
                <div>Sunday: Closed</div>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Solar Space. All rights reserved.
        </p>
        <div className="flex items-center space-x-5">
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-[#E5C97B] hover:text-white text-lg transition-all duration-200"
  >
    {children}
  </a>
);
