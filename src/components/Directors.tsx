"use client";

import { Mail, MapPin, User } from "lucide-react";

export default function Directors() {
  const directors = [
    // {
    //   name: "Urmila Devi",
    //   role: "Director",
    //   description:
    //     "Experienced leader with deep understanding of construction industry dynamics and strategic business development.",
    //   image: null, // Placeholder for future image
    // },
    {
      name: "Nishant Kumar",
      role: "Director",
      description:
        "Visionary director with expertise in project management, technical operations, and business growth strategies.",
      contact: {
        location:
          "Dharamnagri Colony, Near Malviya Chowk, Dhampur, Bijnor, UP – 246761",
        phone: "+91 9627969909",
        email: "aekanhibrixo@gmail.com",
      },
      image: null, // Placeholder for future image
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Director
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet the visionary leaders driving our success
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {directors.map((director, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center lg:text-left lg:flex lg:items-center">
                <div className="lg:flex-shrink-0">
                  <div className="mx-auto h-32 w-32 lg:mx-0 lg:h-40 lg:w-40">
                    <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <User className="h-16 w-16 lg:h-20 lg:w-20 text-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-8 lg:flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {director.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mt-1">
                    {director.role}
                  </p>
                  <p className="mt-4 text-gray-600">{director.description}</p>

                  {director.contact && (
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center text-sm text-gray-600 lg:justify-start justify-center">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{director.contact.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 lg:justify-start justify-center">
                        <span className="mr-4">
                          📞 {director.contact.phone}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 lg:justify-start justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <a
                          href={`mailto:${director.contact.email}`}
                          className="text-blue-600 hover:underline">
                          {director.contact.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                <p className="text-blue-100">
                  Embracing cutting-edge technology and creative solutions
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Quality</h4>
                <p className="text-blue-100">
                  Maintaining the highest standards in every project
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Integrity</h4>
                <p className="text-blue-100">
                  Building trust through transparency and ethical practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
