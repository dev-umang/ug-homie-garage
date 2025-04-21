import { Layout } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader: FC = () => (
  <Header className="shadow-sm">
    <div className="flex items-center justify-between h-full max-w-layout mx-auto p-default">
      <div className="text-xl font-bold">My App</div>
      <nav className="flex space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/auth/login" className="text-red-500">
          Logout
        </Link>
      </nav>
    </div>
  </Header>
);

export default AppHeader;
