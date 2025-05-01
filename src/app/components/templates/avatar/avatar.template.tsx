import { CSSProperties, FC, memo, useMemo } from "react";
import { useAuth } from "@modules/auth";

type Props = {
  size?: CSSProperties["width"];
};

const AvatarTemplate: FC<Props> = memo(() => {
  const { authUser } = useAuth();
  const initials = useMemo(() => {
    const name = authUser?.displayName || authUser?.email || "";
    return name;
  }, [authUser]);

  return <div>{initials}</div>;
});
AvatarTemplate.displayName = "AvatarTemplate";
export default AvatarTemplate;
