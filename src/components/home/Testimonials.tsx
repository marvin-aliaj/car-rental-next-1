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
        "The service was exceptional! The car was clean, well-maintained, and the pickup process was smooth. I will definitely be renting from AutoRental again.",
      user: {
        id: 1,
        fullName: "Alban Hoxha",
        location: "Saranda, Albania",
      },
    },
    {
      id: 2,
      rating: 4,
      comment:
        "Great selection of vehicles at reasonable prices. The BMW I rented was in perfect condition and made my business trip much more enjoyable. Highly recommend!",
      user: {
        id: 2,
        fullName: "Miguel Gomez",
        location: "Sevilla, Spain",
      },
    },
    {
      id: 3,
      rating: 5,
      comment:
        "The app made booking so easy! I was able to select my car, pay, and arrange pickup all within minutes. The staff was friendly and helpful. Will use again!",
      user: {
        id: 3,
        fullName: "Aurora Ricci",
        location: "Bologna, Italy",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Don&#39;t take our word for it – hear what our satisfied customers
            have to say about their rental experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading
            ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 p-6 rounded-lg shadow-sm"
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
                  className="bg-neutral-50 p-6 rounded-lg shadow-sm"
                >
                  <div className="flex text-warning mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="italic text-neutral-600 mb-4">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center">
                    <button className="p-2 rounded-full hover:bg-neutral-100 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        className="text-neutral-500 text-3xl"
                      />
                    </button>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-neutral-800">
                        {testimonial.user?.fullName}
                      </h4>
                      <p className="text-sm text-neutral-500">
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
