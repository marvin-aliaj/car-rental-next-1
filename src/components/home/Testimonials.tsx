"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const [reviews] = useState<Review[]>([]);
  const [isLoading] = useState(false);

  // Sample testimonials to use if no reviews are fetched yet
  const sampleTestimonials = [
    {
      id: 1,
      rating: 5,
      comment:
        "Fantastic experience from start to finish. The car was spotless and ran like new. The team went above and beyond to make the process stress-free.",
      user: {
        id: 1,
        fullName: "Elira Dervishi",
        location: "Tirana, Albania",
      },
    },
    {
      id: 2,
      rating: 4,
      comment:
        "Efficient service and a smooth rental process. The vehicle matched the listing exactly and staff were professional. Just wish pickup was a bit quicker.",
      user: {
        id: 2,
        fullName: "James Bennett",
        location: "Manchester, UK",
      },
    },
    {
      id: 3,
      rating: 5,
      comment:
        "Loved the convenience of booking online and picking up right at the airport. Prices were fair and the car performed great throughout our trip.",
      user: {
        id: 3,
        fullName: "Sofia Müller",
        location: "Munich, Germany",
      },
    },
  ];

  const testimonialsToShow = reviews?.length ? reviews : sampleTestimonials;

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      }
    }
    return stars;
  };

  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-indigo-700 max-w-2xl mx-auto">
            Don’t just take our word for it — see how we’ve made a difference
            for our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white border-t-4 border-amber-400 p-6 rounded-xl shadow-md"
                  >
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-16 w-full mb-4" />
                    <div className="flex items-center">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="ml-3">
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                  </div>
                ))
            : testimonialsToShow.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white border-t-4 border-amber-400 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex text-amber-500 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="italic text-indigo-800 mb-5 text-sm">
                    “{testimonial.comment}”
                  </p>
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        className="text-indigo-500 text-xl"
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold text-indigo-900">
                        {testimonial.user?.fullName}
                      </h4>
                      <p className="text-sm text-indigo-600">
                        {testimonial.user?.location || "Happy Customer"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
