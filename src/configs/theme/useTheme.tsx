import { theme } from "antd";
import { useCallback, useMemo } from "react";
import { useAtom } from "jotai";
import { Colors } from "./colors";
import { AtomDarkMode } from "./theme.config";

const { useToken } = theme;

const useTheme = () => {
  const [darkMode, setDarkMode] = useAtom(AtomDarkMode);
  const { token } = useToken();
  // Switch between dark and light mode.
  const toggleDarkMode = useCallback(() => setDarkMode((d) => !d), []);

  const color = useMemo(
    () => Colors[darkMode ? "dark" : "light"] ?? {},
    [darkMode],
  );

  return { darkMode, color, token, toggleDarkMode };
};

export default useTheme;
