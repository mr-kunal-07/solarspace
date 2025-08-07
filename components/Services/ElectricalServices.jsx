import React from "react";
import { FaBolt, FaTools, FaPlug, FaShieldAlt } from "react-icons/fa";

export default function ElectricalServices() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Professional Electrical Services
        </h2>
        <p className="text-lg text-blue-700 mb-12 max-w-2xl mx-auto">
          We offer a wide range of electrical solutions for homes and businesses — safe, efficient, and handled by certified electricians.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <FaBolt className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Wiring & Rewiring</h3>
            <p className="text-blue-600 text-sm">
              Safe, code-compliant wiring installations and upgrades for homes, offices, and industrial setups.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <FaTools className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Electrical Maintenance</h3>
            <p className="text-blue-600 text-sm">
              Regular inspection and maintenance to prevent issues and ensure optimal electrical performance.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <FaPlug className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Appliance Installation</h3>
            <p className="text-blue-600 text-sm">
              Secure installation of electrical appliances including fans, lights, sockets, and heavy machinery.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <FaShieldAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Safety Inspections</h3>
            <p className="text-blue-600 text-sm">
              Comprehensive electrical audits and safety checks for residential and commercial properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
