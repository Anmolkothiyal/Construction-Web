"use client";

import { Award, Eye, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About AEKANHI BRIXO
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Your trusted partner in construction and infrastructure development
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Who We Are
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                AEKANHI BRIXO PRIVATE LIMITED is a forward-thinking construction
                and infrastructure development company that specializes in
                delivering comprehensive solutions across roads, highways,
                residential, commercial, and industrial projects.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We offer a complete range of services including real estate
                development, infrastructure construction, turnkey solutions, and
                construction material & equipment supply, with a special focus
                on Tier II & III cities.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Award className="h-5 w-5 mr-2" />
                Innovation • Sustainability • Timely Delivery
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Our Mission
                  </h4>
                </div>
                <p className="text-gray-600">
                  Delivering excellence in construction, real estate, and
                  turnkey solutions through innovation, quality, and integrity.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Our Vision
                  </h4>
                </div>
                <p className="text-gray-600">
                  To be a leading force in modern, sustainable, and inclusive
                  infrastructure development across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-600">
                  ₹1.4T
                </div>
                <div className="mt-2 text-sm font-medium text-gray-900">
                  Indian Infrastructure Market by 2030
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-600">8%</div>
                <div className="mt-2 text-sm font-medium text-gray-900">
                  Annual Urban Housing Growth
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-600">
                  Tier II & III
                </div>
                <div className="mt-2 text-sm font-medium text-gray-900">
                  Cities Focus Area
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-orange-600">
                  2025
                </div>
                <div className="mt-2 text-sm font-medium text-gray-900">
                  Year Established
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
