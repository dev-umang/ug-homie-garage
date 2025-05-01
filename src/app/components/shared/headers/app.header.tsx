import { Dropdown, Layout } from "antd";
import { FC } from "react";
import { AvatarTemplate } from "@components/templates";

const { Header } = Layout;

const AppHeader: FC = () => (
  <Header className="shadow-sm">
    <div className="flex items-center justify-between h-full max-w-layout mx-auto p-default">
      <div className="text-xl font-bold">My App</div>
      <Dropdown menu={{ items: [] }}>
        <AvatarTemplate />
      </Dropdown>
    </div>
  </Header>
);

export default AppHeader;
