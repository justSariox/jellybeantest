import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BeansParamsType, BeansRepsonseType, BeanType } from "@/services/beans/types";

export const beansApi = createApi({
    reducerPath: 'beansApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jellybellywikiapi.onrender.com/api/',

    }),
    endpoints: builder => {
        return {
            getBeans: builder.query<BeansRepsonseType, BeansParamsType>({
                query: (params) => ({
                    url: 'Beans',
                    params: params ?? {}
                }),
            }),
            getBeanById: builder.query<BeanType, {id?: string}>({
                query: ({id}) => `Beans/${id}`
            })
        }
    },
})

export const { useGetBeansQuery, useGetBeanByIdQuery } = beansApi