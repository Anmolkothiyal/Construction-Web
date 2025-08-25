"use client";

import { ArrowRight, Calendar, CheckCircle, Clock } from "lucide-react";

export default function Roadmap() {
  const roadmapData = [
    {
      year: "Year 1 (2025)",
      title: "Foundation & Setup",
      status: "current",
      items: [
        "Company setup and regulatory compliance",
        "Team building and infrastructure development",
        "2 pilot projects initiation",
        "Local partnerships establishment",
      ],
    },
    {
      year: "Year 2 (2026)",
      title: "Diversification",
      status: "planned",
      items: [
        "Diversify into public infrastructure projects",
        "Expand team capabilities",
        "Establish supply chain partnerships",
        "Technology integration (BIM, ERP)",
      ],
    },
    {
      year: "Year 3 (2027)",
      title: "Geographic Expansion",
      status: "planned",
      items: [
        "Expand operations to 5+ states",
        "Regional office establishments",
        "Strategic partnerships with local players",
        "Brand recognition building",
      ],
    },
    {
      year: "Years 4-5 (2028-2029)",
      title: "Market Leadership",
      status: "planned",
      items: [
        "Launch real estate brand",
        "Establish material trading division",
        "IPO preparation and funding",
        "Technology leadership in construction",
      ],
    },
  ];

  const revenueStreams = [
    {
      stream: "Infrastructure Contracts",
      description:
        "Revenue from government and private infrastructure projects",
      growth: "Primary revenue driver",
    },
    {
      stream: "Real Estate Development",
      description: "Sale and leasing of residential and commercial properties",
      growth: "High-margin business",
    },
    {
      stream: "Turnkey Solutions",
      description: "Project execution fees for comprehensive service delivery",
      growth: "Premium pricing model",
    },
    {
      stream: "Material & Equipment Supply",
      description: "Trading and supply of construction materials and machinery",
      growth: "Steady cash flow",
    },
    {
      stream: "Consulting Services",
      description: "Project management, design, and advisory services",
      growth: "Knowledge-based revenue",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Strategic Roadmap
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our journey to market leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-300"></div>

            <div className="space-y-12">
              {roadmapData.map((phase, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                    {phase.status === "current" ? (
                      <Clock className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Calendar className="h-4 w-4 text-blue-500" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}>
                    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                          {phase.year}
                        </h3>
                        {phase.status === "current" && (
                          <span className="ml-3 px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-4">
                        {phase.title}
                      </h4>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Model */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Revenue Model
          </h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {revenueStreams.map((stream, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {stream.stream}
                  </h4>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {stream.growth}
                  </span>
                </div>
                <p className="text-gray-600">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              Key Milestones
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2025</div>
                <div className="text-lg font-semibold mb-1">Company Launch</div>
                <p className="text-sm opacity-90">Foundation establishment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2026</div>
                <div className="text-lg font-semibold mb-1">
                  Public Projects
                </div>
                <p className="text-sm opacity-90">Government partnerships</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2027</div>
                <div className="text-lg font-semibold mb-1">Multi-State</div>
                <p className="text-sm opacity-90">Geographic expansion</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2029</div>
                <div className="text-lg font-semibold mb-1">Market Leader</div>
                <p className="text-sm opacity-90">Industry recognition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
            <p className="text-xl mb-8 text-gray-300">
              Be part of India&apos;s infrastructure transformation
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
