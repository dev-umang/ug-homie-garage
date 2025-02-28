import { Button, Layout } from "antd";
import { ChevronLeft } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Path } from "@configs/routes";
import { useTheme } from "@configs/theme";
import { ProfilePopover } from "..";

const { Header } = Layout;

type Props = {
  title?: string;
  backTo?: Path;
};

const NestedHeader: FC<Props> = (p) => {
  const { color } = useTheme();

  return (
    <Header
      className="p-2!"
      style={{ borderBottom: `thin solid ${color.border}` }}
    >
      <div className="flex items-center justify-between mx-auto">
        <div className="flex gap-1 items-baseline">
          {p.backTo && (
            <Link to={p.backTo}>
              <Button
                type="text"
                icon={<ChevronLeft strokeWidth={5} size={16} />}
              />
            </Link>
          )}
          <h2 className="text-xl font-black">{p.title}</h2>
        </div>
        <ProfilePopover />
      </div>
    </Header>
  );
};

export default NestedHeader;
