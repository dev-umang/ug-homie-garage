import { FunctionComponent } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import s from "./_pwaBadge.module.scss";

const PWABadge: FunctionComponent = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: unknown) {
      console.info("SW Registered: ", r);
    },
    onRegisterError(error: unknown) {
      console.info("SW registration error", error);
    },
  });

  // Message and action for the offline ready functionality.
  const Offline = (
    <div>
      <span>This web app is ready to use in offline mode. </span>
      <button onClick={() => setOfflineReady(false)}>Cool</button>{" "}
    </div>
  );

  // Message and action for the new deployment and notify user to refresh the page.
  const NeedRefresh = (
    <div>
      <span>
        Update available. Please &nbsp;
        <button onClick={() => updateServiceWorker(true)}>Reload</button>
        &nbsp; the page or &nbsp;
        <button onClick={() => setNeedRefresh(false)}>Close</button>
      </span>
    </div>
  );

  if (!offlineReady && !needRefresh) return null;
  return (
    <div className={s.barWrapper}>{offlineReady ? Offline : NeedRefresh}</div>
  );
};

export default PWABadge;
