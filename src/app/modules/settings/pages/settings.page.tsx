import { FC } from "react";

const SettingsPage: FC = () => {
  const Title = (
    <div>
      <div className="flex items-end gap-1">
        <h1 className="text-lg font-semibold">Settings</h1>
      </div>
      <div className="text-sm text-muted">
        This is where you can view and manage your personal information, account
        providers and permissions.
      </div>
      <div className="border-t border-slate-400/30 my-2"></div>
    </div>
  );

  return (
    <div>
      {Title}
      SettingsPage
    </div>
  );
};

export default SettingsPage;
