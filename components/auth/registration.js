import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthLayout from "./layout";
import { regiSchema } from "./utils/helper";

const Registration = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const defaultValues = {
    email: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    companywebsite: "",
    companytype: "",
    address: "",
    password: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(regiSchema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <form
        name="registrationform"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 py-10 justify-center items-center"
      >
        <h3 className="headline4 text-[18px] lg:text-[24px] md:text-[24px] items-start mb-3">
          Register in to Local New Business
        </h3>
        <div className=" flex flex-col gap-5 items-center justify-between w-full md:w-96">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                className="bg-white rounded"
                autoFocus={true}
                placeholder="Email address"
                error={!!errors.email}
                helperText={errors?.email?.message}
                variant="outlined"
                required
                fullWidth
              />
            )}
          />

          {/* firstname,lastname */}
          <div className="flex gap-5">
            <Controller
              name="firstname"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  type="text"
                  className="bg-white rounded"
                  autoFocus={true}
                  placeholder="First Name"
                  error={!!errors.firstname}
                  helperText={errors?.firstname?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <Controller
              name="lastname"
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
                  label="Last Name"
                  type="text"
                  className="bg-white rounded"
                  autoFocus={true}
                  placeholder="Last Name"
                  error={!!errors.lastname}
                  helperText={errors?.lastname?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </div>

          {/* phone number */}

          <Controller
            name="phonenumber"
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
                label="Phone Number"
                type="text"
                className="bg-white rounded"
                autoFocus={true}
                placeholder="Phone Number"
                error={!!errors.phonenumber}
                helperText={errors?.phonenumber?.message}
                variant="outlined"
                required
                fullWidth
              />
            )}
          />

          {/* company website */}

          <Controller
            name="companywebsite"
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
                label="Company Website"
                type="text"
                className="bg-white rounded"
                autoFocus={true}
                placeholder="Company Website"
                error={!!errors.companywebsite}
                helperText={errors?.companywebsite?.message}
                variant="outlined"
                required
                fullWidth
              />
            )}
          />

          {/* company type */}

          <Controller
            name="companytype"
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
                label="Company Type"
                type="text"
                className="bg-white rounded"
                autoFocus={true}
                placeholder="Company Type"
                error={!!errors.companytype}
                helperText={errors?.companytype?.message}
                variant="outlined"
                required
                fullWidth
              />
            )}
          />

          {/* Address */}

          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                type="text"
                className="bg-white rounded"
                autoFocus={true}
                placeholder="Address"
                error={!!errors.address}
                helperText={errors?.address?.message}
                variant="outlined"
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
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                placeholder="Password"
                className="bg-white rounded"
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
          className="headline8 bg-[#D16F32] text-white text-[14px] cursor-pointer my-7 bg-main px-3 py-2 w-full md:w-96 rounded-md font-semibold"
        >
          Create Account
        </button>

        <div className="form-control w-full max-w-sm relative mb-5">
          <input
            type="checkbox"
            className="appearance checked:bg-blue-500 mr-3"
          />
          <span className="headline9">
            By clicking Create account, I agree that I have read and accepted
            the Terms of Use and Privacy Policy.
          </span>
        </div>

        <p className="mx-auto headline8">
          Already have an account?
          <Link href="/auth/signin">
            <span className="formbottomlink">Sing in</span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Registration;
