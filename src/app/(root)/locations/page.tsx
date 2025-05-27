"use client";

import { Car, Clock, MapPin, Phone } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Map from "@/components/map";
// import pic from '../../../../public/tirana1.jpg';
const LocationsPage = () => {
  const locations = [
    {
      id: "tirana-airport",
      name: "Mother Teresa Airport (TIA)",
      address: "Rinas, Tirana 1504, Albania",
      hours: "Open 24/7",
      phone: "+355 4 238 1600",
      image: "/tia1.jpg",
      perks: [
        "Airport pickup/dropoff",
        "Free shuttle service",
        "Express check-in",
      ],
    },
    {
      id: "durres",
      name: "Durrës City Center",
      address: "Sheshi Liria, Durrës 2001, Albania",
      hours: "Mon-Sun: 6:00 AM - 11:00 PM",
      phone: "+355 52 238 1600",
      image: "/durres1.jpg",
      perks: ["Downtown location", "Beach proximity", "Long-term discounts"],
    },
  ];
  return (
    <div className="bg-gray-50 -mt-[4rem]">
      {/* Hero Section */}
      {/*<div className="relative bg-gradient-to-r from-primary/90 to-primary/40 h-64 flex items-end pb-4">*/}
      <div
        className="h-100 relative bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: "url('/tirana1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-7xl mx-auto px-4 mt-[4rem] sm:px-6 lg:px-8 w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Our Locations
              </h1>
              <p className="text-white/90 mt-2 max-w-lg">
                Convenient pickup points across Albania with premium service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Location Image */}
              <div className="h-48 relative">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-xl font-bold text-white">
                    {location.name}
                  </h2>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{location.hours}</p>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{location.phone}</p>
                  </div>
                </div>

                {/* Perks */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Location Features
                  </h3>
                  <ul className="space-y-2">
                    {location.perks.map((perk, index) => (
                      <li key={index} className="flex items-center">
                        <Car className="h-4 w-4 text-primary mr-2" />
                        <span className="text-gray-700">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button className="w-full bg-primary hover:cursor-pointer">
                    Book at this location
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-96 w-full bg-gray-200 relative">
            <div className="mt-12 lg:mt-0 lg:w-full flex justify-center">
              <div className="grid w-full">
                <Map />
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-100">
            <h3 className="text-lg font-medium">All Locations Map</h3>
            <p className="text-gray-600 mt-1">
              View our locations in Tirana and Durrës for your convenience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
