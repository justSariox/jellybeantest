import {Pagination} from "@/common/types";

export type FactType = {
    factId: number;
    title: string;
    description: string
}

export type FactsResponseType = Pagination & {
    items: FactType[]
}

export type FactsParamsType = {
    title: string,
    pageIndex: number,
    pageSize: number
}