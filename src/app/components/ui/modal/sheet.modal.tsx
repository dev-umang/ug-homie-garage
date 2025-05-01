import { Drawer, Modal } from "antd";
import { FC, ReactNode, useEffect, useState } from "react";
import { SearchFields, useSearch } from "@common/hooks";

type Props = {
  trigger?: ReactNode;
  openKey: SearchFields;
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  onDestroy?: () => void;
  onClose?: () => void;
  defaultModal?: boolean;
};

// A dialog component that works as bottom sheet in mobile screen and modal for large screen.
const SheetModal: FC<Props> = (p) => {
  const { query, updateQuery, deleteParam } = useSearch();
  const [sheetMode, setSheetMode] = useState(p.defaultModal ? false : true);

  useEffect(() => {
    // Listen for the window resize, change component mode accordingly
    window.addEventListener("resize", () =>
      setSheetMode(window.innerWidth < 768),
    );
    return () => window.removeEventListener("resize", () => null);
  }, []);

  const onClose = () => {
    setTimeout(() => {
      p.onDestroy?.();
    }, 750);
    if (p.onClose) p.onClose?.();
    else deleteParam(p.openKey, true);
  };

  // Template for the modal component
  const ModalComponent = (
    <Modal
      open={query(p.openKey) === "true"}
      onCancel={onClose}
      footer={null}
      title={p.title}
      destroyOnClose
    >
      {p.children}
    </Modal>
  );

  // Template for the drawer component to create sheet
  const DrawerComponent = (
    <Drawer
      placement="bottom"
      open={query(p.openKey) === "true"}
      onClose={onClose}
      height={"85vh"}
      closable={false}
      styles={{ body: { padding: 0 } }}
    >
      <div className="max-w-[520px] mx-auto md:px-16 px-6">
        <div className="p-1.5 flex justify-center">
          <div className="w-32 h-1.5 bg-neutral-600/50 rounded-full"></div>
        </div>

        <div>
          <div className="mb-4 font-bold">
            <div className="text-lg">{p.title}</div>
            <div className="text-xs text-muted">{p.subtitle}</div>
          </div>
          {p.children}
        </div>
      </div>
    </Drawer>
  );

  return (
    <>
      {p.trigger && (
        <div
          onClick={() => updateQuery({ [p.openKey]: true })}
          className="inline-block"
        >
          {p.trigger}
        </div>
      )}
      {sheetMode ? DrawerComponent : ModalComponent}
    </>
  );
};

export default SheetModal;
