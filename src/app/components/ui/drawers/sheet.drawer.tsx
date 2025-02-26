import { Button, Drawer, DrawerProps } from "antd";
import { FC, ReactNode, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

type Props = Omit<DrawerProps, "placement" | "styles"> &
  Partial<{ header: ReactNode; trigger: ReactNode }>;

const SheetDrawer: FC<Props> = (p) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="inline-block" onClick={() => setOpen(!open)}>
        {p.trigger}
      </div>
      <Drawer
        {...p}
        open={p.open === undefined ? open : p.open}
        title={null}
        closable={false}
        styles={{ body: { padding: 12, paddingTop: 6 } }}
        onClose={(e) => {
          p.onClose?.(e);
          setOpen(false);
        }}
        placement="bottom"
        destroyOnClose
      >
        <div className="flex justify-center">
          <div className="w-24 h-1.5 bg-slate-600 rounded-sm"></div>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="font-bold text-lg">{p.title}</div>
          <Button
            onClick={(e) => {
              p.onClose?.(e);
              setOpen(false);
            }}
            type="text"
            size="small"
            icon={<CloseOutlined />}
          />
        </div>
        {p.children}
      </Drawer>
    </>
  );
};

export default SheetDrawer;
