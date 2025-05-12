"use client";
import Link from "next/link";
// import { Car } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {useState} from "react";

export default function FeaturedCars() {
    const [cars] = useState<Car[]>([]);
    const [isLoading] = useState(false);

    return (
        <section className="py-12 bg-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-neutral-800">Featured Cars</h2>
                    <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                        Choose from our selection of premium vehicles for any occasion, from compact cars to luxury SUVs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        Array(3).fill(0).map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Skeleton className="w-full h-48" />
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Skeleton className="h-6 w-32 mb-2" />
                                            <Skeleton className="h-4 w-24" />
                                        </div>
                                        <div>
                                            <Skeleton className="h-6 w-16" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Skeleton className="h-4 w-full" />
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-10 w-24" />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        cars?.map((car) => (
                            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={car.imageUrl}
                                    alt={`${car.brand} ${car.model}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-800">{car.brand} {car.model}</h3>
                                            <p className="text-neutral-600">{car.category}</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-lg font-bold text-primary">${car.pricePerDay}</span>
                                            <span className="text-sm text-neutral-500">per day</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-sm text-neutral-600">
                                        <div className="flex items-center mr-4">
                                            <i className="fas fa-user-friends mr-1"></i>
                                            <span>{car.seats} Seats</span>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <i className="fas fa-suitcase mr-1"></i>
                                            <span>{car.bags} Bags</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-gas-pump mr-1"></i>
                                            <span>{car.mpg} MPG</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                        <Link href={`/cars/${car.id}`}>
                                            <span className="text-primary font-medium flex items-center">
                                                View Details
                                                <i className="fas fa-chevron-right ml-1 text-xs"></i>
                                            </span>
                                        </Link>
                                        <Link href={`/booking/${car.id}`}>
                                            <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md px-4 py-2 text-center shadow-md transition duration-300 ease-in-out">
                                                Book Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/cars">
                        <Button variant="outline" className="inline-block bg-white hover:bg-neutral-50 text-primary font-medium border border-primary rounded-md px-6 py-3 text-center transition duration-300 ease-in-out">
                            View All Cars
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
