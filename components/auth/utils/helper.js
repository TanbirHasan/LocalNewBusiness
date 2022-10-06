import * as yup from "yup";

export const loginSchema = {
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("No email provided"),

  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
};
