"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Building the{" "}
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative">Future</span>
            </span>{" "}
            of Infrastructure
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Forward-thinking construction and infrastructure development company
            delivering excellence in Tier II & III cities across India with
            innovation, sustainability, and timely delivery.
          </p>

          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-800 focus-visible:outline-blue-600">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#about"
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300">
              Learn More
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="text-lg font-semibold text-slate-900">
                End-to-End Solutions
              </h3>
              <p className="text-sm text-slate-600">From design to delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="text-lg font-semibold text-slate-900">
                Tier II & III Focus
              </h3>
              <p className="text-sm text-slate-600">
                Specialized in emerging markets
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="text-lg font-semibold text-slate-900">
                Turnkey Expertise
              </h3>
              <p className="text-sm text-slate-600">
                Speed and precision delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Info Bar */}
      <div className="bg-slate-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="mb-2 sm:mb-0">
              <span className="font-semibold">CIN:</span> U43299UP2025PTC222212
            </div>
            <div className="text-slate-300">
              Registered in Uttar Pradesh, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
