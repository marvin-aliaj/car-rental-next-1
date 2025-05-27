"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/store/useStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGasPump,
  FaSuitcase,
  FaUserFriends,
} from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import CarCard from "@/components/cars/CarCard";

interface CarListProps {
  locationObj?: { id: string; name: string };
  startDate?: string;
  endDate?: string;
  filters?: Record<string, any>;
}

export default function CarList({
  startDate,
  endDate,
  filters = {},
}: CarListProps) {
  const [sortOption, setSortOption] = useState("price-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useStore((state) => state.cars);
  const [isLoading, setIsLoading] = useState(false);
  const carsPerPage = 3; // Number of cars to display per page

  // Construct the query URL with filters
  let queryUrl = "/api/cars";
  const queryParams = new URLSearchParams();

  if (filters.type) queryParams.append("type", filters.type);
  if (filters.minPrice)
    queryParams.append("minPrice", filters.minPrice.toString());
  if (filters.maxPrice)
    queryParams.append("maxPrice", filters.maxPrice.toString());
  if (filters.seats) queryParams.append("seats", filters.seats.toString());

  const queryString = queryParams.toString();
  if (queryString) queryUrl += `?${queryString}`;

  // const { data: cars, isLoading } = useQuery<Car[]>({
  //   queryKey: [queryUrl],
  // });

  // Sort the cars based on the selected sort option
  const sortedCars = [...(cars || [])].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return Number(a.pricePerDay) - Number(b.pricePerDay);
      case "price-desc":
        return Number(b.pricePerDay) - Number(a.pricePerDay);
      default:
        return 0;
    }
  });

  // Calculate pagination values
  const totalCars = sortedCars.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);

  // Get current cars for this page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  let currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);

  if (filters) {
    if (filters.location) {
      currentCars = sortedCars.filter(
        (car) => car.location === filters.location,
      );
    }

    if (filters.minPrice !== undefined) {
      currentCars = currentCars.filter(
        (car) => Number(car.pricePerDay) >= filters.minPrice!,
      );
    }

    if (filters.maxPrice !== undefined) {
      currentCars = currentCars.filter(
        (car) => Number(car.pricePerDay) <= filters.maxPrice!,
      );
    }

    if (filters.seats) {
      switch (filters.seats) {
        case "2":
          currentCars = currentCars.filter((car) => car.seats <= 4);
          break;
        case "5":
          currentCars = currentCars.filter(
            (car) => Number(car.seats) > 4 && Number(car.seats) <= 6,
          );
          break;
        case "7":
          currentCars = currentCars.filter((car) => Number(car.seats) >= 7);
          break;
      }
    }

    if (filters.transmission) {
      currentCars = currentCars.filter(
        (car) => car.transmission === filters.transmission,
      );
    }

    if (filters.fuelType) {
      currentCars = currentCars.filter(
        (car) => car.fuelType === filters.fuelType,
      );
    }
  }

  // Change page
  const goToPage = (pageNumber: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  // Previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-8 lg:mt-0 lg:col-span-9">
      <div className="flex justify-between items-center mb-6">
        {/*<h2 className="text-2xl font-bold text-neutral-800">Available Cars</h2>*/}
        <div className="flex items-center gap-2">
          <p className="text-sm text-neutral-600 whitespace-nowrap">Sort by:</p>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="text-sm border-neutral-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <Skeleton className="h-48 w-full md:h-full" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="md:flex md:justify-between md:items-start">
                      <div>
                        <Skeleton className="h-4 w-16 mb-2" />
                        <Skeleton className="h-6 w-48 mb-1" />
                        <Skeleton className="h-4 w-32 mb-3" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <Skeleton className="h-6 w-24 mb-1" />
                        <Skeleton className="h-4 w-32 mb-4" />
                        <Skeleton className="h-10 w-28" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        ) : sortedCars.length === 0 || currentCars.length === 0 ? (
          <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-neutral-800 mb-2">
              No cars available
            </h3>
            <p className="text-neutral-600 mb-4">
              Try adjusting your filters or selecting a different location.
            </p>
          </div>
        ) : (
          currentCars.map((car) => (
            <div
              key={car.id}
              className="bg-white border border-neutral-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="md:flex">
                <CarCard car={car} />
                <div className="md:w-2/3 ">
                  <div className="p-6 md:flex md:justify-between md:items-start">
                    <div>
                      <div className="uppercase tracking-wide text-xs text-secondary font-semibold">
                        {car.type}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800">
                        {car.brand} {car.model}
                      </h3>
                      <p className="text-neutral-600 mt-1">{car.category}</p>

                      <div className="mt-3 flex flex-wrap items-center text-sm text-neutral-600">
                        <div className="flex items-center mr-4 mb-2">
                          <FaUserFriends className="mr-1" />
                          <span>{car.seats} Seats</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                          <FaSuitcase className="mr-1" />
                          <span>{car.bags} Bags</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                          <FaGasPump className="mr-1" />
                          <span>{car.lkm} l/100km</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <GiGearStickPattern className="mr-1" />
                          <span>{car.transmission}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center">
                          <div className="flex text-warning">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                          </div>
                          <span className="ml-2 text-sm text-neutral-600">
                            4.5 (52 reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">
                          ${car.pricePerDay}
                        </span>
                        <span className="text-sm text-neutral-500">/day</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Free Cancellation
                      </p>
                      <Link
                        href={`/booking/${car.id}?start=${startDate}&end=${endDate}`}
                      >
                        <Button className="mt-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-md px-6 py-2 text-center shadow-sm transition duration-300 ease-in-out">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="px-6 hidden md:block">
                    {car.description && (
                      <p className=" text-sm text-neutral-600 max-w-full">
                        {car.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 px-6 flex flex-wrap gap-2">
                    {car.features?.split(",").map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-neutral-600 text-xs rounded-full"
                      >
                        {feature.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {!isLoading && sortedCars.length > 0 && (
        <div className="mt-8 flex justify-center">
          <nav
            className="inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium ${
                currentPage === 1
                  ? "text-neutral-300 cursor-not-allowed"
                  : "text-neutral-500 hover:bg-neutral-50 cursor-pointer"
              }`}
            >
              <span className="sr-only">Previous</span>
              <FaChevronLeft className="h-5 w-5" />
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => goToPage(number)}
                className={`relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium ${
                  currentPage === number
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium ${
                currentPage === totalPages
                  ? "text-neutral-300 cursor-not-allowed"
                  : "text-neutral-500 hover:bg-neutral-50 cursor-pointer"
              }`}
            >
              <span className="sr-only">Next</span>
              <FaChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
