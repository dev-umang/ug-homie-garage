import { Button } from "antd";
import { FC } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "..";

const LoginPage: FC = () => {
  const { googleSignIn } = useAuth();

  return (
    <div>
      <Button onClick={googleSignIn} icon={<GoogleOutlined />}>
        Sign with google
      </Button>
    </div>
  );
};

export default LoginPage;
