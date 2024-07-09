import s from './beans.module.scss'
import {useGetBeansQuery} from "@/services/beans";
import {CustomCard} from "@/components/ui/custom-card/custom-card.tsx";
import {useState} from "react";
import {useScrollListener} from "@/common/hooks";
import {Alert, Typography} from "antd";
import {Loader} from "@/components/ui/loader";


export const Beans = () => {
    const [pageSize, setPageSize] = useState(20)
    const {data: beans, isFetching, isLoading, isError } = useGetBeansQuery({pageSize})

    useScrollListener(setPageSize, pageSize, isFetching)





    return (
        <div >
            {isLoading && <Loader/>}
            <Typography.Title className={s.pageTitle} title="Beans Page">Beans Page</Typography.Title>
            <div className={s.container}>
                {beans?.items?.map(b =>
                    <CustomCard
                        isLoading={isFetching}
                        key={b.beanId}
                        id={b.beanId.toString()}
                        title={b.flavorName}
                        imageUrl={b.imageUrl}/>)}
            </div>

                {isError &&
                    <Alert message='something went wrong' closable type="error" />
                }

        </div>
    )
}