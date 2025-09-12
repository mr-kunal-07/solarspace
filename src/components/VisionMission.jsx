import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

export default function VisionMission() {
    return (
        <section className="w-full bg-gradient-to-b from-[#3B0A4F] to-white py-12 px-4">
            {/* Vision Section */}
            <div className="flex flex-col md:flex-row items-stretch overflow-hidden gap-6">
                <div
                    className="bg-[#C5A352] text-white md:w-1/2 flex items-center justify-center p-6 rounded-tr-3xl rounded-bl-3xl transition-all duration-300 shadow-md"
                    data-aos="fade-right"
                >
                    <div className="max-w-lg text-center md:text-left space-y-3">
                        <h2 className="text-4xl font-bold uppercase">Vision</h2>
                        <p className="text-xl leading-relaxed">
                            To lead the transition towards a greener future by delivering
                            innovative, cost-effective, and high-quality sustainable energy
                            solutions. We aim to empower communities and businesses with clean
                            energy alternatives that not only reduce carbon footprints but
                            also enhance everyday living—building a world where sustainability
                            and progress go hand in hand.
                        </p>
                    </div>
                </div>
                <div
                    className="md:w-1/2"
                    data-aos="fade-left"
                >
                    <Image
                        src={assets.VisionImage}
                        alt="Our Vision for a Greener Future"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 shadow-md rounded-tl-3xl"
                    />
                </div>
            </div>

            {/* Decorative Divider */}
            <div className="w-full my-10 flex justify-center">
                <svg width="60" height="6" viewBox="0 0 60 6" fill="none">
                    <rect width="60" height="6" rx="3" fill="#C5A352" />
                </svg>
            </div>

            {/* Mission Section */}
            <div className="flex flex-col md:flex-row-reverse items-stretch overflow-hidden gap-6">
                <div
                    className="bg-[#F3F1EB] text-[#3B0A4F] md:w-1/2 flex items-center justify-center p-6 rounded-tl-3xl rounded-br-3xl transition-all duration-300 shadow-md"
                    data-aos="fade-left"
                >
                    <div className="max-w-lg text-center md:text-left space-y-3">
                        <h2 className="text-4xl font-bold uppercase">Mission</h2>
                        <p className="text-xl leading-relaxed">
                            Our mission is to deliver reliable, future-ready energy solutions
                            that exceed expectations in quality, performance, and
                            sustainability—empowering a cleaner tomorrow while creating
                            enduring value for all we serve.
                        </p>
                    </div>
                </div>
                <div
                    className="md:w-1/2"
                    data-aos="fade-right"
                >
                    <Image
                        src={assets.MissionImage}
                        alt="Mission Driven Purpose"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 shadow-md rounded-tr-3xl"
                    />
                </div>
            </div>
        </section>
    );
}
