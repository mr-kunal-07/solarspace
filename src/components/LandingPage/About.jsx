"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "../../assets/assets";

export default function About() {
    return (
        <section className="bg-white max-w-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B0A4F] leading-snug">
                        Powering India’s <span className="text-[#C5A352]">Green Energy</span> Future
                    </h2>

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
                        Since 2017, <strong>Solar Space</strong> has been a trusted solar solutions provider based in Mumbai.
                        A proud sister company of <strong>Shree Varathi Traders</strong>, we specialize in clean and sustainable energy systems that empower homes and businesses across India.
                    </p>

                    <Link
                        href="/about"
                        className="inline-block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] font-semibold text-base px-6 py-3 rounded-full shadow-lg hover:from-[#D4AF37] hover:to-[#F1D97A] transition-all duration-300 hover:scale-105"
                    >
                        Get More Details
                    </Link>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={assets.About}
                            alt="Solar Space Installation"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
