import { FC } from "react";
import { Link } from "react-router-dom";
import { GetStartedWrapper } from "..";

const InitAddGaragePage: FC = () => (
  <GetStartedWrapper key="add-garage">
    Add new garage <Link to={"/get-started/welcome"}>Back</Link>
  </GetStartedWrapper>
);

export default InitAddGaragePage;
