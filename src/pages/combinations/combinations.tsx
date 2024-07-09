import s from "@/pages/combinations/combinations.module.scss";
import {useState} from "react";
import {Alert, Button, Typography} from "antd";
import { useGetCombinationByIdQuery, useGetCombinationsQuery } from "@/services";
import { getRandomId } from "@/common/utils";
import { Loader } from "@/components";


export const Combinations = () => {
    const [combinationId, setCombinationId] = useState<number>()
    const { data: combinations, isLoading, isError } = useGetCombinationsQuery({pageSize: 100})
    const { data: combination } = useGetCombinationByIdQuery({id: combinationId?.toString()})

    const getRandomCombinationHandler = () => {
        setCombinationId(getRandomId(combinations))
    }

    return (
        <div className={s.combinationsPage}>
            {isLoading && <Loader/>}
            <Typography.Title className={s.pageTitle} title="Combinations Page">Combinations Page</Typography.Title>
            <Button className={s.button} onClick={getRandomCombinationHandler} type="primary">Get random combination!</Button>
            <div className={s.combinationInfo}>
                <p>{combination?.name}</p>
                <p>{combination?.tag}</p>
            </div>

            {isError &&
                <Alert message='something went wrong' closable type="error" />
            }
        </div>
    )
};
