import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CommonType, MenuItem } from "@common/types";
import { Path } from "@configs/routes";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

type MenuTypes = {
  bottomNav: { [path in Path]?: CommonType };
  accountPopover: MenuItem[];
  accountPage: MenuItem[];
};

const m = (
  href?: Path,
  label?: ReactNode,
  icon?: ReactNode,
  children?: MenuItem[],
): MenuItem => ({
  key: href ?? Math.random(),
  label: href ? <Link to={href}>{label}</Link> : label,
  icon,
  children,
});

const bn = (
  href?: Path,
  label?: string,
  icon?: ReactNode,
  children?: CommonType[],
): CommonType => ({
  key: href,
  name: label,
  label: (
    <div>
      <span className="text-xl">{icon}</span>
      <div className="text-xs">{label}</div>
    </div>
  ),
  children,
});

const g = (
  title: string,
  children: MenuItem[],
  fontSize?: 12 | 14,
): MenuItem => ({
  key: title,
  label: title,
  children,
  type: "group",
  style: { fontSize },
});

const AllPages: MenuItem[] = [];

export const Menus: MenuTypes = {
  bottomNav: {
    "/garages": bn("/garages", "Garages", <HomeOutlined />),
    "/account/profile": bn("/account/profile", "Profile", <UserOutlined />),
    "/account/settings": bn(
      "/account/settings",
      "Settings",
      <SettingOutlined />,
    ),
  },
  // [
  //   bn("/garages", "Garages", <HomeOutlined />),
  //   bn("/account/profile", "Profile", <UserOutlined />),
  //   bn("/account/settings", "Settings", <SettingOutlined />),
  // ],
  accountPopover: [
    g(
      "Application",
      [
        m("/garages", "Home"),
        m("/account/profile", "Profile"),
        m("/account/settings", "Settings"),
      ],
      12,
    ),
    g("Pages", AllPages, 12),
    m(undefined, <span className="text-red-500">Log Out</span>),
  ],
  accountPage: [
    { type: "divider" },
    g("Account", [
      m("/account/profile", "Profile"),
      m("/account/settings", "Settings"),
    ]),
  ],
};
