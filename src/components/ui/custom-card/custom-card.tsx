import { Button, Card, Skeleton } from "antd";
import s from './custom-card.module.scss'
import { useNavigate } from "react-router-dom";

type Props = {
    id: string,
    title: string,
    imageUrl: string
    isLoading?: boolean
    className?: string
}

export const CustomCard = (props: Props) => {
    const { imageUrl, title, id, isLoading, className } = props
    const navigate = useNavigate()

    return (
        isLoading ? (
            <Card className={`${s.card} ${className}`} hoverable cover={<Skeleton/>}>
                <Skeleton title={true} paragraph={{ rows: 1 }} style={{ textAlign: 'center' }} />
                <Button type='link' style={{ width: '100%' }}>
                    <Skeleton button={true} />
                </Button>
            </Card>
        ) : (
            <Card className={`${s.card} ${className}`} hoverable cover={<img src={imageUrl}/>}>
                <Card.Meta title={title} style={{textAlign: 'center'}}/>
                <Button type='link' style={{width: '100%'}} onClick={() => navigate(`${id}`)}>Read more...</Button>
            </Card>
        )
    )
}