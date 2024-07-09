import s from './main.module.scss'
import { Typography } from "antd";

export const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <Typography.Title className={s.pageTitle}>Main Page</Typography.Title>
            <Typography.Paragraph className={s.description}>This is the main page of the application.
                Use the navigation in the header to navigate through the pages</Typography.Paragraph>
        </div>
    )
}