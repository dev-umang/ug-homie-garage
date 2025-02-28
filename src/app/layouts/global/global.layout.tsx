import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "@modules/auth";

const GlobalLayout: FC = () => {
  const { authUser, checkUser } = useAuth();

  useEffect(() => checkUser(), []);

  if (authUser === undefined) return <>Loading...</>;
  return <Outlet />;
};

export default GlobalLayout;
