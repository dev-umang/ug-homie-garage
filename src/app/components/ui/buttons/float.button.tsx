import { Button, ButtonProps } from "antd";
import { FC } from "react";
import { PlusOutlined } from "@ant-design/icons";

type Props = ButtonProps;

const FloatButton: FC<Props> = (p) => (
  <Button
    {...p}
    icon={p.icon ?? <PlusOutlined style={{ fontSize: 20 }} />}
    shape="circle"
    style={{ height: 52, width: 52 }}
    className={`${p.className ?? ""} fixed! right-4 bottom-20 z-10`}
  />
);

export default FloatButton;
