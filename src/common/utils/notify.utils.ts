import { notification } from "antd";
import { IconType } from "antd/es/notification/interface";
import { FirebaseError } from "firebase/app";

// export const notify = (message: string, type?: IconType, key?: Key) => {
// notification.open({
//   message,
//   type,
//   closable: true,
//   duration: 4,
//   placement: "bottomRight",
//   key,
// });
// };

// export const notifyErr = (err: FirebaseError) => {
//   notification.open({
//     message: err.message,
//     type: "error",
//     closable: true,
//     duration: 4,
//     placement: "bottomRight",
//     key: err.code,
//   });
// };

const show = (text: string | FirebaseError, type: IconType) =>
  notification.open({
    message:
      typeof text === "string"
        ? text
        : (text?.message ?? text.code ?? "Something went wrong!"),
    type,
    closable: true,
    duration: 4,
    placement: "bottomRight",
  });

export const notify = {
  success: (text: string) => show(text, "success"),
  error: (text: FirebaseError | string) => show(text, "error"),
  info: (text: string) => show(text, "info"),
};
