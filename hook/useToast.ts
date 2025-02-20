import { useCallback } from "react";
import Swal from "sweetalert2";

export const useToast = () => {
  const toastSuccess = useCallback((message: string) => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
      timer: 3000,
      showConfirmButton: false,
    });
  }, []);

  const toastError = useCallback((message: string = "Something went wrong") => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
      timer: 3000,
      showConfirmButton: false,
    });
  }, []);

  const toastWarning = useCallback((message: string) => {
    Swal.fire({
      icon: "warning",
      title: "Warning",
      text: message,
      timer: 3000,
      showConfirmButton: false,
    });
  }, []);

  return { toastSuccess, toastError, toastWarning };
};