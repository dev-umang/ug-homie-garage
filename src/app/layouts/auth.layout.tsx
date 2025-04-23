import { Layout } from "antd";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@modules/auth";

const { Content } = Layout;

const AuthLayout: FC = () => {
  const { checkAuthExists } = useAuth();

  useEffect(() => {
    const unsubscribe = checkAuthExists();
    return () => unsubscribe?.();
  }, [checkAuthExists]);

  return (
    <Layout>
      <Content className="h-screen overflow-auto flex flex-col items-center justify-center">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AuthLayout;
