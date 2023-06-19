import Swal from "sweetalert2";

export const SwalIcon = {
  Success: "success",
  Error: "error",
  Warning: "warning",
  Info: "info",
  Question: "question",
};

const showAlert = ({
  positiveButton = "Okay",
  negativeButton,
  positiveCallback,
  negativeCallback,
  dismissible = true,
  ...rest
}) => {
  Swal.fire({
    confirmButtonText: positiveButton,
    showDenyButton: !!negativeButton,
    denyButtonText: negativeButton,
    allowOutsideClick: dismissible,
    ...rest,
  }).then(async (result) => {
    if (result.isConfirmed) positiveCallback?.();
    else negativeCallback?.();
  });
};

export const showSuccessAlert = (
  title,
  text,
  positiveButton = "Great",
  positiveCallback,
  negativeButton,
  negativeCallback
) => {
  showAlert({
    title,
    text,
    positiveButton,
    icon: SwalIcon.Success,
    positiveCallback,
    negativeButton,
    negativeCallback,
  });
};

export const showErrorAlert = (title, text) => {
  showAlert({ title, text, icon: SwalIcon.Error });
};

export const showWarningAlert = (
  title,
  text,
  positiveCallback,
  negativeButton = "No",
  positiveButton = "Yes"
) => {
  showAlert({
    title,
    text,
    icon: SwalIcon.Warning,
    negativeButton,
    positiveButton,
    positiveCallback,
  });
};

export const showInfoAlert = (title, text) => {
  showAlert({ title, text, icon: SwalIcon.Info });
};

export const showQuestionAlert = (
  title,
  text,
  positiveCallback,
  positiveButton = "Yes",
  negativeButton = "No"
) => {
  showAlert({
    title,
    text,
    icon: SwalIcon.Question,
    negativeButton,
    positiveButton,
    positiveCallback,
  });
};
