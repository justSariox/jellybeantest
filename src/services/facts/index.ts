import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FactsParamsType, FactsResponseType, FactType } from "@/services/facts/types";

export const factsApi = createApi({
    reducerPath: 'factsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jellybellywikiapi.onrender.com/api/',

    }),
    endpoints: builder => {
        return {
            getFacts: builder.query<FactsResponseType, FactsParamsType>({
                query: (params) => ({
                    url: 'Facts',
                    params: params ?? {}
                }),

            }),
            getFactById: builder.query<FactType, {id?: string}>({
                query: ({id}) => `Facts/${id}`
            })
        }
    },
})

export const { useGetFactsQuery, useGetFactByIdQuery } = factsApi