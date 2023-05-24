import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// get main domain
export const getMainDomain = (url: string) => {
    const domain = url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
    return domain;
}