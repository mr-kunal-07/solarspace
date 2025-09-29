"use client";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


const solarServices = [
    {
        title: "On Grid Solar System",
        description: "Connected to the grid, cuts bills, sends excess back for credits.",
        link: "/services/solar/on-grid",
    },
    {
        title: "Off Grid Solar System",
        description: "Independent of grid, stores power with batteries. Ideal for remote areas.",
        link: "/services/solar/off-grid",
    },
    {
        title: "Solar Water Pump",
        description: "Efficient solar-powered water pumping solutions.",
        link: "/services/solar/water-pump",
    },
    {
        title: "Solar Street Light",
        description: "Eco-friendly lighting powered by solar energy.",
        link: "/services/solar/street-light",
    },
];

export default function SolarServices() {
    const router = useRouter();

    return (
        <section className="py-16 bg-gradient-to-b from-[#FDF9F3] to-[#F9F5EC]">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-[#3B0A4F] hover:text-[#C5A352] transition font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>

                <h1 className="text-4xl font-extrabold text-center text-[#3B0A4F] mb-12">
                    Solar Services
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {solarServices.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition transform hover:-translate-y-2"
                        >
                            <h3 className="text-lg font-bold text-[#3B0A4F] uppercase mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-6 flex justify-end">
                                <ArrowRight className="w-6 h-6 text-[#C5A352] group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
