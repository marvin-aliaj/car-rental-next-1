"use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import * as React from "react"

export default function HeroSection() {
  return (
      <section className="relative -mt-[4rem]">
          <div
              className="h-110 md:h-[600px] bg-cover bg-fixed bg-center"
              style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
              }}
          >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
              <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                      <div className="max-w-lg">
                          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Your Perfect Rental
                              Car</h1>
                          <p className="text-white text-lg mb-8">Best prices guaranteed and exceptional service for your
                              travel needs.</p>
                          <Link href="#booking-form">
                              <Button className="btn-primary">
                                  Book Now
                              </Button>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}


{/*<div*/}
{/*  className="h-96 md:h-[500px] bg-cover bg-center"*/}
{/*  style={{*/}
{/*    backgroundImage: "url('/background-img.png')"*/}
{/*  }}*/}
{/*>*/}
{/*  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>*/}
{/*  <div className="relative h-full flex items-center">*/}
{/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">*/}
{/*      <div className="max-w-lg">*/}
{/*        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Your Perfect Rental Car</h1>*/}
{/*        <p className="text-white text-lg mb-8">Best prices guaranteed and exceptional service for your travel needs.</p>*/}
{/*        <Link href="#booking-form">*/}
{/*          <Button className="btn-primary">*/}
{/*            Book Now*/}
{/*          </Button>*/}
{/*        </Link>*/}
{/*      </div>*/}
{/*    </div>*/}
{/*  </div>*/}
{/*</div>*/}





//save for future websites
// <div className="relative bg-gray-900 text-white overflow-hidden">
//     {/* Background image with overlay */}
//     <div className="absolute inset-0">
//         <img
//             src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
//             alt="Mercedes B-Class"
//             className="w-full h-full object-cover opacity-50"
//         />
//     </div>
//
//     <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Car info section */}
//             <div>
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                     <span className="text-blue-400">Mercedes</span> B-Class
//                 </h1>
//                 <p className="text-xl mb-6">Luxury, comfort, and performance in a compact package</p>
//
//                 <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mb-8">
//                     <div className="flex justify-between items-center mb-4">
//                         <span className="text-2xl font-bold">2015 Model</span>
//                         <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Available</span>
//                     </div>
//                     <div className="text-3xl font-bold text-blue-400 mb-2">€40 <span className="text-lg text-gray-300">/ day</span></div>
//                     <div className="flex space-x-4 text-sm text-gray-300">
//                         <span>5 Seats</span>
//                         <span>Automatic</span>
//                         <span>Air Conditioning</span>
//                     </div>
//                 </div>
//
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
//                     Book Now
//                 </button>
//             </div>
//
//             {/* Booking form section */}
//             <div className="bg-white bg-opacity-90 rounded-xl p-6 shadow-xl">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Booking</h2>
//
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-gray-700 font-medium mb-1">Pick-up Location</label>
//                         <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                             <option>Durrës</option>
//                             <option>Tirana</option>
//                             <option>Vlorë</option>
//                         </select>
//                     </div>
//
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-gray-700 font-medium mb-1">Pick-up Date</label>
//                             <input
//                                 type="date"
//                                 defaultValue="2025-05-20"
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700 font-medium mb-1">Return Date</label>
//                             <input
//                                 type="date"
//                                 defaultValue="2025-05-21"
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                             />
//                         </div>
//                     </div>
//
//                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 mt-4">
//                         Search Available Cars
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
//
//     {/* Decorative elements */}
//     <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
// </div>

















//carousel solution
// <section className="relative w-full overflow-hidden">
//     <div
//         className="grid grid-cols-1 h-4/5 sm:h-1/2 md:h-1/2 bg-cover bg-center"
//         style={{
//             backgroundImage: "url('/background-img.png')",
//             backgroundPosition: "center 30%"
//         }}
//     >
//         <div className="relative h-full flex items-center justify-center bg-gradient-to-t from-black/40 to-black/20">
//             <Carousel className="w-full max-w-[1800px] mx-auto">
//                 <CarouselContent>
//                     {cars.map((car, index) => (
//                         <CarouselItem key={index} className="basis-full lg:px-20">
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
//                                 {/* Text Content */}
//                                 <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
//                                     <div className="max-w-md w-full">
//                                         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
//                                             {car.brand} {car.model}
//                                         </h1>
//                                         <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
//                                             {car.year}
//                                         </p>
//
//                                         {/* Features Grid */}
//                                         <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 sm:mb-6 md:mb-8">
//                                             {[
//                                                 { icon: <FaUserFriends className="text-xs sm:text-sm" />, value: car.seats },
//                                                 { icon: <FaSuitcase className="text-xs sm:text-sm" />, value: car.bags },
//                                                 { icon: <PiEngineFill className="text-xs sm:text-sm" />, value: car.engine },
//                                                 { icon: <GiGearStickPattern className="text-xs sm:text-sm" />, value: car.transmission }
//                                             ].map((item, i) => (
//                                                 <div key={i} className="flex items-center gap-1 text-xs sm:text-sm bg-black/30 px-2 sm:px-3 py-1 sm:py-2 rounded-md">
//                                                     <span className="text-white">{item.icon}</span>
//                                                     <span className="text-white">{item.value}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//
//                                         {/* Price */}
//                                         <div className="mt-2 sm:mt-4">
//                               <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold">
//                                 ${car.pricePerDay}
//                               </span>
//                                             <span className="text-sm sm:text-base text-gray-300 ml-1">
//                                 /day
//                               </span>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 {/* Car Image */}
//                                 <div className="flex justify-center items-center h-48 sm:h-64 md:h-72 lg:h-80">
//                                     <img
//                                         src={car.imageUrl}
//                                         alt={`${car.brand} ${car.model}`}
//                                         className="h-40 sm:h-56 md:h-64 lg:h-72 xl:h-75 object-contain transition-transform duration-300 hover:scale-105"
//                                     />
//                                 </div>
//                             </div>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//
//                 {/* Navigation Arrows */}
//                 <CarouselPrevious className="left-2 h-8 w-8 sm:h-10 sm:w-10" />
//                 <CarouselNext className="right-2 h-8 w-8 sm:h-10 sm:w-10" />
//             </Carousel>
//         </div>
//     </div>
// </section>
