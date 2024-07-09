import s from './history.module.scss'
import { useState } from "react";
import { Alert, Button, Timeline, Typography } from "antd";
import { useGetMilestonesQuery } from "@/services";
import { Loader } from "@/components";
export const History = () => {
    const [pageSize, setPageSize] = useState(10)
    const {data: history, isLoading, isError} = useGetMilestonesQuery({pageSize})
    const milestones = history?.items.map((item) => (
        <Timeline.Item key={item.mileStoneId}>
            <Typography.Text>{item.year} {item.description}</Typography.Text>
        </Timeline.Item>
    ));


    return (
        <div className={s.historyPage}>
            {isLoading && <Loader/>}
            <Typography.Title className={s.pageTitle}>History Page</Typography.Title>
            <Timeline className={s.timeline}>{milestones}</Timeline>
            {pageSize < 30 && (
                <Button className={s.button} onClick={() => setPageSize(pageSize + 10)} type='text'>Read more...</Button>
            )}
            {isError &&
                <Alert message='something went wrong' closable type="error" />
            }
        </div>
    )
}