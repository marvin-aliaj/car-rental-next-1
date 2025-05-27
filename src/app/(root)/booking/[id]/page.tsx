"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { z } from "zod";
import { toast } from "sonner";
import BookingCalendar from "@/components/booking/BookingCalendar";
import CarDetails from "@/components/booking/CarDetails";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import { differenceInDays } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/store/useStore";
import { locations } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { FaInfoCircle } from "react-icons/fa";

export default function Booking() {
  const cars = useStore((state) => state.cars);
  const [car, setCar] = useState<Car | null>(null);
  const [searchParams, setSearchParams] = useState(null);
  const params = useParams();
  const carId = params.id;

  const router = useRouter();

  const initialLocationId = searchParams?.get("locationId");
  const initialStartDate = searchParams?.get("start");
  const initialEndDate = searchParams?.get("end");

  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    initialLocationId ? initialLocationId : null,
  );

  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>(() => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const from = initialStartDate ? new Date(initialStartDate) : now;
    const to = initialEndDate ? new Date(initialEndDate) : tomorrow;

    return { from, to };
  });

  // Add customer information state for guest bookings
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
  }, []);

  useEffect(() => {
    if (carId && cars?.length > 0) {
      const car = cars.find((car: Car) => car.id == carId);
      setCar(car);
    } else {
      console.log("Car not found");
    }
  }, [carId, cars]);
  //
  // export const insertBookingSchema = createInsertSchema(bookings).pick({
  //   userId: true,
  //   carId: true,
  //   pickupLocationId: true,
  //   returnLocationId: true,
  //   pickupDate: true,
  //   returnDate: true,
  //   totalPrice: true,
  //   status: true,
  // });

  const insertBookingSchema = z.object({
    userId: z.number(),
    carId: z.number(),
    pickupLocationId: z
      .string()
      .min(1, { message: "Please select a pickup location" }),
    returnLocationId: z
      .string()
      .min(1, { message: "Please select a return location" }),
    pickupDate: z.string().min(1, { message: "Please select a pickup date" }),
    returnDate: z.string().min(1, { message: "Please select a return date" }),
    totalPrice: z.number(),
    status: z.string(),
  });

  // const bookingMutation = useMutation({
  //   mutationFn: async (bookingData: z.infer<typeof insertBookingSchema>) => {
  //     const response = await apiRequest("POST", "/api/bookings", bookingData);
  //     return response.json();
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
  //     // toast({
  //     //   title: "Booking confirmed!",
  //     //   description: "Your car has been successfully booked.",
  //     // });
  //     toast.success("Booking confirmed!");
  //     router.push("/booking-success");
  //   },
  //   onError: (error) => {
  //     toast.error("Booking failed");
  //   },
  // });

  const handleDateRangeChange = (range: { from: Date; to: Date }) => {
    setDateRange(range);
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocationId(value);
  };

  const handleSubmitBooking = () => {
    if (!selectedLocationId || !carId) {
      toast("Incomplete details", {
        description: "Please select a pickup location to continue.",
      });
      return;
    }

    if (!customerInfo.fullName || !customerInfo.email) {
      toast("Customer information required", {
        description:
          "Please provide your contact information to complete the booking.",
      });
      return;
    }

    const days = differenceInDays(dateRange.to, dateRange.from) || 1;
    const pricePerDay = car?.pricePerDay || 0;
    const totalPrice = days * Number(pricePerDay) * 1.0825; // Adding tax

    // Since we're not using authentication, we'll use a default user ID (1)
    const bookingData = {
      userId: 1, // Default guest user ID
      carId: carId,
      pickupLocationId: selectedLocationId,
      returnLocationId: selectedLocationId, // Same location for now
      pickupDate: dateRange.from,
      returnDate: dateRange.to,
      totalPrice: totalPrice.toString(), // Convert to string as required by the schema
      status: "pending",
    };

    console.log(bookingData);

    // bookingMutation.mutate(bookingData);
  };

  if (cars.length === 0) {
    return Array(3)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
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
      ));
  }
  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">
          Car Not Found
        </h2>
        <p className="text-neutral-600 mb-6">
          The car you are trying to book is not available.
        </p>
        <Button onClick={() => router.push("/cars")}>
          View Available Cars
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-800 mb-2">
              Complete Your Booking
            </h1>
            <p className="text-neutral-600">
              Follow the steps below to book your car.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Select Location */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium text-neutral-800 mb-4">
                    Select Pickup Location
                  </h2>
                  {locations && locations.length > 0 ? (
                    <Select
                      value={selectedLocationId?.toString()}
                      onValueChange={handleLocationChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem
                            key={location.id}
                            value={location.id.toString()}
                          >
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="text-neutral-600">Loading locations...</p>
                  )}
                </CardContent>
              </Card>

              {/* Select Dates */}
              <BookingCalendar
                onRangeChange={handleDateRangeChange}
                startDate={initialStartDate}
                endDate={initialEndDate}
              />

              {/* Car Details */}
              <CarDetails car={car} />

              {/* Customer Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium text-neutral-800 mb-4">
                    Your Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="John Doe"
                        value={customerInfo.fullName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setCustomerInfo({
                            ...customerInfo,
                            fullName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={customerInfo.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setCustomerInfo({
                            ...customerInfo,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        value={customerInfo.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setCustomerInfo({
                            ...customerInfo,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Summary */}
            <div className="lg:col-span-4">
              {selectedLocationId ? (
                <BookingConfirmation
                  car={car}
                  locationId={selectedLocationId}
                  dateRange={dateRange}
                  onSubmit={handleSubmitBooking}
                />
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-neutral-800 mb-4">
                      Booking Summary
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Please select a pickup location to continue.
                    </p>
                    <p className="text-neutral-600">
                      <FaInfoCircle className="mr-2 text-primary" />
                      Complete the required information on the left to proceed
                      with your booking.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
