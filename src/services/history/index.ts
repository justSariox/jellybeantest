import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {MilestonesParamsType, MilestonesResponseType, MilestoneType} from "@/services/history/types";

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jellybellywikiapi.onrender.com/api/',

    }),
    endpoints: builder => {
        return {
            getMilestones: builder.query<MilestonesResponseType, MilestonesParamsType>({
                query: (params) => ({
                    url: `milestones`,
                    params: params ?? {}
                }),
            }),
            getMilestoneById: builder.query<MilestoneType, {id?: string}>({
                query: ({id}) => `milestones/${id}`
            })
        }
    },
})

export const { useGetMilestonesQuery } = historyApi