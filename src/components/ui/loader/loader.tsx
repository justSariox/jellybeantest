import { Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
export const Loader = () => {
    return (
        <Space>
            <Spin fullscreen size="large" indicator={<LoadingOutlined spin/> }/>
        </Space>
    )
}