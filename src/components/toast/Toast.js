import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ type, message }) => {
  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case "success":
      toast.success(message, toastConfig);
      break;
    case "error":
      toast.error(message, toastConfig);
      break;
    case "warning":
      toast.warning(message, toastConfig);
      break;
    case "info":
      toast.info(message, toastConfig);
      break;
    default:
      toast(message, toastConfig);
  }

  return null;
};

export default Toast;
