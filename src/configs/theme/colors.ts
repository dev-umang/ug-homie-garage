type ThemeColors = Partial<{
  container: string;
  bodyPrimary: string;
  bodySecondary: string;
  bodyPrimaryText: string;
  bodySecondaryText: string;
  active: string;
  activeAlpha: string;
  border: string;
}>;

export const Colors: { [k in "light" | "dark"]: ThemeColors } = {
  dark: {
    bodyPrimary: "#101011FF",
    bodySecondary: "#0f0f14",
    bodyPrimaryText: "#ffffff",
    bodySecondaryText: "#A3A1A1FF",
    container: "#010003ff",
    active: "#4648a5",
    activeAlpha: "#4463FF38",
    border: "#333333B0",
  },
  light: {
    bodyPrimary: "#F1EFEFFF",
    bodySecondary: "#edeff8",
    bodyPrimaryText: "#000000",
    bodySecondaryText: "#6B6B6BFF",
    container: "#FFFFFFFF",
    active: "#D36409FF",
    activeAlpha: "#4648a5",
    border: "#D6D6D6B0",
  },
};
