"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assets.Hero}
          alt="Solar Panels - Clean Energy"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay with stronger contrast */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />
      </div>

      {/* Hero Content */}
      <div className="relative  z-10 px-4 sm:px-8 text-center text-white animate-fadeIn flex flex-col items-center">
        <h1 className="text-5xl uppercase  sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-xl">
          Green Energy Evolution
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-gray-200 drop-shadow">
          Save your electricity bill upto <span className="text-[#E5C97B] font-bold">90%</span>. <br className="hidden sm:block" />
          Let <span className="text-[#E5C97B] font-semibold">Solar Space</span> light up your home efficiently.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg hover:from-[#D4AF37] hover:to-[#F1D97A] transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}
