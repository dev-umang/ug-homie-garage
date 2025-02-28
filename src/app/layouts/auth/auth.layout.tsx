import { Layout } from "antd";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNav } from "@common/hooks";
import { useAuth } from "@modules/auth";

const { Content } = Layout;
const AuthLayout: FC = () => {
  const { checkUser } = useAuth();
  const nav = useNav();

  useEffect(
    () =>
      checkUser((user) => {
        if (user) nav("/garages");
      }),
    [],
  );

  return (
    <Layout className="h-screen overflow-auto">
      <Content className="flex items-center justify-center">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AuthLayout;
