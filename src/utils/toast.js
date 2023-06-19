import Swal from "sweetalert2";

import { SwalIcon } from "./alert";

const showToast = ({ title, icon }) => {
  const Toast = Swal.mixin({
    padding: "10px",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({ icon, title });
};

export const showSuccessToast = (title) => {
  showToast({ title, icon: SwalIcon.Success });
};

export const showErrorToast = (title) => {
  showToast({ title, icon: SwalIcon.Error });
};

export const showWarningToast = (title) => {
  showToast({ title, icon: SwalIcon.Warning });
};

export const showInfoToast = (title) => {
  showToast({ title, icon: SwalIcon.Info });
};

export const showQuestionToast = (title) => {
  showToast({ title, icon: SwalIcon.Question });
};
