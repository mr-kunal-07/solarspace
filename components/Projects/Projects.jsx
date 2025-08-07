import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Residential Rooftop – Mumbai',
        location: 'Mumbai, Maharashtra',
        capacity: '5 kW',
        description: 'A residential solar rooftop installation helping the client save up to 90% on monthly electricity bills.',
        image: './Projects/1.jpg',
    },
    {
        id: 2,
        title: 'Commercial Installation – Nashik',
        location: 'Nashik, Maharashtra',
        capacity: '20 kW',
        description: 'Solar powea system for a commercial building to offset high energy costs and support sustainability.',
        image: './Projects/2.jpg',
    },
    {
        id: 3,
        title: 'School Project – Pune',
        location: 'Pune, Maharashtra',
        capacity: '15 kW',
        description: 'Installed on a school rooftop, this system powers classrooms and labs during school hours.',
        image: './Projects/3.jpg',
    },
];

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-orange-600 mb-8 text-center">Our Solar Projects</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-orange-600">{project.title}</h2>
                            <p className="text-sm text-green-600">{project.location}</p>
                            <p className="text-sm text-gray-700 mt-2">{project.description}</p>
                            <p className="mt-3 text-sm font-medium text-red-700">
                                Capacity: {project.capacity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
