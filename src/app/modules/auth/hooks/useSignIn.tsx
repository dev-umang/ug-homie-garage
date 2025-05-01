import { useState } from "react";
import toast from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fbAuth } from "@configs/backend";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);

  // Sign with google auth provider of firebase.
  const signinByGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(fbAuth, provider)
      .then((res) => {
        const { email, displayName } = res.user;
        if (email) toast.success(`Welcome ${displayName || email}!`);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  const signIn = {
    google: signinByGoogle,
  };

  return { signIn, loading };
};

export default useSignIn;
