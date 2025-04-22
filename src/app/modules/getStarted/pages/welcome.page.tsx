import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { GetStartedWrapper } from "..";

const WelcomePage: FC = () => (
  <GetStartedWrapper key="welcome">
    <h1 className="text-2xl font-black">Welcome User!</h1>
    <p className="text-justify">
      Hey there! Welcome to your new command center! 🚀 Get ready to conquer
      garage chaos and unlock a world of organized bliss. Let&apos;s make your
      space work for you! Happy organizing! 🛠️✨
    </p>
    <Link to={"/get-started/add-garage"}>
      <Button type="primary">Get Started</Button>
    </Link>
  </GetStartedWrapper>
);

export default WelcomePage;
