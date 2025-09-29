"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Cable, Zap, ShieldCheck, Package, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SolarElectricalTrading() {
    const reduceMotion = useReducedMotion();
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => setIsClient(true), []);

    // Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const fadeInScale = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
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

    const brands = [
        "Ksolare", "Growatt", "Sungrow", "Waaree",
        "RenewSys", "Vikram", "Adani"
    ];

    const features = [
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            text: "Quality Assured"
        },
        {
            icon: <Award className="w-5 h-5" />,
            text: "Trusted Brands"
        },
        {
            icon: <Package className="w-5 h-5" />,
            text: "Wide Range"
        },
        {
            icon: <Zap className="w-5 h-5" />,
            text: "High Performance"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-[#FDF9F3] via-[#FBF7EF] to-[#F9F5EC] py-14 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-[#3B0A4F] hover:text-[#C5A352] transition font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>
                {/* HEADER */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#C5A352]/20 to-[#B89440]/20 text-[#7A4A00] mb-4 border border-[#C5A352]/30">
                        Premium Products
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3B0A4F] leading-tight mb-6">
                        Solar & Electrical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A352] to-[#B89440]">Trading</span>
                    </h1>

                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                        We offer a wide range of electrical solutions for homes and businesses — safe, efficient, and sourced from industry-leading manufacturers.
                    </p>
                </motion.div>

                {/* FEATURES BAR */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#C5A352]/20 shadow-sm hover:shadow-md hover:border-[#C5A352]/40 transition-all duration-300"
                        >
                            <div className="text-[#C5A352]">{feature.icon}</div>
                            <span className="text-sm font-semibold text-[#3B0A4F]">{feature.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* MAIN CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* SOLAR PRODUCTS CARD */}
                    <motion.article
                        {...motionProps(fadeInScale, { delay: 0.1 })}
                        className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg rounded-3xl border border-[#C5A352]/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    >
                        {/* Card Header with Icon */}
                        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#C5A352]/20 via-[#B89440]/10 to-transparent flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#C5A352] to-[#B89440] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <Sun className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-16 h-16 bg-[#C5A352]/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-4 left-4 w-20 h-20 bg-[#B89440]/20 rounded-full blur-2xl"></div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-4 flex items-center gap-3">
                                Solar Products
                                <div className="flex-1 h-1 bg-gradient-to-r from-[#C5A352]/50 to-transparent rounded-full"></div>
                            </h2>

                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                                We offer a wide range of solar products, including <span className="font-semibold text-[#3B0A4F]">solar inverters</span> and <span className="font-semibold text-[#3B0A4F]">modules</span> from reputed brands. Our focus is on delivering reliable and high-performance solutions to meet diverse energy needs, ensuring quality and durability backed by trusted industry leaders.
                            </p>

                            {/* Brands Section */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-[#3B0A4F] uppercase tracking-wide flex items-center gap-2">
                                    <Award className="w-4 h-4 text-[#C5A352]" />
                                    Trusted Brands
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {brands.map((brand, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-gradient-to-r from-[#C5A352]/10 to-[#B89440]/10 border border-[#C5A352]/20 rounded-full text-sm font-medium text-[#3B0A4F] hover:border-[#C5A352]/40 hover:shadow-md transition-all duration-300"
                                        >
                                            {brand}
                                        </span>
                                    ))}
                                    <span className="px-4 py-2 bg-[#C5A352]/10 border border-[#C5A352]/20 rounded-full text-sm font-medium text-[#3B0A4F]">
                                        & more
                                    </span>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="mt-6 pt-6 border-t border-[#C5A352]/20 grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#C5A352] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Solar Inverters</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#C5A352] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Solar Modules</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#C5A352] rounded-full"></div>
                                    <span className="text-sm text-gray-600">High Performance</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#C5A352] rounded-full"></div>
                                    <span className="text-sm text-gray-600">Quality Assured</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Bottom Corner */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#C5A352]/10 to-transparent rounded-tl-full"></div>
                    </motion.article>

                    {/* ELECTRICAL CABLES CARD */}
                    <motion.article
                        {...motionProps(fadeInScale, { delay: 0.2 })}
                        className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg rounded-3xl border border-[#3B0A4F]/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                    >
                        {/* Card Header with Icon */}
                        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#3B0A4F]/20 via-[#4A1560]/10 to-transparent flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#3B0A4F] to-[#4A1560] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <Cable className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-16 h-16 bg-[#3B0A4F]/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-4 left-4 w-20 h-20 bg-[#4A1560]/20 rounded-full blur-2xl"></div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-4 flex items-center gap-3">
                                Electrical Cables
                                <div className="flex-1 h-1 bg-gradient-to-r from-[#3B0A4F]/50 to-transparent rounded-full"></div>
                            </h2>

                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                                We supply high-quality <span className="font-semibold text-[#3B0A4F]">AC and DC cables</span> suitable for a variety of electrical and solar applications. Our cables meet industry standards and are designed for durability, safety, and optimal performance in residential, commercial, and industrial installations.
                            </p>

                            {/* Cable Types Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div className="bg-gradient-to-br from-[#3B0A4F]/10 to-transparent rounded-xl p-5 border border-[#3B0A4F]/20 hover:border-[#3B0A4F]/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-[#3B0A4F]/20 rounded-lg flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-[#3B0A4F]" />
                                        </div>
                                        <h3 className="font-bold text-[#3B0A4F]">AC Cables</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Premium alternating current cables for electrical installations
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-[#C5A352]/10 to-transparent rounded-xl p-5 border border-[#C5A352]/20 hover:border-[#C5A352]/40 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-[#C5A352]/20 rounded-lg flex items-center justify-center">
                                            <Sun className="w-5 h-5 text-[#C5A352]" />
                                        </div>
                                        <h3 className="font-bold text-[#3B0A4F]">DC Cables</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Specialized direct current cables for solar systems
                                    </p>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="mt-6 pt-6 border-t border-[#3B0A4F]/20 space-y-3">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#3B0A4F] mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-[#3B0A4F] text-sm mb-1">Industry Standards</h4>
                                        <p className="text-xs text-gray-600">All cables meet or exceed safety and quality standards</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Package className="w-5 h-5 text-[#3B0A4F] mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-[#3B0A4F] text-sm mb-1">Versatile Applications</h4>
                                        <p className="text-xs text-gray-600">Suitable for residential, commercial, and industrial use</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Bottom Corner */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#3B0A4F]/10 to-transparent rounded-tl-full"></div>
                    </motion.article>
                </div>

                {/* CTA SECTION */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-[#C5A352]/30 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-4">
                            Ready to Source Quality Solar & Electrical Products?
                        </h3>
                        <p className="text-gray-700 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
                            Get in touch with our team to discuss your requirements and receive expert guidance on the best products for your project.
                        </p>
                        <div className="inline-flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-[#C5A352] to-[#B89440] text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#C5A352]/50 transition-all duration-300 hover:scale-105">
                                Request Quote
                            </button>
                            <button className="px-8 py-4 bg-white text-[#3B0A4F] border-2 border-[#C5A352] rounded-full font-semibold text-base sm:text-lg hover:bg-[#C5A352]/10 transition-all duration-300 hover:scale-105">
                                View Catalog
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}