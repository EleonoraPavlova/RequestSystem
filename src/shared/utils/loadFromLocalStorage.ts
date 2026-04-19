import { RequestCard } from "@/shared/types";

export const loadFromLocalStorage = (): RequestCard[] => {
  try {
    const saved = localStorage.getItem("my_requests");
    if (!saved) return [];
    return JSON.parse(saved);
  } catch (error) {
    console.error("Could not load requests", error);
    return [];
  }
};
