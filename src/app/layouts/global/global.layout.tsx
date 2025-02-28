import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fbAuth } from "@configs/backend";
import { useAuth } from "@modules/auth";

const GlobalLayout: FC = () => {
  const { authUser, checkUser } = useAuth();

  useEffect(() => checkUser((user) => console.info(user)), []);
  console.log(authUser);
  console.log("FBAuth => ", fbAuth.currentUser);

  if (authUser === undefined) return <>Loading...</>;
  return (
    <>
      <Outlet />
    </>
  );
};

export default GlobalLayout;
