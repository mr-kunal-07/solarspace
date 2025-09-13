'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Residential Rooftop – Uran',
        location: 'Uran, Mumbai, Maharashtra',
        capacity: '10 kW',
        description:
            'A residential solar rooftop installation designed to maximize savings and provide clean, renewable energy for households.',
        image: '/Projects/1.jpg',
    },
    {
        id: 2,
        title: 'Commercial Installation – Sanpada',
        location: 'Sanpada, Navi Mumbai, Maharashtra',
        capacity: '40 kW',
        description:
            'Solar power system for a commercial building, significantly reducing high electricity costs and contributing to sustainable operations.',
        image: '/Projects/2.jpg',
    },
    {
        id: 3,
        title: 'Shapoorji Pallonji – Epsilon Tower',
        location: 'Pune, Maharashtra',
        capacity: '40 kW',
        description:
            'Installed at Epsilon Tower, this rooftop system supplies reliable solar power to support the building’s daily energy needs.',
        image: '/Projects/3.jpg',
    },
    {
        id: 4,
        title: 'Industrial Rooftop – Borivali',
        location: 'Borivali, Mumbai, Maharashtra',
        capacity: '20 kW',
        description:
            'A solar installation at Vasant Marwell Borivali ensuring clean energy generation and reduced carbon footprint for the premises.',
        image: '/Projects/4.jpg',
    },
    {
        id: 5,
        title: 'Ground-Mounted Solar – Malvan',
        location: 'Malvan, Maharashtra',
        capacity: '10 kW',
        description:
            'A ground-mounted solar project designed for rural energy needs, ensuring sustainability and independence from grid fluctuations.',
        image: '/Projects/5.jpg',
    },
    {
        id: 6,
        title: 'Shapoorji Pallonji – Astron Tower',
        location: 'Pune, Maharashtra',
        capacity: '40 kW',
        description:
            'Installed at Astron Tower, this system powers residential common areas and helps in reducing electricity expenses sustainably.',
        image: '/Projects/6.jpg',
    },
    {
        id: 7,
        title: 'Inverter Installation – Chauke',
        location: 'Chauke, Maharashtra',
        capacity: '10 kW',
        description:
            'High-efficiency inverter system installed in Chauke to ensure smooth energy conversion and reliable solar output.',
        image: '/Projects/7.jpg',
    },
    {
        id: 8,
        title: 'Inverter Installation – Bhandup',
        location: 'Bhandup, Mumbai, Maharashtra',
        capacity: '20 kW',
        description:
            'Advanced solar inverter setup at Bhandup, providing stable power conversion for larger-scale energy needs.',
        image: '/Projects/8.jpg',
    }


];

const Projects = () => {
    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-[#FDF9F3] via-[#FBF7EF] to-[#F9F5EC] py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-12 text-[#C5A352] drop-shadow-md">
                Our Solar Projects
            </h1>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="group bg-white/30 rounded-2xl border border-white/40 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03]"
                        aria-labelledby={`project-${project.id}-title`}
                    >
                        <div className="relative w-full h-44 sm:h-56 rounded-t-2xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={`${project.title} - ${project.location}`}
                                fill
                                className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-5 text-[#3B0A4F]">
                            <h2
                                id={`project-${project.id}-title`}
                                className="text-2xl font-bold mb-2 leading-snug"
                            >
                                {project.title}
                            </h2>

                            <p className="text-sm font-medium mb-2">
                                <span className="mr-1">📍</span>
                                <span className="text-[#2E1340]">{project.location}</span>
                            </p>

                            <p className="text-[15px] text-[#3B0A4F]/90 leading-relaxed mb-3">
                                {project.description}
                            </p>

                            <p className="text-sm font-semibold text-[#79213D]">
                                <span className="mr-1">🔋</span>Capacity:{" "}
                                <span className="text-[#531A3F]">{project.capacity}</span>
                            </p>
                        </div>

                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
