import { Layout } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const { Content } = Layout;

const _404Page: FC = () => (
  <Layout>
    <Content className="h-screen flex flex-col items-center justify-center">
      <div className="text-4xl my-10">404! Not Found!</div>
      <Link className="underline text-sky-600" to={"/"}>
        Go to Home!
      </Link>
    </Content>
  </Layout>
);

export default _404Page;
