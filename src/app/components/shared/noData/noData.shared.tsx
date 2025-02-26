import { Button, Empty } from "antd";
import { FC, ReactNode } from "react";
import { PlusOutlined } from "@ant-design/icons";

type Props = {
  title?: string | null;
  description?: string | null;
  action?: {
    onClick?: () => void;
    label?: string;
    icon?: ReactNode;
  };
};

const NoData: FC<Props> = (p) => (
  <div className="flex flex-col items-center justify-center gap-4">
    <Empty
      description={
        <div className="text-muted text-center">
          <span className="font-bold text-lg">
            {p.title === null ? "" : (p.title ?? "No Data!")}
          </span>
          <div>{p.description}</div>
        </div>
      }
    />
    {p.action?.label && (
      <Button
        type="primary"
        icon={p.action?.icon ? p.action.icon : <PlusOutlined />}
        onClick={() => p.action?.onClick?.()}
      >
        {p.action?.label ?? "Do it"}
      </Button>
    )}
  </div>
);

export default NoData;
