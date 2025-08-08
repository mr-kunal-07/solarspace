"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoreValues from "../../../components/CoreValues";
import WhyChooseUs from "../../../components/WhyChooseUs";
import VisionMission from "../../../components/VisionMission";
import AboutWebsiteStats from "../../../components/AboutWebsiteStats";
import Partners from "../../../components/Patners/Partners";
import { assets } from "../../../assets/assets";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const page = () => {
  return (
    <motion.div
      className="bg-white w-full min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.section
        className="bg-white py-20 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B0A4F] leading-snug">
              Powering India’s{" "}
              <span className="text-[#C5A352]">Green Energy</span> Future
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
              Since 2017, <strong>Solar Space</strong> has been a trusted solar
              solutions provider based in Mumbai. A proud sister company of{" "}
              <strong>Shree Varathi Traders</strong>, we specialize in clean and
              sustainable energy systems that empower homes and businesses
              across India.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] font-semibold text-base px-6 py-3 rounded-full shadow-lg hover:from-[#D4AF37] hover:to-[#F1D97A] transition-all duration-300 hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={assets.About}
                alt="Solar Space Installation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Below sections get on-scroll reveal animations */}
      <CoreValues />
      <WhyChooseUs />
      <VisionMission />
      <AboutWebsiteStats />
      <Partners />
    </motion.div>
  );
};

export default page;
