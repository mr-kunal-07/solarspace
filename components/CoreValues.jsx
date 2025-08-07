import React from "react";
import {
    FaBolt,
    FaAward,
    FaSolarPanel,
    FaStar,
    FaHandshake,
} from "react-icons/fa";

const values = [
    {
        icon: <FaBolt size={32} />,
        title: "Expertise",
        description:
            "Advanced knowledge and real-world experience in designing efficient solar power systems.",
    },
    {
        icon: <FaAward size={32} />,
        title: "Accredited",
        description:
            "Certified solutions meeting government standards with a focus on safety and compliance.",
    },
    {
        icon: <FaSolarPanel size={32} />,
        title: "Specialization",
        description:
            "Tailored on-grid/off-grid systems, solar water pumps, and custom solar solutions.",
    },
    {
        icon: <FaStar size={32} />,
        title: "Quality",
        description:
            "High-performance, durable systems built for long-term reliability and satisfaction.",
    },
    {
        icon: <FaHandshake size={32} />,
        title: "Trusted Partnerships",
        description:
            "Strong alliances with top manufacturers to ensure premium product delivery.",
    },
];

export default function CoreValues() {
    return (
        <section className="bg-gradient-to-b from-[#e9bc41] to-[#E5C97B] select-none py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto  text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#3B0A4F] uppercase tracking-wide">
                    Our Core Values
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {values.map((val, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 hover:bg-[#3B0A4F] transition-all duration-300 p-6 rounded-2xl shadow-md flex flex-col items-center text-center group"
                    >
                        <div className="mb-4 text-[#C5A352] group-hover:text-yellow-300 transition-colors duration-300">
                            {val.icon}
                        </div>

                        <h3 className="text-lg uppercase text-black font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                            {val.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white transition-colors duration-300">
                            {val.description}
                        </p>
                    </div>

                ))}
            </div>
        </section>
    );
}
