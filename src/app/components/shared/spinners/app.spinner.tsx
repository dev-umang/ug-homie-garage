import { FC, memo } from "react";
import ReactLottie from "react-lottie";
import animationData from "@assets/anim/simple_loader.json";

const sizes = {
  sm: 64,
  md: 96,
  lg: 128,
};

type Props = {
  size?: keyof typeof sizes;
  description?: string;
};

const AppSpinner: FC<Props> = memo((p) => {
  const size = sizes[p.size ?? "md"];
  return (
    <div
      style={{
        // height: size,
        // width: size,
        overflow: "hidden",
      }}
      className="inline-flex flex-col items-center justify-center"
    >
      <ReactLottie
        options={{
          animationData,
          rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        }}
        speed={1.25}
        height={size}
        width={size}
        isClickToPauseDisabled
      />
      {p.description && <span className="text-blue-500">{p.description}</span>}
    </div>
  );
});

AppSpinner.displayName = "AppSpinner";
export default AppSpinner;
