import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import AuthLayout from "./layout";
import { loginSchema } from "./utils/helper";
import { yupResolver } from "@hookform/resolvers/yup";

const ForgotPassword = () => {
  const defaultValues = {
    email: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <form
        name="forgotPasswordForm"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 py-5 justify-center items-center h-screen"
      >
        <h3 className="headline4 mb-7 text-left">Forgot password?</h3>
        <div className="headline8 text-left mb-14 w-full md:w-96">
          No worries! Just enter your email and we’ll send you a reset password
          link.
        </div>
        <div className=" flex flex-col gap-7 items-center justify-between w-full md:w-96">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                className="bg-white"
                autoFocus={true}
                placeholder="Email"
                error={!!errors.email}
                helperText={errors?.email?.message}
                variant="outlined"
                required
                fullWidth
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="bg-[#D16F32] text-white cursor-pointer my-7 bg-main px-3 py-2 w-full md:w-96 rounded-md font-semibold"
        >
          Send Recovery Email
        </button>
        <p className="mx-auto my-7">
          Just remember?
          <Link href="/auth/signin">
            <span className="text-blue-600 my-5 text-[color:var(--form-button-color)] cursor-pointer ml-1">
              Sign in
            </span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
