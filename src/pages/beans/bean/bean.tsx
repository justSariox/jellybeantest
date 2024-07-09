import s from './bean.module.scss'
import { useNavigate, useParams } from "react-router-dom";
import {Alert, Button, Descriptions, DescriptionsProps, Image, Typography} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import { useGetBeanByIdQuery } from "@/services";
import { Loader } from "@/components";

export const Bean = () => {
    const { beanId} = useParams()
    const navigate = useNavigate()
    const {data: bean, isLoading, isError } = useGetBeanByIdQuery({id: beanId})
    console.log(bean)

    const items: DescriptionsProps['items'] = [
        {
            key: 1,
            label: 'title',
            children: bean?.flavorName
        },
        {
            key: 2,
            label: 'colorGroup',
            children: bean?.colorGroup
        },
        {
            key: 3,
            label: 'glutenFree',
            children: bean?.glutenFree ? "+" : "-"
        },
        {
            key: 4,
            label: 'kosher',
            children: bean?.kosher ? "+" : "-"
        },
        {
            key: 5,
            label: 'seasonal',
            children: bean?.seasonal ? "+" : "-"
        },
        {
            key: 6,
            label: 'sugarFree',
            children: bean?.sugarFree ? "+" : "-"
        },
        {
            key: 7,
            label: 'ingredients',
            children: bean?.ingredients ? (<ul>{bean?.ingredients.map(i => <li>{i}</li>)}</ul>) : '-'
        }
    ]

    return (
        <div>
            {isLoading && <Loader/>}
            <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/beans')}></Button>

            <Typography.Title className={s.pageTitle}>{bean?.flavorName}</Typography.Title>
            <div className={s.content}>
                <div className={s.info}>
                    <Typography.Title>{bean?.flavorName}</Typography.Title>
                    <Image src={bean?.imageUrl}></Image>
                    <Typography.Paragraph>{bean?.description}</Typography.Paragraph>
                </div>
                <div className={s.description}>
                    <Descriptions size="middle" title={bean?.flavorName} items={items}/>
                </div>
            </div>
            {isError &&
                <Alert message='something went wrong' closable type="error" />
            }
        </div>
    )
}