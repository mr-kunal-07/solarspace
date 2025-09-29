import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

export default function VisionMission() {
    return (
        <section className="w-full bg-gradient-to-b from-[#3B0A4F] via-[#4A1560] to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-20" data-aos="fade-down">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
                        Our Purpose
                    </h1>
                    <div className="w-24 h-1 bg-[#C5A352] mx-auto rounded-full"></div>
                </div>

                {/* Vision Section */}
                <div className="mb-16 md:mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">
                        {/* Vision Content */}
                        <div
                            className="order-2 lg:order-1 bg-gradient-to-br from-[#C5A352] to-[#B89440] text-white p-8 sm:p-10 lg:p-12 rounded-3xl lg:rounded-tr-[4rem] lg:rounded-bl-[4rem] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex items-center"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <div className="space-y-5 lg:space-y-6">
                                <div className="inline-block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
                                            Vision
                                        </h2>
                                    </div>
                                    <div className="h-1 w-20 bg-white/40 rounded-full"></div>
                                </div>
                                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/95 font-light">
                                    To lead the transition towards a greener future by delivering
                                    innovative, cost-effective, and high-quality sustainable energy
                                    solutions. We aim to empower communities and businesses with clean
                                    energy alternatives that not only reduce carbon footprints but
                                    also enhance everyday living—building a world where sustainability
                                    and progress go hand in hand.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-2">
                                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                                        Innovation
                                    </span>
                                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                                        Sustainability
                                    </span>
                                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                                        Empowerment
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Vision Image */}
                        <div
                            className="order-1 lg:order-2 relative h-72 sm:h-96 lg:h-auto min-h-[400px] group"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C5A352]/20 to-transparent rounded-3xl lg:rounded-tl-[4rem] overflow-hidden">
                                <Image
                                    src={assets.VisionImage}
                                    alt="Our Vision for a Greener Future"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-3xl lg:rounded-tl-[4rem]"
                                />
                            </div>
                            {/* Floating accent */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C5A352] rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <div className="w-full my-12 md:my-16 flex justify-center" data-aos="zoom-in">
                    <div className="flex items-center gap-3">
                        <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#C5A352] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#C5A352] rounded-full animate-pulse"></div>
                        <div className="w-16 sm:w-24 h-1 bg-[#C5A352] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#C5A352] rounded-full animate-pulse"></div>
                        <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-[#C5A352] rounded-full"></div>
                    </div>
                </div>

                {/* Mission Section */}
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">
                        {/* Mission Image */}
                        <div
                            className="order-1 relative h-72 sm:h-96 lg:h-auto min-h-[400px] group"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            <div className="absolute inset-0 bg-gradient-to-bl from-[#3B0A4F]/20 to-transparent rounded-3xl lg:rounded-tr-[4rem] overflow-hidden">
                                <Image
                                    src={assets.MissionImage}
                                    alt="Mission Driven Purpose"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-3xl lg:rounded-tr-[4rem]"
                                />
                            </div>
                            {/* Floating accent */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#3B0A4F] rounded-full opacity-20 blur-2xl"></div>
                        </div>

                        {/* Mission Content */}
                        <div
                            className="order-2 bg-gradient-to-br from-[#F3F1EB] to-[#E8E4D8] text-[#3B0A4F] p-8 sm:p-10 lg:p-12 rounded-3xl lg:rounded-tl-[4rem] lg:rounded-br-[4rem] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex items-center"
                            data-aos="fade-left"
                            data-aos-delay="100"
                        >
                            <div className="space-y-5 lg:space-y-6">
                                <div className="inline-block">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 bg-[#3B0A4F]/10 rounded-lg flex items-center justify-center">
                                            <svg className="w-7 h-7 text-[#3B0A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
                                            Mission
                                        </h2>
                                    </div>
                                    <div className="h-1 w-20 bg-[#C5A352] rounded-full"></div>
                                </div>
                                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#3B0A4F]/90 font-light">
                                    Our mission is to deliver reliable, future-ready energy solutions
                                    that exceed expectations in quality, performance, and
                                    sustainability—empowering a cleaner tomorrow while creating
                                    enduring value for all we serve.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-2">
                                    <span className="px-4 py-2 bg-[#3B0A4F]/10 rounded-full text-sm font-medium text-[#3B0A4F]">
                                        Reliability
                                    </span>
                                    <span className="px-4 py-2 bg-[#3B0A4F]/10 rounded-full text-sm font-medium text-[#3B0A4F]">
                                        Excellence
                                    </span>
                                    <span className="px-4 py-2 bg-[#3B0A4F]/10 rounded-full text-sm font-medium text-[#3B0A4F]">
                                        Value
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}