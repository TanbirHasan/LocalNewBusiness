import * as yup from "yup";

// Login form validatin schema
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

// registration form validation schema
export const regiSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("An Email is required"),

  firstname: yup.string().required("A Firstname is required"),
  lastname: yup.string().required("A Lastname is required"),
  phonenumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  companytype: yup.string().required("A Company type is required"),
  companywebsite: yup.string().required("A Company website is required"),
  address: yup.string().required("An Address is required"),
  password: yup
    .string()
    .required("A Password is required.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

// Contact form validation schema
export const contactSchema = yup.object().shape({
  fullname: yup.string().required("A Fullname is required"),
  companyname: yup.string().required("A Companyname  is required"),
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("An Email is required"),
  subject: yup
    .string()
    .required("A subject is selected")
    .oneOf(["CSE", "EEE", "ETE"]),
});

// Reset password validation schema
export const resetpassschema = yup.object().shape({
  password: yup
    .string()
    .required("No password provided.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

  confirmpassword: yup
    .string()
    .required("No password provided.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
