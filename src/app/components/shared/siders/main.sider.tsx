import { Menu as AntdMenu, Layout, MenuProps } from "antd";
import { Menu } from "lucide-react";
import { FC } from "react";
import { useTheme } from "@configs/theme";

const { Sider } = Layout;
type Props = {
  menu: MenuProps["items"];
};

const MainSider: FC<Props> = ({ menu }) => {
  const { color } = useTheme();
  return (
    <Sider
      collapsible
      collapsedWidth={52}
      defaultCollapsed
      style={{ borderRight: `1px solid ${color.border}` }}
      trigger={
        <div
          style={{
            borderTop: `1px solid ${color.border}`,
            borderRight: `1px solid ${color.border}`,
          }}
          className="h-full flex items-center justify-center"
        >
          <Menu />
        </div>
      }
    >
      <div className="demo-logo-vertical" />
      <AntdMenu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={menu}
      />
    </Sider>
  );
};

export default MainSider;
