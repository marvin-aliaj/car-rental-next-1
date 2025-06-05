"use client";
import { FaGasPump, FaSuitcase, FaUserFriends } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";
import { RiSuitcase2Fill } from "react-icons/ri";

interface CarCardProps {
  car: Car;
  enableHover?: boolean;
}

export default function CarCard({ car, enableHover = false }: CarCardProps) {
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl shadow-lg ${
        enableHover
          ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          className="h-48 transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Top Badge */}
        <div className="absolute top-3 left-3 bg-white/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
          ${car.pricePerDay}
          <span className="text-gray-500">/day</span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-5">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900">
            {car.brand} {car.model}
          </h3>
          <p className="text-gray-500 text-sm">{car.year}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-700">
            <FaUserFriends className="mr-2 text-blue-500" />
            <span className="text-sm">{car.seats} Seats</span>
          </div>
          <div className="flex items-center text-gray-700">
            <RiSuitcase2Fill className="mr-2 text-blue-500" />
            <span className="text-sm">{car.bags} Bags</span>
          </div>
          <div className="flex items-center text-gray-700">
            <GiGearStickPattern className="mr-2 text-blue-500" />
            <span className="text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaGasPump className="mr-2 text-blue-500" />
            <span className="text-sm">{car.fuelType}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full py-2 rounded-lg font-medium transition-colors ${
            enableHover
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          Rent Now
        </button>
      </div>

      {/* Floating Favorite Button */}
      <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600 hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  );
}
