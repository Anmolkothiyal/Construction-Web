"use client";

import { Building2, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Debug log
    setFormData((prev) => {
      const newState = { ...prev, [name]: value };
      console.log("New formData:", newState); // Debug log
      return newState;
    });

    // Clear any previous status when user starts typing
    if (submitStatus.isSuccess || submitStatus.isError) {
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        message: "",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData); // Debug log

    setSubmitStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "Sending your message...",
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server response:", result); // Debug log

      if (response.ok) {
        setSubmitStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: result.message || "Your message has been sent successfully! We'll get back to you soon.",
        });
        resetForm();

        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setSubmitStatus({
            isSubmitting: false,
            isSuccess: false,
            isError: false,
            message: "",
          });
        }, 10000);
      } else {
        setSubmitStatus({
          isSubmitting: false,
          isSuccess: false,
          isError: true,
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error); // Debug log
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  const services = [
    "Infrastructure Development",
    "Real Estate Projects",
    "Construction Materials",
    "Technical Services",
    "Turnkey Solutions",
    "Project Consulting",
  ];

  // Status Alert Component
  const StatusAlert = () => {
    if (!submitStatus.message) return null;

    if (submitStatus.isSubmitting) {
      return (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <Loader className="h-5 w-5 text-blue-600 animate-spin mr-3" />
            <div>
              <p className="text-blue-800 font-medium">Sending Message</p>
              <p className="text-blue-600 text-sm">{submitStatus.message}</p>
            </div>
          </div>
        </div>
      );
    }

    if (submitStatus.isSuccess) {
      return (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-green-800 font-medium">Message Sent Successfully!</p>
              <p className="text-green-600 text-sm mt-1">{submitStatus.message}</p>
              <p className="text-green-600 text-sm mt-2">
                📧 A confirmation email has been sent to your inbox.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (submitStatus.isError) {
      return (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <p className="text-red-800 font-medium">Failed to Send Message</p>
              <p className="text-red-600 text-sm mt-1">{submitStatus.message}</p>
              <p className="text-red-600 text-sm mt-2">
                You can also reach us directly at{" "}
                <a href="mailto:aekanhibrixo@gmail.com" className="underline">
                  aekanhibrixo@gmail.com
                </a>{" "}
                or{" "}
                <a href="tel:+919627969909" className="underline">
                  +91 9627969909
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ready to start your next project? Let&apos;s discuss how we can help.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      Nishant Kumar
                      <br />
                      Dharamnagri Colony, Near Malviya Chowk
                      <br />
                      Dhampur, Bijnor, UP – 246761
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+919627969909" className="text-blue-600 hover:underline">
                      +91 9627969909
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:aekanhibrixo@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      aekanhibrixo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Building2 className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">CIN</h4>
                    <p className="text-gray-600">U43299UP2025PTC222212</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>

                {/* Status Alert */}
                <StatusAlert />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={submitStatus.isSubmitting}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={submitStatus.isSubmitting}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={submitStatus.isSubmitting}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={submitStatus.isSubmitting}
                        className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={submitStatus.isSubmitting}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={submitStatus.isSubmitting}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus.isSubmitting}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {submitStatus.isSubmitting ? (
                      <>
                        <Loader className="animate-spin mr-2 h-5 w-5" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Something Great?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Let&apos;s turn your vision into reality with our expert construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919627969909"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a
                href="mailto:aekanhibrixo@gmail.com"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}