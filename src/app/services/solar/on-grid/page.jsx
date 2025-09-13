"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Zap, Home, Building2, Building } from "lucide-react";

export default function OnGridSolar() {
    const reduceMotion = useReducedMotion();

    // animation variants that respect reduced motion
    const appearFromLeft = {
        hidden: { opacity: 0, x: -36 },
        visible: { opacity: 1, x: 0 },
    };
    const appearFromRight = {
        hidden: { opacity: 0, x: 36 },
        visible: { opacity: 1, x: 0 },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 16, scale: 0.995 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };
    const motionProps = (variant) => ({
        variants: variant,
        initial: reduceMotion ? "visible" : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.65, ease: "easeOut" },
    });

    const components = [
        {
            icon: <Sun className="w-8 h-8" />,
            title: "Solar Panels",
            desc: "High-efficiency PV modules that convert sunlight into DC electricity.",
            accent: "from-[#FFF9E7] to-[#F7F0D9]",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Grid-tie Inverter",
            desc: "Converts DC to grid-synchronized AC with high efficiency.",
            accent: "from-[#E8F8ED] to-[#E2F3E7]",
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: "Mounting & Structure",
            desc: "Durable, weather-proof structures for rooftop or ground-mount setups.",
            accent: "from-[#EFF6FF] to-[#E8F1FF]",
        },
    ];

    const applications = [
        {
            icon: <Home className="w-8 h-8" />,
            title: "Residential Homes",
            desc: "Clean energy for households, reduces monthly bills dramatically.",
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Commercial & Industrial",
            desc: "Lowers operating cost & carbon footprint for businesses.",
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: "Housing Societies",
            desc: "Shared installations to maximize savings and simplify maintenance.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC] py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
                {/* Top split hero */}
                <div className="grid gap-10 md:grid-cols-2 items-center">
                    {/* Image */}
                    <motion.div
                        {...motionProps(appearFromLeft)}
                        className="order-1 md:order-0"
                        aria-hidden
                    >
                        <div className="mx-auto w-full max-w-xl rounded-2xl overflow-hidden shadow-xl border-2 border-[#C5A352]/10">
                            {/* responsive aspect ratio box */}
                            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                                <Image
                                    src="/Projects/7.jpg"
                                    alt="On Grid Solar System"
                                    fill
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div {...motionProps(appearFromRight)} className="space-y-6">
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#EAF7E9] text-[#1E4F2F]">
                            On-Grid Solutions
                        </span>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3B0A4F] leading-tight">
                            On-Grid Solar System
                        </h1>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
                            A grid-tied solar system lets you generate solar electricity while staying
                            connected to the local utility. Excess energy is exported to the grid —
                            reducing your bill through net-metering and increasing your energy resilience.
                        </p>

                        {/* key points */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                            <li className="flex items-start gap-3">
                                <div className="flex-none mt-1 rounded-full bg-[#E5C97B]/20 p-2">
                                    <Sun className="w-5 h-5 text-[#C5A352]" aria-hidden />
                                </div>
                                <div>
                                    <div className="font-semibold text-[#3B0A4F]">High savings</div>
                                    <div className="text-sm text-gray-600">Cut electricity bills by up to 90%*</div>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="flex-none mt-1 rounded-full bg-[#CDEFE5]/20 p-2">
                                    <Zap className="w-5 h-5 text-[#3B0A352]" aria-hidden />
                                </div>
                                <div>
                                    <div className="font-semibold text-[#3B0A4F]">Net metering ready</div>
                                    <div className="text-sm text-gray-600">Export credits back to your utility</div>
                                </div>
                            </li>
                        </ul>

                        {/* CTA + small stats */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-5 py-3 rounded-full font-semibold shadow hover:scale-[1.03] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/40"
                                aria-label="Request a quote for on-grid solar"
                            >
                                Get a Quote
                            </Link>

                            <div className="flex gap-4 mt-2 sm:mt-0">
                                <div className="text-center">
                                    <div className="text-xl font-bold text-[#3B0A4F]">90%</div>
                                    <div className="text-xs text-gray-600">Max savings</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-[#3B0A4F]">Net Metering</div>
                                    <div className="text-xs text-gray-600">Supported</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Components */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="mt-16 sm:mt-20"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-6 text-center">Main Components</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {components.map((c, i) => (
                            <article
                                key={i}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition transform"
                                aria-labelledby={`component-${i}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-none rounded-lg bg-gradient-to-br from-[#FFF9E7] to-[#F7F0D9] p-3 shadow-inner">
                                        <div className="text-[#C5A352]" aria-hidden>{c.icon}</div>
                                    </div>
                                    <div>
                                        <h3 id={`component-${i}`} className="text-lg font-semibold text-[#3B0A4F]">{c.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.div>

                {/* Applications */}
                <motion.div {...motionProps(fadeUp)} className="mt-14 sm:mt-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-6 text-center">Applications</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {applications.map((app, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl p-5 bg-gradient-to-r from-[#F7F7F6] to-[#FFFDF9] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition transform"
                                role="article"
                                aria-labelledby={`app-${idx}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-none mt-1 rounded-md bg-[#F1ECE7] p-3">
                                        <div className="text-[#3B0A4F]" aria-hidden>{app.icon}</div>
                                    </div>
                                    <div>
                                        <h3 id={`app-${idx}`} className="font-semibold text-[#3B0A4F]">{app.title}</h3>
                                        <p className="mt-1 text-sm text-gray-700">{app.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
