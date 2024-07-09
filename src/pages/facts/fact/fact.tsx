import s from "@/pages/facts/fact/fact.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Typography } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useGetFactByIdQuery } from "@/services";
import { Loader } from "@/components";
export const Fact = () => {
    const { factId} = useParams()
    const navigate = useNavigate()
    const {data: fact, isLoading, isError } = useGetFactByIdQuery({id: factId})

    return (
        <div>
            {isLoading && <Loader/>}
            <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/facts')}></Button>
            <Typography.Title className={s.pageTitle}>{fact?.title}</Typography.Title>
            <Typography.Paragraph className={s.pageTitle}>{fact?.description}</Typography.Paragraph>
            {isError &&
                <Alert message='something went wrong' closable type="error" />
            }
        </div>
    )

};