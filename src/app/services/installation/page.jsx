"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
    ShieldCheck,
    Wrench,
    PanelsTopLeft,
    Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Installation() {
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
            icon: <ShieldCheck className="w-7 h-7 text-[#C5A352]" />,
            title: "Preparation & Safety Setup",
            desc: "Gathering materials, enforcing safety protocols, and preparing the installation site.",
        },
        {
            icon: <Wrench className="w-7 h-7 text-[#2E9A4C]" />,
            title: "Mounting System Installation",
            desc: "Attaching racking systems on the roof or ground, following exact design specifications.",
        },
        {
            icon: <PanelsTopLeft className="w-7 h-7 text-[#6B4F8A]" />,
            title: "Panel & Equipment Installation",
            desc: "Mounting solar panels, inverter setup, wiring, and integrating essential components.",
        },
        {
            icon: <Zap className="w-7 h-7 text-[#E67E22]" />,
            title: "Electrical Connection & Testing",
            desc: "Connecting to the electrical panel & grid, followed by detailed functionality testing.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#FAF9F6] to-[#F4F1EB] py-14 sm:py-16 lg:py-20">
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
                        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[#EAF8E6] text-[#2E7D32] mb-4">
                            Installation
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B0A4F] leading-tight mb-6">
                            Seamless Solar Installation
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg max-w-xl leading-relaxed">
                            Our certified installation team ensures smooth deployment of your
                            custom-designed solar system. From secure panel mounting to grid
                            integration, we guarantee reliability, safety, and long-term
                            performance.
                        </p>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div {...motionProps(fadeUp)}>
                        <div className="mx-auto w-full max-w-lg rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                                <Image
                                    src="/Projects/2.jpg" // replace with your actual image
                                    alt="Solar installation process"
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
                        Steps of Installation
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

                {/* CTA */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="mt-14 text-center"
                >
                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg hover:from-[#D4AF37] hover:to-[#F1D97A] transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/60"
                    >
                        Get Your Installation Scheduled
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
