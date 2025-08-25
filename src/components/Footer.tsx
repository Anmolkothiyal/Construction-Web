"use client";

import { ArrowUp, Building2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Infrastructure Development",
    "Real Estate Projects",
    "Construction Materials",
    "Technical Services",
    "Turnkey Solutions",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">AEKANHI BRIXO</span>
            </div>
            <p className="text-gray-300 mb-4">
              Forward-thinking construction and infrastructure development
              company delivering excellence in Tier II & III cities across
              India.
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400">
                <strong>CIN:</strong> U43299UP2025PTC222212
              </div>
              <div className="text-gray-400">
                Registered in Uttar Pradesh, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Dharamnagri Colony, Near Malviya Chowk,
                  <br />
                  Dhampur, Bijnor, UP – 246761
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <a
                  href="tel:+919627969909"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  +91 9627969909
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <a
                  href="mailto:aekanhibrixo@gmail.com"
                  className="text-gray-300 hover:text-white text-sm transition-colors">
                  aekanhibrixo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 sm:mb-0">
              © 2025 AEKANHI BRIXO PRIVATE LIMITED. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-300 text-sm">
                Building the Future of Infrastructure
              </div>
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Scroll to top">
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Our Mission
            </h4>
            <p className="text-gray-300 text-sm">
              Delivering excellence in construction, real estate, and turnkey
              solutions through innovation, quality, and integrity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
