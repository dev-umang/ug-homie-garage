import { Spin } from "antd";
import { FC, ReactNode } from "react";

type Props = {
  title?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
  loading?: boolean;
};

const Page: FC<Props> = (p) => (
  <Spin spinning={p.loading ? true : false}>
    <div className="p-4 min-h-[80vh]">{p.children}</div>
  </Spin>
);

export default Page;
