import { CombinationResponseType } from "@/services/combinations/types";

export function getRandomId (context?: CombinationResponseType) {
    const items = context?.items;
    const length = items?.length || 0;
    return Math.floor(Math.random() * length)
}