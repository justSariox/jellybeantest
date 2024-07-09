import s from "@/pages/facts/facts.module.scss";
import {useState} from "react";
import { Alert, Typography } from "antd";
import { useGetFactsQuery } from "@/services";
import { useScrollListener } from "@/common/hooks";
import { CustomCard, Loader } from "@/components";

export const Facts = () => {
    const [pageSize, setPageSize] = useState(5)
    const {data: facts, isFetching, isLoading, isError } = useGetFactsQuery({pageSize})

    useScrollListener(setPageSize, pageSize, isFetching)


    return (
        <div style={{minHeight: '1100px'}}>
            {isLoading && <Loader/>}
            <Typography.Title className={s.pageTitle} title="Facts Page">Facts Page</Typography.Title>
            <div className={s.container}>
                {facts?.items?.map(b =>
                    <CustomCard
                        isLoading={isFetching}
                        key={b.factId}
                        id={b.factId}
                        title={b.title}
                        imageUrl={b.imageUrl}
                        className={s.factCard}
                    />
                )}
            </div>

            {isError &&
                <Alert message='something went wrong' closable type="error"/>
            }

        </div>
    )

};
