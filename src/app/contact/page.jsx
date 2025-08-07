"use client";

import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBusinessTime } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs.sendForm(
            "YOUR_SERVICE_ID",     // Replace with EmailJS Service ID
            "YOUR_TEMPLATE_ID",    // Replace with EmailJS Template ID
            formRef.current,
            "YOUR_PUBLIC_KEY"      // Replace with your EmailJS Public Key
        )
            .then(() => {
                setStatus("Message sent successfully!");
                formRef.current.reset();
            })
            .catch((error) => {
                console.error(error.text);
                setStatus("Failed to send. Please try again.");
            });
    };

    return (
        <section className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3B0A4F] mb-4 tracking-tight">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-[#C5A352] mx-auto mb-4 rounded-full" />
                    <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                        Have a project in mind or a question about our services? We’re here to help.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input name="name" required className="w-full border border-gray-300 px-4 py-3 rounded-md" placeholder="Enter Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input name="email" type="email" required className="w-full border border-gray-300 px-4 py-3 rounded-md" placeholder="Enter Your Email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                            <textarea name="message" rows="5" required className="w-full border border-gray-300 px-4 py-3 rounded-md" placeholder="Type your message here..." />
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#C5A352] to-[#E5C97B] text-[#3B0A4F] px-6 py-3 rounded-md font-semibold hover:from-[#D4AF37] hover:to-[#F1D97A] transition w-full sm:w-auto"
                        >
                            Send Message
                        </button>
                        {status && (
                            <p className="text-sm text-[#3B0A4F] mt-2">{status}</p>
                        )}
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-800 space-y-6"
                    >
                        <ContactInfo
                            icon={<FaMapMarkerAlt className="text-xl text-[#3B0A4F]" />}
                            title="Our Office"
                            lines={[
                                "Ground Floor, Shop No. 15, Shree Shankar Nivas,",
                                "Mulund Check Naka, LBS Road, Mumbai Suburban, Mumbai, 400080."
                            ]}
                        />
                        <ContactInfo
                            icon={<FaPhoneAlt className="text-lg text-[#3B0A4F]" />}
                            title="Call Us"
                            lines={["9372392879", "9082534578", "7021019540"]}
                        />
                        <ContactInfo
                            icon={<FaEnvelope className="text-lg text-[#3B0A4F]" />}
                            title="Email"
                            lines={["info.solarspace2025@gmail.com"]}
                        />
                        <ContactInfo
                            icon={<FaBusinessTime className="text-lg text-[#3B0A4F]" />}
                            title="Business Hours"
                            lines={["Mon - Sat: 10:00 AM – 7:00 PM", "Sunday: Closed"]}
                        />
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 rounded-md overflow-hidden border border-[#C5A352] shadow-md"
                >
                    <iframe
                        title="Solar Space Location"
                        src="https://www.google.com/maps?q=Shree+Shankar+Nivas,+Mulund+Check+Naka,+Mumbai+400080&output=embed"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                    />
                </motion.div>
            </div>
        </section>
    );
}

const ContactInfo = ({ icon, title, lines }) => (
    <div className="flex items-start space-x-4">
        <div className="mt-1">{icon}</div>
        <div>
            <h4 className="text-lg font-semibold text-black mb-1">{title}:</h4>
            {lines.map((line, i) => (
                <p key={i} className="text-sm text-gray-700 leading-snug">{line}</p>
            ))}
        </div>
    </div>
);

