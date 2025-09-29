"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
    const reduceMotion = useReducedMotion();
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        requirement: "",
        message: ""
    });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
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
        initial: !isMounted || reduceMotion ? "visible" : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: "easeOut", ...opts },
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({
                    type: "success",
                    message: "Thank you! We've received your inquiry and will contact you within 24 hours."
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    budget: "",
                    requirement: "",
                    message: ""
                });
            } else {
                setStatus({
                    type: "error",
                    message: "Something went wrong. Please try again or contact us directly."
                });
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message. Please check your connection and try again."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Our Office",
            lines: [
                "Ground Floor, Shop No. 15, Shree Shankar Nivas,",
                "Mulund Check Naka, LBS Road,",
                "Mumbai Suburban, Mumbai, 400080."
            ],
            color: "#C5A352"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            lines: ["9372392879", "9082534578", "7021019540"],
            color: "#2E9A4C"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            lines: ["info.solarspace2025@gmail.com"],
            color: "#3B0A4F"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            lines: ["Mon - Sat: 10:00 AM – 7:00 PM", "Sunday: Closed"],
            color: "#C5A352"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-[#FDF9F3] via-[#FBF7EF] to-[#F9F5EC] py-14 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
                {/* Header */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#C5A352]/20 to-[#B89440]/20 text-[#7A4A00] mb-4 border border-[#C5A352]/30">
                        Get In Touch
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3B0A4F] leading-tight mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A352] to-[#B89440]">Us</span>
                    </h1>

                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind or a question about our solar solutions? We're here to help you make the switch to clean energy.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div {...motionProps(fadeInLeft)}>
                        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg rounded-3xl border border-[#C5A352]/30 shadow-xl p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#C5A352] to-[#B89440] rounded-xl flex items-center justify-center">
                                    <Send className="w-5 h-5 text-white" />
                                </div>
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-[#3B0A4F] mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-[#C5A352]/30 bg-white/80 focus:border-[#C5A352] focus:ring-2 focus:ring-[#C5A352]/20 outline-none transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#3B0A4F] mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-[#C5A352]/30 bg-white/80 focus:border-[#C5A352] focus:ring-2 focus:ring-[#C5A352]/20 outline-none transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#3B0A4F] mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-[#C5A352]/30 bg-white/80 focus:border-[#C5A352] focus:ring-2 focus:ring-[#C5A352]/20 outline-none transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#3B0A4F] mb-2">
                                        Budget Range *
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-[#C5A352]/30 bg-white/80 focus:border-[#C5A352] focus:ring-2 focus:ring-[#C5A352]/20 outline-none transition-all duration-300"
                                    >
                                        <option value="">Select your budget</option>
                                        <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                                        <option value="₹1-3 Lakhs">₹1-3 Lakhs</option>
                                        <option value="₹3-5 Lakhs">₹3-5 Lakhs</option>
                                        <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
                                        <option value="Above ₹10 Lakhs">Above ₹10 Lakhs</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#3B0A4F] mb-2">
                                        Requirement Type *
                                    </label>
                                    <select
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-[#C5A352]/30 bg-white/80 focus:border-[#C5A352] focus:ring-2 focus:ring-[#C5A352]/20 outline-none transition-all duration-300"
                                    >
                                        <option value="">Select requirement</option>
                                        <option value="Residential Solar">Residential Solar</option>
                                        <option value="Commercial Solar">Commercial Solar</option>
                                        <option value="Industrial Solar">Industrial Solar</option>
                                        <option value="Solar Products">Solar Products</option>
                                        <option value="Electrical Cables">Electrical Cables</option>
                                        <option value="Consultation">Consultation</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#3B0A4F] mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your project or requirements..."
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-[#C5A352]/30 bg-white/80 focus:border-[#C5A352] focus:ring-2 focus:ring-[#C5A352]/20 outline-none transition-all duration-300 resize-none"
                                    />
                                </div>

                                {status.message && (
                                    <div className={`p-4 rounded-xl flex items-start gap-3 ${status.type === "success"
                                            ? "bg-green-50 border border-green-200"
                                            : "bg-red-50 border border-red-200"
                                        }`}>
                                        {status.type === "success" ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        )}
                                        <p className={`text-sm ${status.type === "success" ? "text-green-800" : "text-red-800"
                                            }`}>
                                            {status.message}
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-[#C5A352] to-[#B89440] text-white rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#C5A352]/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div {...motionProps(fadeInRight)} className="space-y-6">
                        {contactInfo.map((info, idx) => (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg rounded-2xl border border-[#C5A352]/20 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${info.color}20` }}
                                    >
                                        <div style={{ color: info.color }}>
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-[#3B0A4F] mb-2">
                                            {info.title}
                                        </h4>
                                        {info.lines.map((line, i) => (
                                            <p key={i} className="text-gray-700 text-sm leading-relaxed">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    {...motionProps(fadeUp)}
                    className="rounded-3xl overflow-hidden shadow-2xl border border-[#C5A352]/30"
                >
                    <iframe
                        title="Solar Space Location"
                        src="https://www.google.com/maps?q=Shree+Shankar+Nivas,+Mulund+Check+Naka,+Mumbai+400080&output=embed"
                        loading="lazy"
                        allowFullScreen
                        className="w-full h-[400px] sm:h-[500px]"
                    />
                </motion.div>
            </div>
        </section>
    );
}