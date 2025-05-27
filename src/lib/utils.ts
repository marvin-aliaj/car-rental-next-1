import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const locations = [
  { id: "DR", name: "Durrës" },
  { id: "TIA", name: "Tirana Airport" },
];

export const findLocationByName = (name: string) => {
  return locations.find((x) => x.name === name);
};
