import { ConfigProvider, theme } from "antd";
import { FC, ReactNode } from "react";
import { atomWithStorage } from "jotai/utils";
import useTheme from "./useTheme";

type Props = {
  children: ReactNode;
};

export const AtomDarkMode = atomWithStorage("dark", false);

const ThemeConfig: FC<Props> = ({ children }) => {
  const { darkMode, color: c } = useTheme();

  return (
    <ConfigProvider
      tabs={{ style: { textAlign: "center" }, className: "tab" }}
      theme={{
        algorithm: darkMode ? [theme.darkAlgorithm] : [theme.defaultAlgorithm],
        token: {
          colorPrimary: c.active,
          colorBorderSecondary: c.border,
          colorBgContainer: c.container,
          borderRadius: 4,
          colorBgElevated: c.containerElevated,
        },
        components: {
          Form: {
            itemMarginBottom: 16,
            labelColor: c.bodySecondaryText,
            verticalLabelMargin: 0,
            verticalLabelPadding: "0px 0.5rem",
          },
          Tabs: {
            cardGutter: 0,
            horizontalItemGutter: 0,
            horizontalItemPadding: "5px 10px",
            itemActiveColor: c.active,
            colorBgTextActive: c.active,
            colorPrimaryActive: c.active,
            colorHighlight: c.active,
            itemSelectedColor: c.active,
          },
          Menu: {
            darkItemBg: "transparent",
            darkItemColor: c.bodySecondaryText,
            darkItemHoverColor: c.bodyPrimaryText,
            darkPopupBg: c.container,
            darkSubMenuItemBg: c.bodySecondary,
            activeBarWidth: 4,
            activeBarBorderWidth: 0,
            itemBorderRadius: 0,
            itemMarginInline: 0,
            darkItemSelectedBg: c.activeAlpha,
            darkItemSelectedColor: c.active,
          },
          Layout: {
            headerHeight: "auto",
            colorBgLayout: c.bodyPrimary,
            headerPadding: 0,
            headerBg: c.container,
            siderBg: c.container,
            triggerBg: c.container,
            triggerHeight: 40,
            triggerColor: c.bodySecondaryText,
          },
        },
      }}
    >
      <div className={`${darkMode ? "dark" : "light"}`}>{children}</div>
    </ConfigProvider>
  );
};

export default ThemeConfig;
