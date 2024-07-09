import {Pagination} from "@/common/types";


export type BeanType = {
    beanId: number;
    groupName: string[];
    ingredients: string[];
    flavorName: string;
    description: string;
    colorGroup: string;
    backgroundColor: string;
    imageUrl: string;
    glutenFree: boolean;
    sugarFree: boolean;
    seasonal: boolean;
    kosher: boolean;
}

export type BeansRepsonseType = Pagination & {
    items: BeanType[]
}

export type BeansParamsType = {
    pageSize?: number,
    groupName?: string[],
    flavorName?: string,
    colorGroup?: string,
    glutenFree?: boolean,
    sugarFree?: boolean,
    seasonal?: boolean,
    kosher?: boolean,
    pageIndex?: number,

}