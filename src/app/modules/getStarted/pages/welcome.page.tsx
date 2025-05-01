import { Button, Space } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { fbAuth } from "@configs/backend";
import { useAuth } from "@modules/auth";
import { GetStartedWrapper } from "..";

const WelcomePage: FC = () => {
  const { onSignOut } = useAuth();

  return (
    <GetStartedWrapper key="welcome">
      <h1 className="text-2xl font-black">
        Welcome {fbAuth.currentUser?.displayName || "User"}!
      </h1>
      <p className="text-justify">
        Hey there! Welcome to your new command center! 🚀 Get ready to conquer
        garage chaos and unlock a world of organized bliss. Let&apos;s make your
        space work for you! Happy organizing! 🛠️✨
      </p>
      <Space>
        <Link to={"/get-started/add-garage"}>
          <Button type="primary">Get Started</Button>
        </Link>
        <Button onClick={onSignOut} type="text">
          Back to Login
        </Button>
      </Space>
    </GetStartedWrapper>
  );
};

export default WelcomePage;
