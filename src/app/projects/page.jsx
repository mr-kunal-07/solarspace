'use client';
import React from 'react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Residential Rooftop – Mumbai',
        location: 'Mumbai, Maharashtra',
        capacity: '5 kW',
        description:
            'A residential solar rooftop installation helping the client save up to 90% on monthly electricity bills.',
        image: '/Projects/1.jpg',
    },
    {
        id: 2,
        title: 'Commercial Installation – Nashik',
        location: 'Nashik, Maharashtra',
        capacity: '20 kW',
        description:
            'Solar power system for a commercial building to offset high energy costs and support sustainability.',
        image: '/Projects/2.jpg',
    },
    {
        id: 3,
        title: 'School Project – Pune',
        location: 'Pune, Maharashtra',
        capacity: '15 kW',
        description:
            'Installed on a school rooftop, this system powers classrooms and labs during school hours.',
        image: '/Projects/3.jpg',
    },
];

const Projects = () => {
    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-[#3B0A4F] to-white py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold text-center mb-12 text-[#C5A352] drop-shadow-md">
                Our Solar Projects
            </h1>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="group bg-white/30 rounded-2xl border border-white/40 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-[1.03]"
                        aria-labelledby={`project-${project.id}-title`}
                    >
                        <div className="relative w-full h-48 sm:h-56 rounded-t-2xl overflow-hidden">
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
