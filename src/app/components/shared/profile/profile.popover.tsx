import { Avatar, Button, Dropdown } from "antd";
import { CSSProperties, FC, ReactElement, cloneElement } from "react";
import { Menus } from "@common/constants";
import { useTheme } from "@configs/theme";

const ProfilePopover: FC = () => {
  const { color, token } = useTheme();

  const ProfileHeader = (
    <div className="flex items-center gap-2 p-2 pb-0">
      <Avatar
        shape="square"
        size={"large"}
        style={{ background: color.activeAlpha, color: color.bodyPrimaryText }}
        className="font-bold"
      >
        DN
      </Avatar>
      <div>
        <h2 className="text-[16px]/4 font-semibold line">Display Name</h2>
        <span className="text-[12px] text-muted">name@organization.com</span>
      </div>
    </div>
  );

  const contentStyle: CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: CSSProperties = {
    boxShadow: "none",
  };

  return (
    <Dropdown
      trigger={["click"]}
      menu={{ items: Menus.accountPopover }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {ProfileHeader}
          {cloneElement(
            menu as ReactElement<{
              style: CSSProperties;
            }>,
            { style: menuStyle },
          )}
        </div>
      )}
    >
      <Button
        shape="circle"
        icon={<Avatar style={{ background: color.active }}>DN</Avatar>}
      />
    </Dropdown>

    // <Popover
    //   styles={{ body: { padding: 0 } }}
    //   trigger={["click"]}
    //   placement="bottomRight"
    //   content={content}
    //   arrow={false}
    // >
    //   <Button
    //     shape="circle"
    //     icon={<Avatar style={{ background: color.active }}>UG</Avatar>}
    //   />
    // </Popover>
  );
};

export default ProfilePopover;
