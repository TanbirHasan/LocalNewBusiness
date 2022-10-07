import React from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../auth/utils/helper";

const ContactForm = () => {
  const defaultValues = {
    email: "",
    fullname: "",
    companyname: "",
    subject: "",
    message: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(contactSchema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <div className="my-20">
      <form
        name="contactform"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-5 py-10 justify-center items-center"
      >
        <div className=" flex flex-col gap-5 items-center justify-between lg:w-3/4 md:w-3/4">
          <div className="grid grid-cols-2 gap-5 w-full">
            <div>
              <Controller
                name="fullname"
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
                  <>
                    <InputLabel className="headline7 text-[16px]">
                      Full Name
                    </InputLabel>
                    <TextField
                      {...field}
                      type="text"
                      className="bg-white rounded mt-2"
                      autoFocus={true}
                      placeholder="Input your full name"
                      error={!!errors.fullname}
                      helperText={errors?.fullname?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              />
            </div>

            <div>
              <Controller
                name="companyname"
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
                  <>
                    <InputLabel className="headline7 text-[16px]">
                      Company Name
                    </InputLabel>
                    <TextField
                      {...field}
                      type="text"
                      className="bg-white rounded mt-2"
                      autoFocus={true}
                      placeholder="Input your company name"
                      error={!!errors.companyname}
                      helperText={errors?.companyname?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 w-full">
            <div>
              <Controller
                name="email"
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
                  <>
                    <InputLabel className="headline7 text-[16px]">
                      Email Address
                    </InputLabel>
                    <TextField
                      {...field}
                      type="email"
                      className="bg-white rounded mt-2"
                      autoFocus={true}
                      placeholder="Input your email address"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              />
            </div>

            <div>
              <Controller
                name="subject"
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
                  <>
                    <InputLabel className="headline7 text-[16px]">
                      Subject
                    </InputLabel>
                    <Select
                      {...field}
                      type="select"
                      className="rounded mt-2"
                      autoFocus={true}
                      displayEmpty
                      renderValue={(value) =>
                        value !== "" ? value : "Select your subject"
                      }
                      error={!!errors.subject}
                      helperText={errors?.subject?.message}
                      variant="outlined"
                      required
                      fullWidth
                    >
                      <MenuItem value={"CSE"}>CSE</MenuItem>
                      <MenuItem value={"EEE"}>EEE</MenuItem>
                      <MenuItem value={"ETE"}>ETE</MenuItem>
                    </Select>
                  </>
                )}
              />
            </div>
          </div>
          <div className="w-full">
            <Controller
              name="message"
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
                <>
                  <InputLabel className="headline7 text-[16px]">
                    Messages
                  </InputLabel>
                  <TextareaAutosize
                    {...field}
                    type="text"
                    minRows={6}
                    className="bg-white rounded w-full  border-solid border-2 rounded mt-2 py-2 px-2"
                    autoFocus={true}
                    placeholder="Write your messages in here"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </>
              )}
            />
          </div>
        </div>

        <button
          type="submit"
          className="headline6 bg-[#D16F32] text-white text-[14px] cursor-pointer my-7 px-3 py-2 w-2/4 sm:w-96 md:w-96 rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
