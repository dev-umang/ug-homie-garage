import { useCallback, useRef } from "react";
import toast from "react-hot-toast";
import { Unsubscribe, User, onAuthStateChanged, signOut } from "firebase/auth";
import {
  Unsubscribe as FirestoreUnsubscribe,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useAtom } from "jotai";
import { useNav } from "@common/hooks";
import { fbAuth, fbNodes, fbStore } from "@configs/backend";
import { AtomAuthUser, AuthUser } from "..";

const useAuth = () => {
  const [authUser, setAuthUser] = useAtom(AtomAuthUser);
  const nav = useNav();
  const userRef = useRef<FirestoreUnsubscribe>(null);

  const listenUserData = useCallback(
    (uid: string, force?: boolean) => {
      if (!force && authUser?.email) return;
      userRef.current?.();
      const docRef = doc(fbStore, fbNodes.users, uid);

      userRef.current = onSnapshot(
        docRef,
        (res) => {
          if (res.exists()) {
            const _data: AuthUser = res.data() as AuthUser;
            setAuthUser(_data);
          } else {
            setAuthUser(null);
            nav("/get-started/welcome");
          }
        },
        (err) => {
          console.error(err);
          toast.error(err.message);
        },
      );
    },
    [authUser?.email, nav, setAuthUser],
  );

  // Only call on auth layout, If auth user exits then navigate to dashboard
  const checkAuthExists = useCallback((): Unsubscribe => {
    const handleUser = (user: User | null) => user?.email && nav("/dashboard");
    return onAuthStateChanged(fbAuth, handleUser, console.error);
  }, [nav]);

  const checkAndGetAuth = useCallback(() => {
    const handleUser = (user: User | null) => {
      if (!user?.email) return nav("/auth/login");
      listenUserData(user.uid, true);
    };
    return onAuthStateChanged(fbAuth, handleUser, console.error);
  }, [listenUserData, nav]);

  const onSignOut = () =>
    signOut(fbAuth).catch((err) => {
      toast.error(err.message);
    });

  return { checkAuthExists, checkAndGetAuth, authUser, onSignOut };
};

export default useAuth;
