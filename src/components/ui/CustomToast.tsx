import React from "react";
import {
  ToastContainer,
  toast,
  ToastContainerProps,
  cssTransition,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiAlertTriangle,
} from "react-icons/fi";

// Custom animation for toasts
const slideAnimation = cssTransition({
  enter: "animate-slideIn",
  exit: "animate-slideOut",
});

// Custom toast styling
export const customToastProps: ToastContainerProps = {
  position: "bottom-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  transition: slideAnimation,
  className: "custom-toast-container",
  toastClassName: "custom-toast",
  bodyClassName: "custom-toast-body",
  progressClassName: "custom-toast-progress",
};

// Custom success toast with icon
export const successToast = (message: string) => {
  toast.success(message, {
    className: "custom-toast-success",
    icon: () => <FiCheckCircle className="text-white text-xl" />,
  });
};

// Custom error toast with icon
export const errorToast = (message: string) => {
  toast.error(message, {
    className: "custom-toast-error",
    icon: () => <FiAlertCircle className="text-white text-xl" />,
  });
};

// Custom info toast with icon
export const infoToast = (message: string) => {
  toast.info(message, {
    className: "custom-toast-info",
    icon: () => <FiInfo className="text-white text-xl" />,
  });
};

// Custom warning toast with icon
export const warningToast = (message: string) => {
  toast.warning(message, {
    className: "custom-toast-warning",
    icon: () => <FiAlertTriangle className="text-white text-xl" />,
  });
};

// Custom toast container component
const CustomToastContainer: React.FC = () => {
  return <ToastContainer {...customToastProps} />;
};

export default CustomToastContainer;
