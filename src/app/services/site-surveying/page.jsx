"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, Zap, Ruler, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteSurveying() {
    const reduceMotion = useReducedMotion();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    // Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const motionProps = (variant, opts = {}) => ({
        variants: variant,
        initial: typeof window === "undefined" ? "visible" : reduceMotion || !isClient ? "visible" : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut", ...opts },
    });

    const steps = [
        {
            icon: <ClipboardCheck className="w-7 h-7 text-[#C5A352]" />,
            title: "Property Assessment",
            desc: "Evaluating layout, roof type, condition, orientation, pitch, and shading to determine best solar placement.",
        },
        {
            icon: <Zap className="w-7 h-7 text-[#2E9A4C]" />,
            title: "Electrical System Check",
            desc: "Inspecting main electrical panel, meter, and wiring to ensure compatibility and safe connection points.",
        },
        {
            icon: <Ruler className="w-7 h-7 text-[#3B0A4F]" />,
            title: "Measurements & Data Collection",
            desc: "Taking precise roof measurements, sun exposure readings, and noting potential obstructions.",
        },
        {
            icon: <FileText className="w-7 h-7 text-[#6B4F8A]" />,
            title: "Analysis & Reporting",
            desc: "Compiling collected data into a detailed report for accurate system design and installation planning.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC] py-14 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
                {/* HERO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <motion.div {...motionProps(fadeUp)}>
                        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[#EDE7FF] text-[#4A0C6A] mb-4">
                            Site Surveying
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B0A4F] leading-tight mb-6">
                            Expert Site Survey for Solar Solutions
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg max-w-xl leading-relaxed">
                            Our expert site survey is the first step toward your solar
                            solution. We assess your property’s roof, sun exposure, shading,
                            and electrical setup to design a high-efficiency, customized solar
                            system tailored to your needs.
                        </p>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div {...motionProps(fadeUp)}>
                        <div className="mx-auto w-full max-w-lg rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                                <Image
                                    src="/Projects/5.jpg" // replace with your image
                                    alt="Site surveying process"
                                    fill
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* STEPS */}
                <motion.section
                    {...motionProps(fadeUp)}
                    className="mt-16"
                    aria-labelledby="steps-heading"
                >
                    <h2
                        id="steps-heading"
                        className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-10 text-center"
                    >
                        Steps for Site Survey
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((s, idx) => (
                            <article
                                key={idx}
                                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex-none rounded-lg bg-[#F8F6F0] p-4 mb-4">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#3B0A4F] mb-2">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{s.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
