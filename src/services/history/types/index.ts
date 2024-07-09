import {Pagination} from "@/common/types";

export type MilestoneType = {
    mileStoneId: number,
    year: number,
    description: string
}

export type MilestonesResponseType = Pagination & {
    items: MilestoneType[]
}

export type MilestonesParamsType = {
    year?: number,
    pageIndex?: number,
    pageSize?: number
}