import { toast } from "react-toastify";

export const showToast = ({ type, messgae }) => {
  toast[type](messgae, {
    // type: success, warning, error, info
    theme: "light",
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
