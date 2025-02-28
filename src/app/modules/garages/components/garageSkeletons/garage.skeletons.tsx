import { Card, Skeleton, Space } from "antd";
import { FC } from "react";

const vehicleList: FC = () => (
  <div className="flex overflow-hidden gap-4">
    {Array(10)
      .fill("")
      .map((_, i) => (
        <Card
          size="small"
          cover={<Skeleton.Image style={{ width: 180 }} key={i} active />}
          key={i}
        >
          <Space>
            <Skeleton.Avatar />
            <Skeleton.Node active style={{ height: 24 }} />
          </Space>
          <div>
            <Skeleton.Node active style={{ height: 10, width: 100 }} />
          </div>
          <Skeleton.Node active style={{ height: 10, width: 75 }} />
        </Card>
      ))}
  </div>
);

export const GarageSkeletons = {
  vehicleList,
};
