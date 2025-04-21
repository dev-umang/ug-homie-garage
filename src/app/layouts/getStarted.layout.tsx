import { Layout } from "antd";
import { AnimatePresence } from "motion/react";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const GetStartedLayout: FC = () => (
  <Layout>
    <AnimatePresence>
      <Content className="min-h-screen flex flex-col items-center justify-center bg-linear-to-t from-sky-500 to-indigo-500">
        <Outlet />
      </Content>
    </AnimatePresence>
  </Layout>
);

export default GetStartedLayout;
