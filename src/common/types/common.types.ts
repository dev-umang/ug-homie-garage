import type { MenuProps } from "antd";
import { Key, ReactNode } from "react";

export type CommonType = Partial<{
  key: Key;
  label: ReactNode;
  icon: ReactNode;
  value: string;
  children?: CommonType[];
  id: string;
  name: string;
}>;

export type MenuItem = Required<MenuProps>["items"][number];
