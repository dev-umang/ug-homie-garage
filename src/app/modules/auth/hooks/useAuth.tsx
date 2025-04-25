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
import { Path } from "@configs/routes";
import { AtomAuthUser, AuthUser } from "..";

const useAuth = () => {
  const [authUser, setAuthUser] = useAtom(AtomAuthUser);
  const nav = useNav();
  const userRef = useRef<FirestoreUnsubscribe>(null);

  // Listen for logged in user data, if data not found navigate to get started screens.
  const listenUserData = useCallback(
    (user: User, force?: boolean) => {
      if (!force && authUser?.email) return;

      const { uid } = user;
      userRef.current?.();
      const docRef = doc(fbStore, fbNodes.users, uid);

      userRef.current = onSnapshot(
        docRef,
        (res) => {
          if (res.exists()) {
            if (
              window.location.pathname === "/" ||
              window.location.pathname.startsWith("/get-started")
            )
              nav("/garages");
            const _data: AuthUser = res.data() as AuthUser;
            setAuthUser(_data);
          } else {
            nav("/get-started/welcome");
            setAuthUser({ ...user, newUser: true });
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

  // Only call on auth layout, If auth user exits then navigate to given path
  const checkAuthExists = useCallback(
    (successGoTo: Path): Unsubscribe => {
      const handleUser = (user: User | null) => {
        if (user?.email) nav(successGoTo);
        else nav("/auth/login");
      };
      return onAuthStateChanged(fbAuth, handleUser, console.error);
    },
    [nav],
  );

  //
  const checkAndGetAuth = useCallback(() => {
    const handleUser = (user: User | null) => {
      if (!user?.email) return nav("/auth/login");
      listenUserData(user, true);
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
