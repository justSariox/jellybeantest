import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CombinationParamsType, CombinationResponseType, CombinationType } from "@/services/combinations/types";

export const combinationsApi = createApi({
    reducerPath: 'combinationsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jellybellywikiapi.onrender.com/api/',

    }),
    endpoints: builder => {
        return {
            getCombinations: builder.query<CombinationResponseType, CombinationParamsType>({
                query: (params) => ({
                    url: `combinations`,
                    params: params ?? {}
                }),
            }),
            getCombinationById: builder.query<CombinationType, {id?: string}>({
                query: ({id}) => `combinations/${id}`
            })
        }
    },
})

export const { useGetCombinationsQuery, useGetCombinationByIdQuery } = combinationsApi