import { Card } from "antd";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthCard: FC<Props> = ({ children }) => (
  <Card size="small">{children}</Card>
);

export default AuthCard;
