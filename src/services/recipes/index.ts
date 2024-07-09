import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RecipeParamsType, RecipesResponseType, RecipeType } from "@/services/recipes/types";

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jellybellywikiapi.onrender.com/api/',

    }),
    endpoints: builder => {
        return {
            getRecipes: builder.query<RecipesResponseType, RecipeParamsType>({
                query: (params) => ({
                    url: 'recipes',
                    params: params ?? {},
                }) ,
            }),
            getRecipeById: builder.query<RecipeType, {id?: string}>({
                query: ({id}) => `recipes/${id}`
            })
        }
    },
})

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = recipesApi