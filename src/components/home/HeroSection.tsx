"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative">
      <div 
        className="h-96 md:h-[500px] bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Your Perfect Rental Car</h1>
              <p className="text-white text-lg mb-8">Best prices guaranteed and exceptional service for your travel needs.</p>
              <Link href="#booking-form">
                <span className="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium rounded-md px-6 py-3 text-center shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Book Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
