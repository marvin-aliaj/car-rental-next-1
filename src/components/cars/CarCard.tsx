"use client";
import { FaSuitcase, FaUserFriends } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";

interface CarCardProps {
  car: Car;
  enableHover?: boolean;
}

export default function CarCard({ car, enableHover = false }: CarCardProps) {
  return (
    <div
      className={`md:flex-shrink-0 md:w-1/3 min-w-80 hover:cursor-pointer ${
        enableHover
          ? "transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          : ""
      }`}
    >
      <div
        className="relative w-full rounded-xl overflow-hidden shadow-xl text-white"
        style={{
          backgroundImage: "url('/background-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0" />

        {/* Content */}
        <div className="relative z-10 p-4 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div>
            <h2 className="text-lg font-bold uppercase">
              {car.brand} {car.model}
            </h2>
            <p className="text-sm text-gray-200">{car.year}</p>

            {/* Icons */}
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="flex items-center gap-1 text-sm bg-black/30 px-2 py-1 rounded-md">
                <FaUserFriends /> {car.seats}
              </div>
              <div className="flex items-center gap-1 text-sm bg-black/30 px-2 py-1 rounded-md">
                <FaSuitcase /> {car.bags}
              </div>
              <div className="flex items-center gap-1 text-sm bg-black/30 px-2 py-1 rounded-md">
                <PiEngineFill /> {car.engine}
              </div>
              <div className="flex items-center gap-1 text-sm bg-black/30 px-2 py-1 rounded-md">
                <GiGearStickPattern /> {car.transmission}
              </div>
            </div>
          </div>

          {/* Car Image */}
          <div className="my-4 flex justify-center">
            <img src={car.imageUrl} alt="Car" className="h-30 object-contain" />
          </div>

          {/* Bottom Section */}
          <div className="text-sm">
            <div className="mt-2">
              <span className="text-2xl font-bold">${car.pricePerDay}</span>
              <span className="text-base text-gray-300"> /day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
