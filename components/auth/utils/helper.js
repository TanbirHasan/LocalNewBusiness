import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("No email provided"),

  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const regiSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("No email is provided"),

  firstname: yup.string().required("No firstname is provided"),
  lastname: yup.string().required("No lastname is provided"),
  phonenumber: yup.string().required("No phonenumber is provided"),
  companytype: yup.string().required("No company type is provided"),
  companywebsite: yup.string().required("No company website is provided"),
  address: yup.string().required("No address is provided"),
  password: yup
    .string()
    .required("No password is provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const contactSchema = yup.object().shape({
  fullname: yup.string().required("No fullname is provided"),
  companyname: yup.string().required("No companyname  is provided"),
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("No email is provided"),
  subject: yup
    .string()
    .required("No subject is selected")
    .oneOf(["CSE", "EEE", "ETE"]),
});
