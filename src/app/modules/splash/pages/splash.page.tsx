import { Layout } from "antd";
import { FC, useEffect } from "react";
import { useNav } from "@common/hooks";
import { AppSpinner } from "@components/shared";
import { useAuth } from "@modules/auth";

const SplashPage: FC = () => {
  const nav = useNav();
  const { checkUser } = useAuth();

  useEffect(() => {
    checkUser((user) => {
      if (user) nav("/garages");
      else nav("/auth/login");
    });
  }, []);

  return (
    <Layout className="h-screen flex items-center justify-center">
      <AppSpinner />
    </Layout>
  );
};

export default SplashPage;
