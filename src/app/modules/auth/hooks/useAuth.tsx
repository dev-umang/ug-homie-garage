import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  GoogleAuthProvider,
  type Unsubscribe,
  User,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { useAtom } from "jotai";
import { useNav } from "@common/hooks";
import { fbAuth, fbRefs } from "@configs/backend";
import { AtomAuthUser, AuthUser } from "..";

const useAuth = () => {
  const authSub = useRef<Unsubscribe>(null);
  const nav = useNav();
  const path = useLocation().pathname; // Current Location.
  const [authUser, setAuthUser] = useAtom(AtomAuthUser);
  const [loading, setLoading] = useState(false);

  // Sign in with google
  const googleSignIn = useCallback(() => {
    const gProvider = new GoogleAuthProvider();
    setLoading(true);
    signInWithPopup(fbAuth, gProvider)
      .then(({ user }) => {
        toast.success(`Welcome ${user?.displayName ?? user.email}`);
        nav("/garages");
        setLoading(false);
      })
      .catch((err: FirebaseError) => {
        setLoading(false);
        toast.error(err.message);
        console.error(err.message);
      });
  }, []);

  // Firebase listener to identify if the user is logged in, if yes callback to parent, if protected route go to login.
  const checkUser = useCallback(
    (callback?: (user: User) => void, onError?: () => void) => {
      if (authSub.current) return;
      console.warn("CHECK USER CALLED ");

      // Assignment of firebase listener instance to current reference
      authSub.current = onAuthStateChanged(
        fbAuth,
        (user) => {
          setAuthUser(user ?? null);
          if (user?.uid && callback) callback(user);
          else if (!user && !path.startsWith("/auth")) {
            nav("/auth/login"); // Navigate to login page.
            setAuthUser(undefined);
            onError?.();
          } else {
            setAuthUser(undefined);
            onError?.();
          }
        },
        (err) => {
          console.error(err);
          setAuthUser(null);
          onError?.();
        },
      );
    },
    [nav],
  );

  // Fetch User Profile
  const getUser = useCallback(
    (user: User) => {
      if (authUser && user.email === authUser?.email) return;

      return new Promise((resolve, reject) => {
        getDoc(fbRefs.user(user.email?.toString() ?? ""))
          .then((res) => {
            resolve(res.data());
            const _data: AuthUser | null | undefined =
              (res.data() as AuthUser) ?? null;
            setAuthUser(_data);
          })
          .catch((err) => {
            toast.error(err.message);
            reject();
          });
      });
    },
    [authUser, setAuthUser],
  );

  // Destroy firebase listener on destroy of the hook.
  useEffect(() => () => authSub.current?.(), []);

  return { checkUser, googleSignIn, authUser, setAuthUser, getUser, loading };
};

export default useAuth;
