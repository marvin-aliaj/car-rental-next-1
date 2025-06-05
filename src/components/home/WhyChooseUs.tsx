"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCarAlt,
  faClock,
  faDollarSign,
  faHeadset,
  faMapMarkerAlt,
  faMobileAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const features = [
    {
      icon: faCarAlt,
      title: "Premium Fleet",
      description:
        "Drive in style with our modern, well-maintained, and fully-equipped vehicles.",
    },
    {
      icon: faShieldAlt,
      title: "Full Insurance",
      description:
        "Peace of mind with comprehensive coverage included on every rental.",
    },
    {
      icon: faMobileAlt,
      title: "Smart Booking",
      description:
        "Reserve your car in seconds using our user-friendly mobile and web apps.",
    },
    {
      icon: faClock,
      title: "Flexible Pickup",
      description:
        "Pick up and return your vehicle at your convenience — no strict hours.",
    },
  ];

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-900">
            Why Choose Gold Car Rental
          </h2>
          <p className="mt-4 text-lg text-indigo-700 max-w-2xl mx-auto">
            More than just a car rental — we're your partner in premium travel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-amber-400 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto bg-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-amber-300 text-xl"
                />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-indigo-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
