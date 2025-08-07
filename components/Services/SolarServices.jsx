// SolarServices.jsx
import React from "react";
import { FaSolarPanel, FaTools, FaLightbulb, FaBatteryFull } from "react-icons/fa";

export default function SolarServices() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-yellow-50 to-orange-100 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-600 drop-shadow-sm">
          Solar Services
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-700">
          Harness clean energy with our expert solar solutions. We provide efficient, cost-saving installations for homes and businesses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<FaSolarPanel className="text-4xl text-orange-500 mb-4" />}
            title="Rooftop Solar Installation"
            description="Custom-designed solar panel installations tailored to your energy needs."
          />
          <ServiceCard
            icon={<FaTools className="text-4xl text-orange-500 mb-4" />}
            title="Maintenance & Monitoring"
            description="Ongoing support to ensure maximum performance and longevity."
          />
          <ServiceCard
            icon={<FaLightbulb className="text-4xl text-orange-500 mb-4" />}
            title="Energy Consultation"
            description="Expert guidance to help you transition to solar efficiently and effectively."
          />
          <ServiceCard
            icon={<FaBatteryFull className="text-4xl text-orange-500 mb-4" />}
            title="Battery & Off-grid Systems"
            description="Advanced storage solutions and systems for remote areas."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
