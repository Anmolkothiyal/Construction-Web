"use client";

import {
  ArrowRight,
  CheckCircle,
  Cog,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Solutions() {
  const problems = [
    {
      title: "Lack of organized developers in Tier II & III cities",
      impact: "Fragmented market with inconsistent quality",
    },
    {
      title: "Fragmented supply chain for materials",
      impact: "Higher costs and delivery delays",
    },
    {
      title: "Shortage of skilled labor in remote areas",
      impact: "Project delays and quality issues",
    },
    {
      title: "Delays in public infrastructure execution",
      impact: "Hampered economic development",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "End-to-End Construction & Real Estate Services",
      description:
        "Complete project lifecycle management from conception to completion with integrated service delivery.",
    },
    {
      icon: Users,
      title: "Expertise in Public & Private Projects",
      description:
        "Specialized knowledge in both sectors with proven track record of successful project delivery.",
    },
    {
      icon: Cog,
      title: "Turnkey Delivery with In-house Management",
      description:
        "Comprehensive project management capabilities ensuring timely and quality delivery.",
    },
    {
      icon: TrendingUp,
      title: "Centralized Supply & Logistics",
      description:
        "Streamlined supply chain for materials and machinery ensuring cost-effectiveness and reliability.",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Problems We Solve
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Addressing key challenges in the construction industry
          </p>
        </div>

        {/* Problems */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Industry Challenges
          </h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{problem.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Indicator */}
        <div className="flex justify-center my-12">
          <div className="bg-blue-600 rounded-full p-4">
            <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Our Solutions
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <solution.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="ml-3 text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h4>
                </div>
                <p className="text-gray-600">{solution.description}</p>
                <div className="mt-4 flex items-center text-green-600 font-semibold">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Solution Implemented
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Approach */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Unique Approach
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <Target className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">End-to-End Solutions</h4>
                <p className="text-sm opacity-90">
                  From land acquisition to delivery
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <Users className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Tier II & III Focus</h4>
                <p className="text-sm opacity-90">
                  Specialized market expertise
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <Cog className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">In-house Team</h4>
                <p className="text-sm opacity-90">
                  Engineers, architects, managers
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <TrendingUp className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Turnkey Expertise</h4>
                <p className="text-sm opacity-90">
                  Speed and precision delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
