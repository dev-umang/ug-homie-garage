import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "@components/shared";

const { Content } = Layout;
const MainLayout: FC = () => (
  <Layout>
    <Content className="min-h-screen">
      <AppHeader />
      <div className="max-w-layout mx-auto p-default">
        <Outlet />
      </div>
    </Content>
  </Layout>
);

export default MainLayout;
