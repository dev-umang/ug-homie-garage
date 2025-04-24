import toast from "react-hot-toast";

export const Errors = {
  wrongLogin: () => toast.error(
    `Something is wrong! Please try logout and login again!`,
  ),
};
