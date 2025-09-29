"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Zap, Battery, Shield, Home, Building2, Radio } from "lucide-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OffGridSolar() {
    const router = useRouter();
    const reduceMotion = useReducedMotion();

    // Motion variants (respect reduced motion)
    const appearLeft = {
        hidden: { opacity: 0, x: -36 },
        visible: { opacity: 1, x: 0 },
    };
    const appearRight = {
        hidden: { opacity: 0, x: 36 },
        visible: { opacity: 1, x: 0 },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 18, scale: 0.995 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const motionProps = (variant, opts = {}) => ({
        variants: variant,
        initial: reduceMotion ? "visible" : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.6, ease: "easeOut", ...opts },
    });

    const components = [
        {
            icon: <Sun className="w-6 h-6" aria-hidden />,
            title: "Solar Panels",
            desc: "Capture sunlight and convert it into electricity (PV modules).",
        },
        {
            icon: <Zap className="w-6 h-6" aria-hidden />,
            title: "Charge Controller",
            desc: "Regulates voltage & current to safely charge the battery bank.",
        },
        {
            icon: <Battery className="w-6 h-6" aria-hidden />,
            title: "Battery Bank",
            desc: "Stores power for night-time use and cloudy days.",
        },
        {
            icon: <Shield className="w-6 h-6" aria-hidden />,
            title: "Inverter",
            desc: "Converts DC from batteries into AC for household appliances.",
        },
    ];

    const applications = [
        {
            icon: <Home className="w-6 h-6" aria-hidden />,
            title: "Remote Homes & Cabins",
            desc: "Independent power where grid access is poor or costly.",
        },
        {
            icon: <Building2 className="w-6 h-6" aria-hidden />,
            title: "Rural Clinics & Schools",
            desc: "Reliable power for lights, devices, and refrigeration.",
        },
        {
            icon: <Shield className="w-6 h-6" aria-hidden />,
            title: "Emergency Backup",
            desc: "Standby power during outages and disasters.",
        },
        {
            icon: <Radio className="w-6 h-6" aria-hidden />,
            title: "Telecom / Remote Stations",
            desc: "Consistent power for communication infrastructure.",
        },
    ];

    return (
        <section
            className="bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC] py-12 sm:py-16 lg:py-20"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 1rem)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-[#3B0A4F] hover:text-[#C5A352] transition font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>

                {/* HERO: image + intro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        {...motionProps(appearLeft)}
                        className="order-1 md:order-0"
                        aria-hidden="true"
                    >
                        <div className="mx-auto w-full max-w-xl rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
                            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                                <Image
                                    src="/Projects/7.jpg"
                                    alt="Off-grid solar battery bank installation"
                                    fill
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...motionProps(appearRight)}>
                        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[#EDE7FF] text-[#4A0C6A] mb-4">
                            Off-Grid Systems
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B0A4F] leading-tight mb-4">
                            Off-Grid Solar System
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg max-w-xl leading-relaxed mb-6">
                            A standalone solar power system that generates electricity from panels and stores it in batteries for use when sunlight isn’t available. It operates independently from the utility grid — ideal for remote locations and reliable backup power.
                        </p>

                        {/* quick features */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mb-6">
                            <li className="flex gap-3 items-start">
                                <div className="flex-none rounded-lg bg-[#FFF9E7] p-2">
                                    <Sun className="w-5 h-5 text-[#C5A352]" aria-hidden />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[#3B0A4F]">Self-sufficient</div>
                                    <div className="text-sm text-gray-600">No grid dependency required</div>
                                </div>
                            </li>

                            <li className="flex gap-3 items-start">
                                <div className="flex-none rounded-lg bg-[#E8F8F0] p-2">
                                    <Zap className="w-5 h-5 text-[#2E9A4C]" aria-hidden />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[#3B0A4F]">Smart charging</div>
                                    <div className="text-sm text-gray-600">Safe battery management</div>
                                </div>
                            </li>
                        </ul>

                        {/* CTA + stats */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-5 py-3 rounded-full font-semibold shadow hover:scale-[1.03] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/40"
                                aria-label="Request a quote for off-grid solar"
                            >
                                Get a Quote
                            </Link>

                            <div className="flex gap-6 mt-2 sm:mt-0">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-[#3B0A4F]">Off-Grid</div>
                                    <div className="text-xs text-gray-600">Independent power</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-[#3B0A4F]">Battery Backup</div>
                                    <div className="text-xs text-gray-600">Continuous supply</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* MAIN COMPONENTS */}
                <motion.section {...motionProps(fadeUp)} className="mt-12 md:mt-16" aria-labelledby="components-heading">
                    <h2 id="components-heading" className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-6 text-center">
                        Main Components
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {components.map((c, idx) => (
                            <article
                                key={idx}
                                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform focus-within:ring-2 focus-within:ring-[#E5C97B]/30"
                                aria-labelledby={`component-${idx}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-none rounded-lg bg-gradient-to-br from-[#FFF9E7] to-[#F7F0D9] p-3">
                                        <div className="text-[#C5A352]">{c.icon}</div>
                                    </div>

                                    <div>
                                        <h3 id={`component-${idx}`} className="text-lg font-semibold text-[#3B0A4F]">
                                            {c.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.section>

                {/* APPLICATIONS */}
                <motion.section {...motionProps(fadeUp, { delay: 0.04 })} className="mt-10 md:mt-14" aria-labelledby="apps-heading">
                    <h2 id="apps-heading" className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-6 text-center">
                        Applications
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {applications.map((a, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-5 bg-gradient-to-r from-[#F7F7F6] to-[#FFFDF9] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform"
                                role="article"
                                aria-labelledby={`app-${i}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-none mt-1 rounded-md bg-[#F1ECE7] p-3">
                                        <div className="text-[#3B0A4F]">{a.icon}</div>
                                    </div>

                                    <div>
                                        <h3 id={`app-${i}`} className="font-semibold text-[#3B0A4F]">{a.title}</h3>
                                        <p className="mt-1 text-sm text-gray-700">{a.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
