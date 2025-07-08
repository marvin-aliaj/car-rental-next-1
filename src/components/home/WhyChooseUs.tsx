"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faDollarSign,
  faHeadset,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const features = [
    {
      icon: faCar,
      title: "Wide Selection",
      description:
        "Choose from our extensive fleet of vehicles for any occasion or budget.",
    },
    {
      icon: faDollarSign,
      title: "Best Rates",
      description:
        "Competitive pricing with no hidden fees. We guarantee the best rates.",
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      description:
        "Our customer service team is available round the clock to assist you.",
    },
    {
      icon: faMapMarkerAlt,
      title: "Convenient Locations",
      description:
        "Located directly at the airport, our service ensures fast pick-up and drop-off with no hassle.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800">
            Why Choose Gold Car Rental
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            🚗 We offer a wide selection of well-maintained, automatic
            transmission vehicles, perfect for business trips, vacations, or
            everyday travel.
            <br />
            📍Located directly at the airport, our service ensures fast pick-up
            and drop-off with no hassle. Choose from compact cars, SUVs, or
            premium models – all clean, comfortable, and fuel-efficient. <br />
            With competitive prices, 24/7 customer support, and flexible rental
            terms, we make your travel easy and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  className={`text-white text-2xl`}
                  icon={feature.icon}
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
