"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden -mt-[4rem]">
      <div className="relative h-[90vh] min-h-[600px] bg-gray-900">
        {/* Background video or image */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/video/car-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury car driving"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/50 to-amber-600/30"></div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-amber-400">Premium</span> Car Rentals{" "}
                <br />
                For Your <span className="text-purple-300">Journey</span>
              </h1>

              <p className="text-xl text-gray-200 mb-10 max-w-lg mx-auto">
                Experience luxury travel with our exclusive fleet of high-end
                vehicles
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#booking-form">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105">
                    Reserve Now
                  </Button>
                </Link>
                <Link href="#fleet">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all">
                    Explore Fleet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
