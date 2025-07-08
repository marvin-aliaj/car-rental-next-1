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
import { toast } from "sonner";

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
    if (values.pickupDate >= values.returnDate) {
      toast("Pickup Date cannot be bigger than return date", {
        description: "Please provide correct dates to complete the booking.",
      });
      return;
    }
    router.push(
      `/cars?start=${values.pickupDate}&end=${values.returnDate}`,
      // `/cars?pickup=${values.pickupLocation}&start=${values.pickupDate}&end=${values.returnDate}`,
    );
  };

  return (
    <section id="booking-form" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg -mt-16 md:-mt-24 relative z-10 p-6">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">
            Quick Booking
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/*<FormField*/}
                {/*  control={form.control}*/}
                {/*  name="pickupLocation"*/}
                {/*  render={({ field }) => (*/}
                {/*    <FormItem>*/}
                {/*      <FormLabel className="text-sm font-medium text-neutral-700">*/}
                {/*        Pick-up Location*/}
                {/*      </FormLabel>*/}
                {/*      <FormControl>*/}
                {/*        <div className="relative">*/}
                {/*          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">*/}
                {/*            <FaMapMarkerAlt className="text-neutral-500" />*/}
                {/*          </div>*/}
                {/*          <Select*/}
                {/*            onValueChange={field.onChange}*/}
                {/*            defaultValue={field.value}*/}
                {/*          >*/}
                {/*            <SelectTrigger className="pl-10 pr-5 py-2 text-base border-neutral-300">*/}
                {/*              <SelectValue placeholder="Select a location" />*/}
                {/*            </SelectTrigger>*/}
                {/*            <SelectContent>*/}
                {/*              {locations.map((location) => (*/}
                {/*                <SelectItem*/}
                {/*                  key={location.id}*/}
                {/*                  value={location.id.toString()}*/}
                {/*                >*/}
                {/*                  {location.name}*/}
                {/*                </SelectItem>*/}
                {/*              ))}*/}
                {/*            </SelectContent>*/}
                {/*          </Select>*/}
                {/*        </div>*/}
                {/*      </FormControl>*/}
                {/*      <FormMessage />*/}
                {/*    </FormItem>*/}
                {/*  )}*/}
                {/*/>*/}

                <FormField
                  control={form.control}
                  name="pickupDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-700">
                        Pick-up Date
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="date"
                            className="pr-10 py-2 text-base border-neutral-300"
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
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-700">
                        Return Date
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="date"
                            className="pr-10 py-2 text-base border-neutral-300"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="btn-primary">
                  Search Available Cars
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
