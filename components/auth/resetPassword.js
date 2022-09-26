import React from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import AuthLayout from "./layout";
import { TextField } from "@mui/material";

const ResetPassword = () => {
  const defaultValues = {
    password: "",
    confirmPassword: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    //resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <form
        name="resetPasswordForm"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 py-5 justify-center items-center h-screen"
      >
        <div className=" flex flex-col gap-5 items-center justify-between w-full md:w-96">
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
            render={({ field }) => (
              <TextField
                {...field}
                label="Create new password"
                type="password"
                className="bg-white"
                autoFocus={true}
                placeholder="Create New Password"
                error={!!errors.password}
                helperText={errors?.password?.message}
                variant="outlined"
                required
                fullWidth
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                if (value === "") {
                  return "Please provide input name";
                }
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                type="password"
                className="bg-white"
                autoFocus={true}
                placeholder="Confirm New Password"
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                variant="outlined"
                required
                fullWidth
              />
            )}
          />
          <button
            type="submit"
            className=" bg-[#D16F32] headline8 text-white bg-[#D16F32] text-[14px] cursor-pointer my-7 bg-main px-3 py-2 w-full md:w-96 rounded-md font-semibold"
          >
            Sign In
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
