"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Network, FileText, CheckCircle2, Users, Zap, BadgeDollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Liaisoning() {
    const reduceMotion = useReducedMotion();
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => setIsClient(true), []);

    // Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
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

    const gridSteps = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Application Processing",
            desc: "We prepare and submit all necessary documentation to your utility company.",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Utility Coordination",
            desc: "Direct communication with utility providers to expedite approvals and connections.",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Safe Grid Connection",
            desc: "Ensuring your system safely feeds excess energy back to the grid.",
        },
    ];

    const subsidySteps = [
        {
            icon: <BadgeDollarSign className="w-6 h-6" />,
            title: "Incentive Identification",
            desc: "We identify all available government subsidies and rebate programs for you.",
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Documentation Support",
            desc: "Complete paperwork handling and submission to ensure accuracy.",
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "Application Tracking",
            desc: "We advocate on your behalf and track your application until approval.",
        },
    ];

    const benefits = [
        "Zero paperwork hassle for you",
        "Expert knowledge of regulations",
        "Faster approval timelines",
        "Maximum subsidy utilization",
        "End-to-end process management",
        "Direct communication with authorities",
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
                {/* HERO SECTION */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#C5A352]/20 to-[#B89440]/20 text-[#7A4A00] mb-4 border border-[#C5A352]/30">
                        Liaisoning Services
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3B0A4F] leading-tight mb-6 max-w-4xl mx-auto">
                        Simplifying Solar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A352] to-[#B89440]">Connections</span> & Incentives
                    </h1>

                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Let us handle the complex paperwork and coordination. From grid connections to government subsidies, we manage everything so you can focus on enjoying clean, renewable energy.
                    </p>
                </motion.div>

                {/* GRID LIAISONING SECTION */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        {/* Left: Image */}
                        <motion.div {...motionProps(fadeInLeft)}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-[#C5A352]/20 to-transparent rounded-3xl blur-2xl"></div>
                                <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src="/Projects/2.jpg"
                                            alt="Grid liaisoning and utility connection"
                                            fill
                                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <Network className="w-5 h-5 text-[#C5A352]" />
                                            <span className="text-sm font-bold text-[#3B0A4F]">Grid Ready</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div {...motionProps(fadeInRight)}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#C5A352] to-[#B89440] rounded-xl flex items-center justify-center shadow-lg">
                                    <Network className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B0A4F]">
                                    Grid Liaisoning
                                </h2>
                            </div>

                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                                Connecting your solar system to the grid can be complex, but our grid liaisoning service simplifies it. We manage all applications, paperwork, and communication with the utility company, ensuring a smooth and efficient interconnection process so you can safely feed excess energy back to the grid.
                            </p>

                            {/* Steps Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {gridSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-xl p-5 border border-[#C5A352]/20 hover:border-[#C5A352]/40 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-[#C5A352]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#C5A352]/20 transition-colors">
                                            <div className="text-[#C5A352]">{step.icon}</div>
                                        </div>
                                        <h3 className="text-sm font-bold text-[#3B0A4F] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* SUBSIDY LIAISONING SECTION */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        {/* Left: Content */}
                        <motion.div {...motionProps(fadeInLeft)} className="lg:order-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#2E9A4C] to-[#25803E] rounded-xl flex items-center justify-center shadow-lg">
                                    <BadgeDollarSign className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B0A4F]">
                                    Subsidy Liaisoning
                                </h2>
                            </div>

                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                                Navigating government subsidies for solar can be challenging. Our subsidy liaisoning service expertly guides you through the application process for available programs and rebates. We handle the paperwork and act as your advocate to help you secure the financial incentives you deserve, making solar more affordable.
                            </p>

                            {/* Steps Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {subsidySteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-xl p-5 border border-[#2E9A4C]/20 hover:border-[#2E9A4C]/40 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-[#2E9A4C]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#2E9A4C]/20 transition-colors">
                                            <div className="text-[#2E9A4C]">{step.icon}</div>
                                        </div>
                                        <h3 className="text-sm font-bold text-[#3B0A4F] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div {...motionProps(fadeInRight)} className="lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-bl from-[#2E9A4C]/20 to-transparent rounded-3xl blur-2xl"></div>
                                <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                                    <div className="relative aspect-[4/3] w-full">
                                        <Image
                                            src="/Projects/3.jpg"
                                            alt="Government subsidy and financial incentives"
                                            fill
                                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <BadgeDollarSign className="w-5 h-5 text-[#2E9A4C]" />
                                            <span className="text-sm font-bold text-[#3B0A4F]">Save More</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* BENEFITS SECTION */}
                <motion.section
                    {...motionProps(fadeUp)}
                    className="mt-20"
                >
                    <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-[#C5A352]/30 rounded-3xl p-8 sm:p-12 shadow-xl">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3B0A4F] mb-4">
                                Why Choose Our Liaisoning Services?
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
                                We take the complexity out of solar connections and subsidies
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {benefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 bg-white/70 rounded-xl p-5 border border-[#C5A352]/20 hover:border-[#C5A352]/40 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#C5A352] to-[#B89440] rounded-full flex items-center justify-center mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#3B0A4F] font-medium text-sm sm:text-base">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* CTA SECTION */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-[#C5A352] to-[#B89440] text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#C5A352]/50 transition-all duration-300 hover:scale-105">
                            Start Your Application
                        </Link>
                        <Link href="/about" className="px-8 py-4 bg-white text-[#3B0A4F] border-2 border-[#C5A352] rounded-full font-semibold text-base sm:text-lg hover:bg-[#C5A352]/10 transition-all duration-300 hover:scale-105">
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}