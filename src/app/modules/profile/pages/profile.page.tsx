import { Button } from "antd";
import { Edit, X } from "lucide-react";
import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProfileEdit from "../components/profile.edit";
import ProfileView from "../components/profile.view";

const ProfilePage: FC = () => {
  const [params, setParams] = useSearchParams();
  const mode = params.get("mode");

  const Body = useMemo(
    () => (mode === "edit" ? <ProfileEdit /> : <ProfileView />),
    [mode],
  );

  const Title = (
    <div>
      <div className="flex items-end gap-1">
        <Button
          title={mode === "edit" ? "Cancel edit" : "Edit your profile"}
          size="small"
          type="text"
          icon={mode === "edit" ? <X size={18} /> : <Edit size={16} />}
          onClick={() => setParams(mode === "edit" ? {} : { mode: "edit" })}
        />

        <h1 className="text-lg font-semibold">Profile</h1>
      </div>
      <div className="text-sm text-muted">
        This is where you can view and manage your personal information, account
        providers and permissions.
      </div>
      <div className="border-t border-slate-400/30 my-2"></div>
    </div>
  );

  return (
    <div className="max-w-2xl">
      {Title}
      {Body}
    </div>
  );
};

export default ProfilePage;
