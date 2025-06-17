import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateGeneralPhone(phone) {
  // Allows +, numbers, spaces, hyphens, parentheses
  const re = /^[\+\d][\d\s\-\(\)]{7,}$/;
  const digits = phone.replace(/[^\d]/g, "");
  return re.test(phone) && digits.length >= 8 && digits.length <= 15;
}

export const locations = [
  { id: "DR", name: "Durrës" },
  { id: "TIA", name: "Tirana Airport" },
];

export const findLocationByName = (name: string) => {
  return locations.find((x) => x.name === name);
};

export const timeSlots = [
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];
