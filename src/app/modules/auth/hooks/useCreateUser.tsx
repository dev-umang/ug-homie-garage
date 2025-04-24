import toast from "react-hot-toast";
import { getDoc, setDoc } from "firebase/firestore";
import { fbRefs } from "@configs/backend";
import { AuthUser } from "..";

const useCreateUser = () => {
  const checkUserExists = (uid: string) =>
    new Promise<AuthUser | null>((resolve) => {
      getDoc(fbRefs.user.get(uid))
        .then((res) => {
          if (res.exists()) resolve(res.data() as AuthUser);
          else resolve(null);
        })
        .catch((err) => {
          console.error(err);
          resolve(null);
        });
    });

  const createUser = (user: AuthUser) =>
    new Promise<AuthUser | null>((resolve) => {
      console.log(`1. Starting process to create user ${user.email}`);
      console.log(`2. Checking if user exists ${user.email}`);
      checkUserExists(user.uid).then((res) => {
        if (res) {
          console.log(`3. User already exists with email ${user.email}`);
          resolve(res);
        } else {
          console.log(
            `3. User Does not exists with email ${user.email}! Creating one!`,
          );
          
          const _user: AuthUser = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerId,
            uid: user.uid,
            newUser: true,
          };

          setDoc(fbRefs.user.add(user.uid), _user)
            .then(() => {
              toast.success(`Registration is successful!`);
              resolve(user);
            })
            .catch((err) => {
              console.error(err);
              resolve(null);
            });
        }
      });
    });

  return { createUser };
};

export default useCreateUser;
