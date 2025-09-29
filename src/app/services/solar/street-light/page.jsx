"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Battery, Lightbulb, Zap, Landmark, Eye } from "lucide-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SolarStreetLight() {
    const reduceMotion = useReducedMotion();
    const router = useRouter();
    /* ---------------- motion variants ---------------- */
    const slideLeft = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } };
    const slideRight = { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } };
    const fadeUp = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } };

    const motionProps = (variant, opts = {}) => ({
        variants: variant,
        initial: reduceMotion ? "visible" : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.55, ease: "easeOut", ...opts },
    });

    const components = [
        { icon: <Sun className="w-6 h-6" />, title: "Solar Panel", desc: "Captures sunlight and converts it into electricity." },
        { icon: <Battery className="w-6 h-6" />, title: "Battery", desc: "Stores energy for night-time usage." },
        { icon: <Lightbulb className="w-6 h-6" />, title: "LED Light", desc: "Provides bright and efficient illumination." },
        { icon: <Zap className="w-6 h-6" />, title: "Charge Controller", desc: "Regulates power between panel, battery and light." },
        { icon: <Landmark className="w-6 h-6" />, title: "Pole", desc: "Supports all components at required height." },
        { icon: <Eye className="w-6 h-6" />, title: "Sensor (optional)", desc: "Auto on/off based on daylight or motion." },
    ];

    return (
        <section
            className="bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC] py-10 sm:py-14 lg:py-20"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 1rem)" }}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-[#3B0A4F] hover:text-[#C5A352] transition font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>
                {/* HERO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image - mobile first, good aspect ratio */}
                    <motion.figure
                        {...motionProps(slideLeft)}
                        className="order-1 md:order-0 mx-auto w-full max-w-xl rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5"
                        aria-hidden
                    >
                        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                            <Image
                                src="/Projects/3.jpg"
                                alt="Solar street light with panel and pole"
                                fill
                                sizes="(max-width:640px) 90vw, (max-width:1024px) 50vw, 600px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.figure>

                    {/* Text */}
                    <motion.header {...motionProps(slideRight)} className="order-0 md:order-1">
                        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[#EDE7FF] text-[#4A0C6A] mb-4">
                            Solar Lighting
                        </span>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3B0A4F] leading-tight mb-3">
                            Solar Street Light
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base max-w-xl leading-relaxed mb-6">
                            Solar street lights are standalone outdoor lighting systems powered by solar energy. They charge during the day and automatically light up streets,
                            pathways and public areas at night — an eco-friendly and cost-effective lighting solution.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-4 py-2.5 rounded-full font-semibold shadow-sm hover:scale-[1.03] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/40"
                                aria-label="Get a quote for solar street light"
                            >
                                Get a Quote
                            </Link>

                            <div className="flex gap-6 text-sm text-gray-600 mt-1 sm:mt-0">
                                <div className="text-center">
                                    <div className="font-bold text-[#3B0A4F]">Eco-friendly</div>
                                    <div className="text-xs">Low running cost</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-[#3B0A4F]">Autonomous</div>
                                    <div className="text-xs">Auto-charge & night operation</div>
                                </div>
                            </div>
                        </div>
                    </motion.header>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-100" />

                {/* Main Components */}
                <motion.section {...motionProps(fadeUp)} aria-labelledby="components-heading" className="mt-6">
                    <h2 id="components-heading" className="text-xl sm:text-2xl font-bold text-[#3B0A4F] mb-4 text-center">
                        Main Components
                    </h2>

                    <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-6">
                        Core parts required for a reliable solar street lighting installation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                        {components.map((c, i) => (
                            <article
                                key={i}
                                tabIndex={0}
                                className="flex gap-4 items-start bg-white rounded-xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/30"
                                aria-labelledby={`comp-${i}`}
                                role="group"
                            >
                                <div className="flex-none w-12 h-12 rounded-lg bg-[#F8F6F0] flex items-center justify-center text-[#3B0A4F]">
                                    <span className="sr-only">{c.title}</span>
                                    <div aria-hidden className="text-[#3B0A4F]">{c.icon}</div>
                                </div>

                                <div className="min-w-0">
                                    <h3 id={`comp-${i}`} className="text-sm sm:text-base font-semibold text-[#3B0A4F] leading-snug">
                                        {c.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{c.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.section>

                {/* Optional: compact components list for very small screens */}
                <div className="mt-6 pb-3 prose-sm text-gray-700 max-w-3xl mx-auto">
                    <p className="text-xs sm:text-sm">
                        Note: sensors and smart controllers are optional but recommended for energy savings and automated operation.
                    </p>
                </div>
            </div>
        </section>
    );
}
