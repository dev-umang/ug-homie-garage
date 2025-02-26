import { Layout } from "antd";
import { FC, useEffect } from "react";
import { useNav } from "@common/hooks";
import { AppSpinner } from "@components/shared";

const SplashPage: FC = () => {
  const nav = useNav();

  useEffect(() => {
    setTimeout(() => {
      nav("/garages");
    }, 1500);
  }, []);

  return (
    <Layout className="h-screen flex items-center justify-center">
      <AppSpinner />
    </Layout>
  );
};

export default SplashPage;
