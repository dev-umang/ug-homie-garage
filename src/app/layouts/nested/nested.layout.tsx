import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const NestedLayout: FC = () => (
  <Layout className="h-screen overflow-auto">
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default NestedLayout;
