"use client";

import { AlertTriangle, Shield, TrendingUp, Zap } from "lucide-react";

export default function SWOT() {
  const swotData = {
    strengths: [
      "Integrated service model (design to delivery)",
      "Strong Tier II & III city focus",
      "In-house technical team",
      "Faster turnkey execution",
    ],
    weaknesses: [
      "High capital requirement",
      "Dependence on land & regulatory approvals",
      "Limited brand recognition",
    ],
    opportunities: [
      "Government push (Smart Cities, PMAY, AMRUT)",
      "Affordable housing demand",
      "Untapped semi-urban & rural markets",
      "Technology adoption (BIM, drones, ERP)",
    ],
    threats: [
      "Political/regulatory delays",
      "Competition from big players",
      "Fluctuating material/labor costs",
      "Economic slowdowns",
    ],
  };

  const swotSections = [
    {
      title: "Strengths",
      items: swotData.strengths,
      icon: Shield,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      titleColor: "text-green-800",
    },
    {
      title: "Weaknesses",
      items: swotData.weaknesses,
      icon: AlertTriangle,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600",
      titleColor: "text-red-800",
    },
    {
      title: "Opportunities",
      items: swotData.opportunities,
      icon: TrendingUp,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      titleColor: "text-blue-800",
    },
    {
      title: "Threats",
      items: swotData.threats,
      icon: Zap,
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
      titleColor: "text-yellow-800",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            SWOT Analysis
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Strategic assessment of our market position
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {swotSections.map((section, index) => (
              <div
                key={index}
                className={`${section.color} border-2 rounded-lg p-6`}>
                <div className="flex items-center mb-6">
                  <section.icon
                    className={`h-8 w-8 ${section.iconColor} mr-3`}
                  />
                  <h3 className={`text-2xl font-bold ${section.titleColor}`}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div
                        className={`w-2 h-2 ${section.iconColor.replace(
                          "text-",
                          "bg-"
                        )} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Positioning */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Strategic Positioning
            </h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Competitive Advantage
                </h4>
                <p className="text-gray-600">
                  Leveraging our integrated service model and Tier II & III city
                  expertise
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Growth Strategy
                </h4>
                <p className="text-gray-600">
                  Capitalizing on government initiatives and untapped market
                  potential
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Risk Management
                </h4>
                <p className="text-gray-600">
                  Proactive approach to regulatory challenges and market
                  competition
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Our Competitive Edge</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="text-3xl font-bold mb-2">360°</div>
                <div className="text-lg font-semibold mb-1">
                  Complete Solutions
                </div>
                <p className="text-sm opacity-90">
                  End-to-end project delivery
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Tier 2&3</div>
                <div className="text-lg font-semibold mb-1">Market Focus</div>
                <p className="text-sm opacity-90">Specialized expertise</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">In-House</div>
                <div className="text-lg font-semibold mb-1">Technical Team</div>
                <p className="text-sm opacity-90">Quality assurance</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Fast</div>
                <div className="text-lg font-semibold mb-1">Execution</div>
                <p className="text-sm opacity-90">Rapid delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
