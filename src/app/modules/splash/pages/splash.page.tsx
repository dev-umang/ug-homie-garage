import { Layout } from "antd";
import { FC } from "react";
import { AppSpinner } from "@components/shared";

const { Content } = Layout;

const SplashPage: FC = () => (
  <Layout>
    <Content className="h-screen flex items-center justify-center">
      <AppSpinner />
    </Content>
  </Layout>
);

export default SplashPage;
