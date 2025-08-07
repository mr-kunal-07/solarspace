import React from "react";
import { FaCogs, FaBuilding, FaRegHandshake, FaSolarPanel } from "react-icons/fa";

const reasons = [
    {
        title: "Customized Solutions",
        icon: <FaCogs size={30} />,
        description:
            "Whether it's a cement slab, sheet roof, or landscaping, we provide specialized designs that fit your unique requirements.",
    },
    {
        title: "Comprehensive Design Services",
        icon: <FaBuilding size={30} />,
        description:
            "From homes and offices to hotels, factories, and agricultural projects, we deliver tailored solar designs for every sector.",
    },
    {
        title: "Government Support",
        icon: <FaRegHandshake size={30} />,
        description:
            "We offer expert guidance on subsidies, tax benefits, and net metering approval to maximize your savings.",
    },
    {
        title: "End-to-End Support",
        icon: <FaSolarPanel size={30} />,
        description:
            "Enjoy a seamless solar installation with free site surveys, load analysis, MSEDCL approvals, and more.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-[#FDFBF6] py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-[#3B0A4F] uppercase tracking-wide">
                    Why Choose Us?
                </h2>
                <p className="text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
                    Trusted solar expertise delivering end-to-end customized energy solutions across all sectors.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {reasons.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-gray-200 hover:border-[#C5A352] p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#F5F0E3] text-[#C5A352] group-hover:text-[#3B0A4F] p-3 rounded-full transition duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#3B0A4F] group-hover:text-[#C5A352] transition duration-300">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
