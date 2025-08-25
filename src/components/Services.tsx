"use client";

import {
  Building,
  Compass,
  Construction,
  Factory,
  Home,
  Package,
  Settings,
  Truck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Construction,
      title: "Infrastructure Development",
      description:
        "Roads, bridges, tunnels, ports, airports, and dams construction with modern technology.",
      features: [
        "Highway Construction",
        "Bridge Engineering",
        "Port Development",
        "Airport Infrastructure",
      ],
    },
    {
      icon: Building,
      title: "Real Estate Projects",
      description:
        "Comprehensive residential, commercial, and industrial development solutions.",
      features: [
        "Residential Complexes",
        "Commercial Buildings",
        "Industrial Parks",
        "Township Development",
      ],
    },
    {
      icon: Package,
      title: "Construction Materials",
      description:
        "Supply of high-quality cement, steel, bricks, tools, and machinery.",
      features: [
        "Premium Materials",
        "Equipment Supply",
        "Quality Assurance",
        "Timely Delivery",
      ],
    },
    {
      icon: Settings,
      title: "Technical Services",
      description:
        "Professional design, engineering, surveying, and consultancy services.",
      features: [
        "Engineering Design",
        "Land Surveying",
        "Project Management",
        "Technical Consultancy",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive construction and infrastructure solutions
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <service.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Service Categories
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            <div className="text-center p-4">
              <Home className="h-8 w-8 mx-auto text-blue-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">
                Residential
              </div>
            </div>
            <div className="text-center p-4">
              <Building className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">
                Commercial
              </div>
            </div>
            <div className="text-center p-4">
              <Factory className="h-8 w-8 mx-auto text-purple-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">
                Industrial
              </div>
            </div>
            <div className="text-center p-4">
              <Construction className="h-8 w-8 mx-auto text-orange-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">
                Infrastructure
              </div>
            </div>
            <div className="text-center p-4">
              <Truck className="h-8 w-8 mx-auto text-red-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">
                Supply Chain
              </div>
            </div>
            <div className="text-center p-4">
              <Compass className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
              <div className="text-sm font-medium text-gray-900">
                Consulting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
