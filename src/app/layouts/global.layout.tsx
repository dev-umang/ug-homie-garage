import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@modules/auth";

const GlobalLayout: FC = () => {
  const { checkAndGetAuth } = useAuth();

  useEffect(() => checkAndGetAuth(), [checkAndGetAuth]);

  //   if (authUser === undefined) return <>LOADING...</>;
  //   if (authUser === null) return "NO DATA";
  return <Outlet />;
};

export default GlobalLayout;
