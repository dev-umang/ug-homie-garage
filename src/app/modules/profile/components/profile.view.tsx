import { Avatar } from "antd";
import { FC } from "react";

const ProfileView: FC = () => (
  <div className="mt-4">
    <div className="grid grid-cols-[75px_1fr] gap-4">
      <Avatar shape="square" style={{ height: 75, width: 75 }}>
        UG
      </Avatar>
      <div>
        <h1 className="text-lg font-semibold">Display Name</h1>
        <div className="text-muted">name@organization.com</div>
        <div className="text-muted">random-uuid-123</div>
      </div>
    </div>
  </div>
);

export default ProfileView;
