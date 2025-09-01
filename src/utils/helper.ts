import { toast } from "sonner";
import { ZodError } from "zod";

let errorMessage = "";
export const errorToast = (message: any) => {
  // ✅ Check if the error is from Zod validation
  if (message instanceof ZodError) {
    errorMessage = "Data validation Error";
  } else {
    errorMessage =
      typeof message === "string" ? message : "Something went wrong";

    if (typeof message !== "string") {
      if (typeof message?.response?.data?.message === "string") {
        errorMessage = message.response.data.message;
      } else if (typeof message?.response?.data === "string") {
        errorMessage = message.response.data;
      } else if (typeof message?.response === "string") {
        errorMessage = message.response;
      } else if (typeof message?.data === "string") {
        errorMessage = message.data;
      } else if (typeof message?.error === "string") {
        errorMessage = message.error;
      } else if (typeof message?.message === "string") {
        errorMessage = message.message;
      } else if (
        Array.isArray(message) &&
        message.length > 0 &&
        typeof message[0] === "string"
      ) {
        errorMessage = message[0];
      }
    }
  }

  console.log("errorMessage", errorMessage);
  toast.dismiss();
  toast.error(errorMessage, {
    position: "top-right",
  });
};

export const successToast = (message: any) => {
  const successMessage = typeof message === "string" ? message : "Successful";

  toast.dismiss();
  toast.success(successMessage, {
    position: "top-right",
  });
};
