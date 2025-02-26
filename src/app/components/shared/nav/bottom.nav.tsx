import { Button, Card } from "antd";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { CommonType } from "@common/types";

type Props = {
  menu: CommonType[] | { [path: string]: CommonType };
};

const BottomNav: FC<Props> = ({ menu }) => {
  const path = useLocation().pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 text-center">
      <Card styles={{ body: { padding: 4 } }} className="md:inline-flex">
        <div className="flex">
          {Object.values(menu).map((m) => (
            <Link
              to={m.key?.toString() ?? "/"}
              key={m.key}
              className="flex w-full"
            >
              <Button
                className="h-full! py-1! w-full"
                type={path === m.key ? "primary" : "text"}
              >
                {m.label}
              </Button>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BottomNav;
