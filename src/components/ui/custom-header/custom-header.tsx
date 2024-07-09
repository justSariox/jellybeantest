import { Layout, Menu, Typography } from "antd";
import { NavItems } from "@/common/constants";
import { Link } from "react-router-dom";
import s from './custom-header.module.scss'
const { Header } = Layout


export const CustomHeader = () => {
    return (
      <Header className={s.header}>

              <Link to='/'>
                  <Typography.Paragraph className={s.title}>Jelly Belly Test</Typography.Paragraph>
                  </Link>

          <Menu mode="horizontal" items={NavItems} />

      </Header>
  )
}