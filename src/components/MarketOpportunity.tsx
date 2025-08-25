"use client";

import { Building2, DollarSign, TrendingUp, Users } from "lucide-react";

export default function MarketOpportunity() {
  const opportunities = [
    {
      icon: DollarSign,
      title: "Indian Infrastructure Market",
      value: "₹1.4T by 2030",
      description:
        "Massive growth opportunity in infrastructure development across the country",
      color: "text-green-600 bg-green-50",
    },
    {
      icon: Building2,
      title: "Tier II & III City Development",
      value: "Untapped Potential",
      description:
        "Significant development opportunities in emerging urban centers",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Urban Housing Demand",
      value: "8% Annual Growth",
      description:
        "Consistent growth in housing demand creating sustained opportunities",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: Users,
      title: "Government Initiatives",
      value: "Policy Support",
      description:
        "Strong government backing through Smart Cities, PMAY, and AMRUT programs",
      color: "text-orange-600 bg-orange-50",
    },
  ];

  const governmentSchemes = [
    {
      name: "Smart Cities Mission",
      description: "Urban transformation initiative",
    },
    {
      name: "PMAY (Pradhan Mantri Awas Yojana)",
      description: "Housing for all by 2022",
    },
    {
      name: "AMRUT (Atal Mission)",
      description: "Urban renewal and transformation",
    },
    {
      name: "National Infrastructure Pipeline",
      description: "₹111 lakh crore investment plan",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Market Opportunity
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Positioned at the forefront of India&apos;s infrastructure boom
          </p>
        </div>

        {/* Market Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${opportunity.color} mb-4`}>
                  <opportunity.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {opportunity.title}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {opportunity.value}
                </div>
                <p className="text-sm text-gray-600">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Trends */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Key Market Trends
            </h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Urbanization Rate Target
                </div>
                <p className="text-gray-600">
                  Expected urban population growth by 2030
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ₹50L Cr
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Annual Infrastructure Spend
                </div>
                <p className="text-gray-600">
                  Government&apos;s infrastructure investment commitment
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  15%
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  CAGR Growth Rate
                </div>
                <p className="text-gray-600">
                  Construction industry growth projection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Government Schemes */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Government Support Programs
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {governmentSchemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {scheme.name}
                    </h4>
                    <p className="text-gray-600">{scheme.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Capitalize on Growth?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Join us in building India&apos;s infrastructure future
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors">
              Partner with Us
              <TrendingUp className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
