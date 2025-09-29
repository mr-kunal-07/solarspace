"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LineChart, Box, FileCog, Target } from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SystemDesigning() {
    const reduceMotion = useReducedMotion();
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => setIsClient(true), []);

    // Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const motionProps = (variant, opts = {}) => ({
        variants: variant,
        initial:
            typeof window === "undefined" || reduceMotion || !isClient
                ? "visible"
                : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut", ...opts },
    });

    const steps = [
        {
            icon: <Target className="w-7 h-7 text-[#C5A352]" />,
            title: "Data Analysis & Goal Setting",
            desc: "Reviewing site survey results and your energy usage patterns to define system size and performance objectives.",
        },
        {
            icon: <Box className="w-7 h-7 text-[#2E9A4C]" />,
            title: "Component Selection & Layout",
            desc: "Selecting high-quality solar panels, inverters, and racking while designing a layout for maximum efficiency.",
        },
        {
            icon: <FileCog className="w-7 h-7 text-[#6B4F8A]" />,
            title: "Engineering & Documentation",
            desc: "Creating detailed structural & electrical diagrams, securing permits, and preparing installation documentation.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC] py-14 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-[#3B0A4F] hover:text-[#C5A352] transition font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>
                {/* HERO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <motion.div {...motionProps(fadeUp)}>
                        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[#FFF2CC] text-[#7A4A00] mb-4">
                            System Designing
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B0A4F] leading-tight mb-6">
                            Customized Solar System Design
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg max-w-xl leading-relaxed">
                            Building on insights from our detailed site survey, our design
                            team crafts a tailored solar solution. From component selection to
                            layout planning and structural design, every detail ensures
                            efficiency, aesthetics, and seamless integration with your
                            property.
                        </p>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div {...motionProps(fadeUp)}>
                        <div className="mx-auto w-full max-w-lg rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                                <Image
                                    src="/Projects/4.jpg" // replace with your image
                                    alt="Solar system design process"
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
                        Steps of System Design
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
