import { Layout } from "antd";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppSpinner } from "@components/shared";
import { useAuth } from "@modules/auth";

const { Content } = Layout;

const GlobalLayout: FC = () => {
  const { checkAndGetAuth, authUser } = useAuth();

  useEffect(() => checkAndGetAuth(), [checkAndGetAuth]);

  if (authUser === undefined)
    return (
      <Layout>
        <Content className="h-screen flex items-center justify-center">
          <AppSpinner />
        </Content>
      </Layout>
    );
  if (authUser === null) return null;
  return <Outlet />;
};

export default GlobalLayout;
