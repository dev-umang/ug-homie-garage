import { FC } from "react";
import { Link } from "react-router-dom";
import { GetStartedWrapper } from "..";

const WelcomePage: FC = () => (
  <GetStartedWrapper key="welcome">
    Welcome to the Garage App! This is a simple app to manage your garage and
    car. You can add your car, track its maintenance, and much more. Lets get
    started! <Link to={"/get-started/add-garage"}>Next</Link>
  </GetStartedWrapper>
);

export default WelcomePage;
