'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Residential Rooftop – Uran',
        location: 'Uran, Mumbai, Maharashtra',
        capacity: '10 kW',
        type: 'Residential',
        description:
            'A residential solar rooftop installation designed to maximize savings and provide clean, renewable energy for households.',
        image: '/Projects/1.jpg',
    },
    {
        id: 2,
        title: 'Commercial Installation – Sanpada',
        location: 'Sanpada, Navi Mumbai, Maharashtra',
        capacity: '40 kW',
        type: 'Commercial',
        description:
            'Solar power system for a commercial building, significantly reducing high electricity costs and contributing to sustainable operations.',
        image: '/Projects/2.jpg',
    },
    {
        id: 3,
        title: 'Shapoorji Pallonji – Epsilon Tower',
        location: 'Pune, Maharashtra',
        capacity: '40 kW',
        type: 'Commercial',
        description:
            'Installed at Epsilon Tower, this rooftop system supplies reliable solar power to support the building daily energy needs.',
        image: '/Projects/3.jpg',
    },
    {
        id: 4,
        title: 'Industrial Rooftop – Borivali',
        location: 'Borivali, Mumbai, Maharashtra',
        capacity: '20 kW',
        type: 'Industrial',
        description:
            'A solar installation at Vasant Marwell Borivali ensuring clean energy generation and reduced carbon footprint for the premises.',
        image: '/Projects/4.jpg',
    },
    {
        id: 5,
        title: 'Ground-Mounted Solar – Malvan',
        location: 'Malvan, Maharashtra',
        capacity: '10 kW',
        type: 'Residential',
        description:
            'A ground-mounted solar project designed for rural energy needs, ensuring sustainability and independence from grid fluctuations.',
        image: '/Projects/5.jpg',
    },
    {
        id: 6,
        title: 'Shapoorji Pallonji – Astron Tower',
        location: 'Pune, Maharashtra',
        capacity: '40 kW',
        type: 'Commercial',
        description:
            'Installed at Astron Tower, this system powers residential common areas and helps in reducing electricity expenses sustainably.',
        image: '/Projects/6.jpg',
    },
    {
        id: 7,
        title: 'Inverter Installation – Chauke',
        location: 'Chauke, Maharashtra',
        capacity: '10 kW',
        type: 'Residential',
        description:
            'High-efficiency inverter system installed in Chauke to ensure smooth energy conversion and reliable solar output.',
        image: '/Projects/7.jpg',
    },
    {
        id: 8,
        title: 'Inverter Installation – Bhandup',
        location: 'Bhandup, Mumbai, Maharashtra',
        capacity: '20 kW',
        type: 'Industrial',
        description:
            'Advanced solar inverter setup at Bhandup, providing stable power conversion for larger-scale energy needs.',
        image: '/Projects/8.jpg',
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [hoveredCard, setHoveredCard] = useState(null);

    const filters = ['All', 'Residential', 'Commercial', 'Industrial'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.type === filter);

    // Calculate stats
    const totalCapacity = projects.reduce((sum, p) => sum + parseInt(p.capacity), 0);
    const totalProjects = projects.length;

    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-[#FDF9F3] via-[#FBF7EF] to-[#F9F5EC] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-[#C5A352]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#3B0A4F]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
                    <div className="inline-block mb-4">
                        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-[#C5A352]/10 backdrop-blur-sm rounded-full border border-[#C5A352]/20">
                            <svg className="w-5 h-5 text-[#C5A352]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            <span className="text-sm font-semibold text-[#C5A352]">Portfolio</span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#3B0A4F] leading-tight">
                        Our Solar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A352] to-[#B89440]">Projects</span>
                    </h1>

                    <p className="text-base sm:text-lg text-[#3B0A4F]/70 max-w-2xl mx-auto mb-8 px-4">
                        Transforming spaces with sustainable energy solutions across Maharashtra
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
                        <div className="bg-white/60 backdrop-blur-md border border-[#C5A352]/20 rounded-2xl px-6 py-4 min-w-[140px] shadow-lg">
                            <div className="text-2xl sm:text-3xl font-bold text-[#C5A352]">{totalProjects}+</div>
                            <div className="text-xs sm:text-sm text-[#3B0A4F]/70 mt-1">Completed Projects</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md border border-[#C5A352]/20 rounded-2xl px-6 py-4 min-w-[140px] shadow-lg">
                            <div className="text-2xl sm:text-3xl font-bold text-[#C5A352]">{totalCapacity} kW</div>
                            <div className="text-xs sm:text-sm text-[#3B0A4F]/70 mt-1">Total Capacity</div>
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4" data-aos="fade-up">
                        {filters.map((filterName) => (
                            <button
                                key={filterName}
                                onClick={() => setFilter(filterName)}
                                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${filter === filterName
                                        ? 'bg-gradient-to-r from-[#C5A352] to-[#B89440] text-white shadow-lg shadow-[#C5A352]/30 scale-105'
                                        : 'bg-white/70 text-[#3B0A4F] hover:bg-white border border-[#C5A352]/20 hover:border-[#C5A352]/40'
                                    }`}
                            >
                                {filterName}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-3xl border border-[#C5A352]/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C5A352]/20 hover:-translate-y-2 hover:border-[#C5A352]/50"
                            aria-labelledby={`project-${project.id}-title`}
                        >
                            {/* Type Badge */}
                            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#C5A352]/90 backdrop-blur-sm rounded-full text-xs font-bold text-white shadow-lg">
                                {project.type}
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3B0A4F] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <Image
                                    src={project.image}
                                    alt={`${project.title} - ${project.location}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    loading="lazy"
                                />

                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-[#C5A352]/80 to-transparent z-10 transition-opacity duration-500 ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                                    }`}></div>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6 text-[#3B0A4F] relative">
                                <h2
                                    id={`project-${project.id}-title`}
                                    className="text-xl sm:text-2xl font-bold mb-3 leading-tight group-hover:text-[#C5A352] transition-colors duration-300"
                                >
                                    {project.title}
                                </h2>

                                {/* Location */}
                                <div className="flex items-start gap-2 mb-3 text-sm sm:text-base">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A352] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-[#3B0A4F]/70 leading-snug">{project.location}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-[#3B0A4F]/70 leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Capacity Badge */}
                                <div className="flex items-center justify-between pt-4 border-t border-[#C5A352]/20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-[#C5A352]/20 rounded-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 text-[#C5A352]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xs text-[#3B0A4F]/60">Capacity</div>
                                            <div className="text-base sm:text-lg font-bold text-[#C5A352]">{project.capacity}</div>
                                        </div>
                                    </div>

                                    {/* View Details Button */}
                                    {/* <button className="px-4 py-2 bg-[#C5A352]/10 hover:bg-[#C5A352] hover:text-white rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 border border-[#C5A352]/30 hover:border-[#C5A352] text-[#3B0A4F]">
                                        Details →
                                    </button> */}
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C5A352]/10 to-transparent rounded-tl-full"></div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20" data-aos="fade-up">
                        <div className="w-20 h-20 bg-[#C5A352]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-[#C5A352]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#3B0A4F] mb-2">No Projects Found</h3>
                        <p className="text-[#3B0A4F]/60">Try selecting a different filter</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-16 sm:mt-20 text-center" data-aos="fade-up">
                    <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-[#C5A352]/30 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto shadow-xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#3B0A4F] mb-4">
                            Ready to Start Your Solar Journey?
                        </h3>
                        <p className="text-[#3B0A4F]/70 mb-6 text-base sm:text-lg">
                            Join our growing list of satisfied customers and make the switch to clean energy today.
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-[#C5A352] to-[#B89440] text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#C5A352]/50 transition-all duration-300 hover:scale-105">
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;