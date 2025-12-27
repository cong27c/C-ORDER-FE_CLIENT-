import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSearchParams = () => {
  const getParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(getParams.entries());
  return params;
};
