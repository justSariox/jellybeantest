import {Pagination} from "@/common/types";

export type CombinationType = {
    combinationId?: number,
    name: string,
    tag: string[]
}

export type CombinationResponseType = Pagination & {
    items: CombinationType[]
}

export type CombinationParamsType = {
    name: string,
    pageIndex: number,
    pageSize: number
}