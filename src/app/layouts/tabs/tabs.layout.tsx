import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Menus } from "@common/constants";
import { BottomNav, MainHeader } from "@components/shared";

const { Content } = Layout;

const TabsLayout: FC = () => (
  <Layout className="h-screen overflow-auto">
    <MainHeader />
    <Layout>
      {/* <MainSider menu={Menus.sider} /> */}
      <Content>
        <div>
          <Outlet />
        </div>
        <BottomNav menu={Menus.bottomNav} />
      </Content>
    </Layout>
  </Layout>
);

export default TabsLayout;
