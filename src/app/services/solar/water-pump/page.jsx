"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Zap, Droplet, Settings, Battery, Home, Leaf } from "lucide-react";

/**
 * SolarWaterPump - improved, responsive, accessible component
 *
 * Improvements:
 * - Responsive hero (aspect box + next/image fill)
 * - Reusable FeatureCard with keyboard focus and hover/focus states
 * - Clear visual hierarchy (badge → H1 → copy → CTA → stats)
 * - Accessible labels, semantic sections and roles
 * - Motion respects prefers-reduced-motion
 * - Safe-area bottom padding for mobile devices
 */

export default function SolarWaterPump() {
    const reduceMotion = useReducedMotion();

    const appearLeft = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } };
    const appearRight = { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } };
    const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

    const motionProps = (variant, opts = {}) => ({
        variants: variant,
        initial: reduceMotion ? "visible" : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: "easeOut", ...opts },
    });

    const components = [
        {
            icon: <Sun className="w-6 h-6 text-[#C5A352]" aria-hidden />,
            title: "Solar Panels",
            desc: "Capture sunlight and generate electricity (PV modules).",
        },
        {
            icon: <Zap className="w-6 h-6 text-[#2E9A4C]" aria-hidden />,
            title: "Pump Controller",
            desc: "Regulates voltage and controls pump operation safely.",
        },
        {
            icon: <Droplet className="w-6 h-6 text-[#3B0A4F]" aria-hidden />,
            title: "Water Pump",
            desc: "Submersible or surface pumps for wells, rivers, or tanks.",
        },
        {
            icon: <Settings className="w-6 h-6 text-[#6B4F8A]" aria-hidden />,
            title: "Mounting Structure",
            desc: "Secure tilt/angle for panels to maximize energy harvest.",
        },
        {
            icon: <Battery className="w-6 h-6 text-[#D97706]" aria-hidden />,
            title: "Storage Tank / Battery",
            desc: "Stores water or energy for use when sunlight is unavailable.",
        },
    ];

    const applications = [
        {
            icon: <Home className="w-5 h-5 text-[#3B0A4F]" aria-hidden />,
            title: "Irrigation & Farms",
            desc: "Reliable water supply for crops without diesel generators.",
        },
        {
            icon: <Leaf className="w-5 h-5 text-[#2E9A4C]" aria-hidden />,
            title: "Livestock",
            desc: "Drinking water systems for livestock in remote locations.",
        },
        {
            icon: <Droplet className="w-5 h-5 text-[#3B0A4F]" aria-hidden />,
            title: "Drinking Water",
            desc: "Clean water delivery for rural & off-grid communities.",
        },
    ];

    const FeatureCard = ({ icon, title, desc }) => (
        <article
            tabIndex={0}
            role="group"
            aria-labelledby={`feature-${title}`}
            className="flex flex-col items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transform transition-all duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/40"
        >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FFF9E7]">
                <div className="text-[#3B0A4F]">{icon}</div>
            </div>
            <h3 id={`feature-${title}`} className="text-base font-semibold text-[#3B0A4F]">
                {title}
            </h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </article>
    );

    return (
        <section
            className="bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC] py-12 sm:py-16 lg:py-20"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 1rem)" }}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
                {/* HERO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image */}
                    <motion.figure
                        {...motionProps(appearLeft)}
                        className="mx-auto w-full max-w-xl rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5"
                        aria-hidden
                    >
                        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                            <Image
                                src="/Projects/1.jpg"
                                alt="Solar water pump system with panels and tank"
                                fill
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.figure>

                    {/* Text */}
                    <motion.div {...motionProps(appearRight)}>
                        <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-[#EDE7FF] text-[#4A0C6A] mb-4">
                            Solar Water Solutions
                        </span>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3B0A4F] leading-tight mb-4">
                            Solar Water Pump
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base max-w-xl leading-relaxed mb-6">
                            Solar pump systems use solar energy to operate water pumps for irrigation, livestock, drinking water and other uses.
                            They are an eco-friendly alternative to diesel/electric pumps — ideal for remote or off-grid areas. Panels convert sunlight to electricity which powers pumps either directly or via a controller.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-5 py-3 rounded-full font-semibold shadow-sm hover:scale-[1.03] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C97B]/40"
                                aria-label="Request a quote for solar water pump"
                            >
                                Request a Quote
                            </Link>

                            <div className="flex gap-6 mt-2 sm:mt-0 text-sm text-gray-600">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-[#3B0A4F]">Reliable</div>
                                    <div className="text-xs">Works off-grid</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-[#3B0A4F]">Sustainable</div>
                                    <div className="text-xs">No fossil fuel required</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Components */}
                <motion.section {...motionProps(fadeUp)} aria-labelledby="components-heading" className="mt-10 md:mt-14">
                    <h2 id="components-heading" className="text-xl sm:text-2xl font-bold text-[#3B0A4F] mb-3 text-center">
                        Main Components
                    </h2>
                    <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-6">
                        Core parts of a solar pumping system.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                        {components.map((c) => (
                            <FeatureCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} />
                        ))}
                    </div>
                </motion.section>

                {/* Applications */}
                <motion.section {...motionProps(fadeUp, { delay: 0.05 })} aria-labelledby="apps-heading" className="mt-10 md:mt-14">
                    <h3 id="apps-heading" className="text-lg sm:text-xl font-semibold text-[#3B0A4F] mb-4 text-center">
                        Typical Applications
                    </h3>

                    <div className="grid grid-cols-1 pb-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {applications.map((a) => (
                            <article
                                key={a.title}
                                className="flex gap-3 items-start bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
                            >
                                <div className="flex-none w-10 h-10 rounded-md bg-[#F1F6F2] flex items-center justify-center">
                                    {a.icon}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[#3B0A4F]">{a.title}</div>
                                    <p className="text-xs text-gray-600 mt-1">{a.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
