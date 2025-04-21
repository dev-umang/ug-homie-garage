import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AuthLayout: FC = () => (
  <Layout>
    <Content className="h-screen overflow-auto flex flex-col items-center justify-center">
      <Outlet />
    </Content>
  </Layout>
);

export default AuthLayout;
