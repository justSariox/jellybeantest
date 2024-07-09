import { Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";
import s from './custom-layout.module.scss'
import { CustomHeader } from "@/components/ui";
const { Content } = Layout

export const CustomLayout = () => {
    return (
        <Flex gap='middle' wrap>
            <Layout className={s.layout}>
                <CustomHeader/>
                <Content className={s.content}>
                    <Outlet />
                </Content>
            </Layout>
        </Flex>
    )
}