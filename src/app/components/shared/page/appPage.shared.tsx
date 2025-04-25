import { Button, Card, Popover } from "antd";
import { FC, ReactNode } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { CgChevronLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Path } from "@configs/routes";

type Props = {
  children?: ReactNode;
  title: ReactNode;
  extra?: ReactNode;
  info?: ReactNode;
  backTo?: Path;
};

const AppPage: FC<Props> = (p) => (
  <>
    <Card size="small">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {p.backTo && (
            <Link to={p.backTo}>
              <Button
                type="text"
                icon={
                  <div className="flex">
                    <CgChevronLeft size={24} />
                  </div>
                }
              />
            </Link>
          )}
          <h3 className="text-xl font-semibold">
            {p.title}{" "}
            {p.info && (
              <Popover trigger={["click"]} content={p.info}>
                <Button icon={<BiInfoCircle />} type="text" />
              </Popover>
            )}
          </h3>
        </div>
        <div>{p.extra}</div>
      </div>
    </Card>
    <div className="mt-4">{p.children}</div>
  </>
);

export default AppPage;
