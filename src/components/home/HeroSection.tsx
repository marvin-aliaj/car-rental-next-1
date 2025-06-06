"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as React from "react";

export default function HeroSection() {
  return (
    <section className="relative -mt-[4rem]">
      <div
        className="h-110 md:h-[600px] bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Find Your Perfect Rental Car
              </h1>
              <p className="text-white text-lg mb-8">
                Best prices guaranteed and exceptional service for your travel
                needs.
              </p>
              <Link href="#booking-form">
                <Button className="btn-primary">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
