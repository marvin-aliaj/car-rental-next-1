"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

interface BookingCalendarProps {
  onRangeChange: (range: { from: Date; to: Date }) => void;
  startDate: Date;
  endDate: Date;
}

export default function BookingCalendar({
  onRangeChange,
  startDate,
  endDate,
}: BookingCalendarProps) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    console.log(startDate);
  }, []);

  const [date, setDate] = useState<{
    from: Date;
    to: Date;
  }>({
    from: startDate ? startDate : today,
    to: endDate ? endDate : tomorrow,
  });

  const handleSelect = (range: { from?: Date; to?: Date }) => {
    if (range.from && range.to) {
      setDate({ from: range.from, to: range.to });
      onRangeChange({ from: range.from, to: range.to });
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-neutral-800">
            Select Rental Dates
          </h3>
          <div className="text-neutral-600 text-sm">
            {date.from && date.to && (
              <span>
                {format(date.from, "MMM dd, yyyy")} -{" "}
                {format(date.to, "MMM dd, yyyy")}
              </span>
            )}
          </div>
        </div>
        <Calendar
          mode="range"
          selected={date}
          onSelect={handleSelect}
          numberOfMonths={2}
          disabled={{ before: today }}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}
