import React, { useState } from 'react';

const AdminAddProject = ({ onAddProject }) => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        capacity: '',
        description: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title && formData.location && formData.capacity && formData.description && formData.image) {
            onAddProject({ ...formData, id: Date.now() });
            setFormData({ title: '', location: '', capacity: '', description: '', image: '' });
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">Add New Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Project Title"
                    className="w-full border p-2 rounded"
                />
                <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="w-full border p-2 rounded"
                />
                <input
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Capacity (e.g. 10 kW)"
                    className="w-full border p-2 rounded"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full border p-2 rounded"
                />
                <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full border p-2 rounded"
                />
                <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">
                    Add Project
                </button>
            </form>
        </div>
    );
};

export default AdminAddProject;