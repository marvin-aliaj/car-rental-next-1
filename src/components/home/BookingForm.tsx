"use client";
import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const searchSchema = z.object({
  pickupDate: z.string().min(1, { message: "Please select a pickup date" }),
  returnDate: z.string().min(1, { message: "Please select a return date" }),
});

type SearchFormValues = z.infer<typeof searchSchema>;

export default function BookingForm() {
  const router = useRouter();
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      pickupDate: "",
      returnDate: "",
    },
  });

  useEffect(() => {
    // Set default dates (today and tomorrow)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    form.setValue("pickupDate", formatDateForInput(today));
    form.setValue("returnDate", formatDateForInput(tomorrow));
  }, [form]);

  const formatDateForInput = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const onSubmit = (values: SearchFormValues) => {
    // Navigate to cars page with search parameters
    router.push(
      `/cars?start=${values.pickupDate}&end=${values.returnDate}`,
      // `/cars?pickup=${values.pickupLocation}&start=${values.pickupDate}&end=${values.returnDate}`,
    );
  };

  return (
    <section id="booking-form" className="py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl -mt-24 relative z-10 p-8 border border-indigo-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">
              Start Your Journey
            </h2>
            <p className="text-indigo-700">
              Reserve your perfect vehicle in just a few clicks
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="pickupDate"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-indigo-800">
                        Pick-up Date
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="date"
                            className="bg-white border-indigo-200 focus:border-indigo-400 rounded-lg py-3 px-4 text-indigo-900 shadow-sm"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="returnDate"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-indigo-800">
                        Return Date
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="date"
                            className="bg-white border-indigo-200 focus:border-indigo-400 rounded-lg py-3 px-4 text-indigo-900 shadow-sm"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-end">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
                  >
                    Find Vehicles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
