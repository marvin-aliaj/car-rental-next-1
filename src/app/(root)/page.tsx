"use client";
import HeroSection from "@/components/home/HeroSection";
import BookingForm from "@/components/home/BookingForm";
import FeaturedCars from "@/components/home/FeaturedCars";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import DownloadApp from "@/components/home/DownloadApp";

export default function Home() {
    return (
        <>
            <HeroSection />
            <BookingForm />
            <FeaturedCars />
            <WhyChooseUs />
            <Testimonials />
            <DownloadApp />
            <FAQ />
            <Newsletter />
        </>
    );
}
