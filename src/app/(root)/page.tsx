"use client";
import HeroSection from "@/components/home/HeroSection";
import BookingForm from "@/components/home/BookingForm";
import FeaturedCars from "@/components/home/FeaturedCars";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import OurLocations from "@/components/home/OurLocations";
import { useStore } from "@/store/useStore";
import { getCars } from "@/lib/actions/rental.actions";
import { toast } from "sonner";
import { useEffect } from "react";

export default function Home() {
  const setGlobalCars = useStore((state) => state.setCars);

  const getCarList = (params?: any) => {
    getCars(params)
      .then((data) => {
        setGlobalCars(data);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  useEffect(() => {
    getCarList({});
  }, []);

  return (
    <>
      <HeroSection />
      <BookingForm />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <OurLocations />
      <FAQ />
      <Newsletter />
    </>
  );
}
