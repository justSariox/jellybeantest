import {Pagination} from "@/common/types";

export type RecipeType = {
    recipeId: number;
    name: string;
    description: string;
    prepTime: string;
    cookTime: string;
    totalTime: string;
    makingAmount: string;
    imageUrl: string;
    ingredients: string[];
    additions1: string[];
    additions2: string[];
    additions3: string[];
    directions: string[];
    tips: string[];
}

export type RecipesResponseType = Pagination & {
    items: RecipeType[]
}

export type RecipeParamsType = {
    name: string
    pageIndex: number,
    pageSize: number
}