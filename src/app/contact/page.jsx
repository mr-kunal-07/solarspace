"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBusinessTime } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                {/* Header */}
                <div className="section-header">
                    <h2>Contact Us</h2>
                    <div className="underline"></div>
                    <p>
                        Have a project in mind or a question about our services? We’re here to help.
                    </p>
                </div>

                <div className="grid-layout">
                    {/* Contact Form */}
                    <form className="contact-form fade-in-left">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Enter Your Email" required />
                        </div>
                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea name="message" rows="5" placeholder="Type your message here..." required />
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>

                    {/* Contact Info */}
                    <div className="contact-info fade-in-right">
                        <ContactInfo
                            icon={<FaMapMarkerAlt />}
                            title="Our Office"
                            lines={[
                                "Ground Floor, Shop No. 15, Shree Shankar Nivas,",
                                "Mulund Check Naka, LBS Road, Mumbai Suburban, Mumbai, 400080."
                            ]}
                        />
                        <ContactInfo
                            icon={<FaPhoneAlt />}
                            title="Call Us"
                            lines={["9372392879", "9082534578", "7021019540"]}
                        />
                        <ContactInfo
                            icon={<FaEnvelope />}
                            title="Email"
                            lines={["info.solarspace2025@gmail.com"]}
                        />
                        <ContactInfo
                            icon={<FaBusinessTime />}
                            title="Business Hours"
                            lines={["Mon - Sat: 10:00 AM – 7:00 PM", "Sunday: Closed"]}
                        />
                    </div>
                </div>

                {/* Map */}
                <div className="map-container fade-in-up">
                    <iframe
                        title="Solar Space Location"
                        src="https://www.google.com/maps?q=Shree+Shankar+Nivas,+Mulund+Check+Naka,+Mumbai+400080&output=embed"
                        loading="lazy"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}

const ContactInfo = ({ icon, title, lines }) => (
    <div className="info-block">
        <div className="icon">{icon}</div>
        <div>
            <h4>{title}:</h4>
            {lines.map((line, i) => (
                <p key={i}>{line}</p>
            ))}
        </div>
    </div>
);
