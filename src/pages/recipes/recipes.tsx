import {useGetRecipesQuery} from "@/services/recipes";
import {useState} from "react";
import { useScrollListener } from "@/common/hooks";
import { CustomCard, Loader } from "@/components";
import {Alert, Typography} from "antd";
import s from "@/pages/beans/beans.module.scss";

export const Recipes = () => {
    const [pageSize, setPageSize] = useState(20)
    const {data: recipes, isFetching, isLoading, isError } = useGetRecipesQuery({pageSize})

    useScrollListener(setPageSize, pageSize, isFetching)


    return (
        <div>
            {isLoading && <Loader/>}
            <Typography.Title className={s.pageTitle} title="Recipes Page">Recipes Page</Typography.Title>
            <div className={s.container}>
                {recipes?.items?.map(b =>
                    <CustomCard
                        isLoading={isFetching}
                        key={b.recipeId}
                        id={b.recipeId.toString()}
                        title={b.name}
                        imageUrl={b.imageUrl}/>)}
            </div>

            {isError &&
                <Alert message='something went wrong' closable type="error" />
            }
        </div>
    )
}