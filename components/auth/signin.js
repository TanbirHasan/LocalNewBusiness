import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import AuthLayout from "./layout";

// yup validation schema
let schema = yup.object().shape({
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

// check validity
schema
  .isValid({
    email: "eric.cartman@southpark.com",
  })
  .then((valid) => {
    console.log(valid); // true
  });
schema
  .isValid({
    email: "not.a.valid.email",
  })
  .then((valid) => {
    console.log(valid); // false
  });

const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const defaultValues = {
    email: "",
    password: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);

    reset();
  };

  return (
    <AuthLayout>
      <form
        name="SigninForm"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 py-5 justify-center items-center h-screen"
      >
        <h3 className="headline4 mb-14">Sign in to Local New Business</h3>
        <div className=" flex flex-col gap-5 items-center justify-between w-full md:w-96">
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
                helperText={errors?.email?.message}
                variant="outlined"
                error={!!errors?.email}
                required
                fullWidth
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                if (value === "") {
                  return "Please provide input name";
                }
              },
            }}
            render={({ field, formState }) => (
              <TextField
                {...field}
                label="Password"
                placeholder="Password"
                className="bg-white"
                autoFocus={true}
                autoComplete="new-password"
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors?.password?.message}
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="headline8 text-white bg-[#D16F32] text-[14px] cursor-pointer my-7 bg-main px-3 py-2 w-full md:w-96 rounded-md font-semibold"
        >
          Sign In
        </button>

        <Link href="/auth/forgetpassword">
          <span className="mx-auto text-[#3294D1] cursor-pointer">
            Forget Password?
          </span>
        </Link>

        <p className="mx-auto">
          New User?
          <Link href="/auth/reg">
            <span className="text-blue-600 my-5 text-[color:var(--form-button-color)] cursor-pointer ml-1">
              Create an Account
            </span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signin;
