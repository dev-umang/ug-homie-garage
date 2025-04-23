import { Button, Layout } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@modules/auth";

const { Header } = Layout;

const AppHeader: FC = () => {
  const { onSignOut } = useAuth();
  return (
    <Header className="shadow-sm">
      <div className="flex items-center justify-between h-full max-w-layout mx-auto p-default">
        <div className="text-xl font-bold">My App</div>
        <nav className="flex space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Button onClick={onSignOut} className="text-red-500">
            Logout
          </Button>
        </nav>
      </div>
    </Header>
  );
};

export default AppHeader;
