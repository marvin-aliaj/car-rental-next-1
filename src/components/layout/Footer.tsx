"use client";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { ArrowRight, Car, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-900 to-neutral-900 text-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-amber-500 mr-2" />
              <span className="text-2xl font-bold text-white">
                Gold Car Rental
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Premium car rental service in Albania since 2010. Experience the
              freedom of the open road with our exceptional fleet.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook className="h-5 w-5" />, label: "Facebook" },
                {
                  icon: <FaInstagram className="h-5 w-5" />,
                  label: "Instagram",
                },
                { icon: <FaTwitter className="h-5 w-5" />, label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-neutral-400 hover:text-amber-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-neutral-700">
              Explore
            </h3>
            <ul className="space-y-3">
              {["Home", "Our Fleet", "Pricing", "Locations", "About Us"].map(
                (item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                      <span className="text-neutral-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-neutral-700">
              Contact Us
            </h3>
            <ul className="space-y-4 text-neutral-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                <span>Sheshi Liria, Durrës 2001, Albania</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span>+355 69 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <span>contact@goldcarrental.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-amber-400 mr-3" />
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-neutral-700">
              Newsletter
            </h3>
            <p className="text-neutral-300 mb-4">
              Subscribe for exclusive offers and travel tips
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-neutral-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Gold Car Rental. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy">
              <span className="text-neutral-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-neutral-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </span>
            </Link>
            <Link href="/faq">
              <span className="text-neutral-400 hover:text-white transition-colors duration-200">
                FAQ
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
