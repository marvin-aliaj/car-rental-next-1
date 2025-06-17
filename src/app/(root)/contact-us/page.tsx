"use client";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import * as React from "react";
import Map from "@/components/map";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 -mt-[4rem]">
      <div
        className="h-100 relative bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: "url('/tia1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-7xl mx-auto px-4 mt-[4rem] sm:px-6 lg:px-8 w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Contact Us
              </h1>
              <p className="text-white/90 mt-2 max-w-lg">
                Get in touch with our team for any inquiries or support
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4">Our Locations</h2>

              <div className="space-y-4">
                {/* Tirana Airport */}
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Tirana Airport (TIA)</h3>
                    <p className="text-gray-600 text-sm">
                      Rinas, Tirana 1504, Albania
                    </p>
                  </div>
                </div>

                {/* Durres */}
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Durrës City Center</h3>
                    <p className="text-gray-600 text-sm">
                      Sheshi Liria, Durrës 2001, Albania
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">+355 68 409 3623</span>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">
                    goldcarsalbania0@gmail.com
                  </span>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4">Find Us</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="h-96 w-full bg-gray-200 relative">
                  <div className="mt-12 lg:mt-0 lg:w-full flex justify-center">
                    <div className="grid w-full">
                      <Map />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
