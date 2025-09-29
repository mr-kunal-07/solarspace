import Link from "next/link";
import { Sun, Ruler, Cog, Wrench, FileCheck, Cable } from "lucide-react";

const services = [
    { title: "Solar Services", link: "/services/solar", icon: Sun, desc: "On-grid, off-grid, water pumps, and more sustainable solutions." },
    { title: "Site Surveying", link: "/services/site-surveying", icon: Ruler, desc: "Thorough assessments to maximize your solar efficiency." },
    { title: "System Designing", link: "/services/system-designing", icon: Cog, desc: "Custom solar system designs tailored to your energy needs." },
    { title: "Installation", link: "/services/installation", icon: Wrench, desc: "Seamless, certified installation with guaranteed performance." },
    { title: "Liaisoning", link: "/services/liaisoning", icon: FileCheck, desc: "Grid & subsidy liaisoning with hassle-free paperwork support." },
    { title: "Solar & Electrical Trading", link: "/services/trading", icon: Cable, desc: "Quality solar products & electrical cables from top brands." },
];

export default function Services() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#FDF9F3] via-[#FBF7EF] to-[#F9F5EC]">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#3B0A4F] mb-6">
                    <span className="bg-gradient-to-r from-[#C5A352] to-[#3B0A4F] text-transparent bg-clip-text">
                        Our Services
                    </span>
                </h1>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
                    Explore our wide range of solar and electrical solutions designed to power your future with clean, reliable energy.
                </p>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <Link
                            key={i}
                            href={s.link}
                            className="group block bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                        >
                            {/* Gradient hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A352]/10 to-[#3B0A4F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                            {/* Icon */}
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C5A352] to-[#3B0A4F] mb-6 shadow-lg">
                                <s.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-[#3B0A4F] mb-3">
                                {s.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {s.desc}
                            </p>

                            {/* Right Arrow */}
                            <div className="mt-6 flex items-center text-[#3B0A4F] font-semibold group-hover:text-[#C5A352] transition-colors">
                                Learn More →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
