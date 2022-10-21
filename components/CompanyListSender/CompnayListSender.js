import { Button, TextField } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import emailjs from "@emailjs/browser";
import TextEditor from "../TextEditor/TextEditor";
import { Controller, useForm } from "react-hook-form";

const CompnayListSender = ({ ondatasubmit }) => {
  const defaultValues = {
    name: "",
    position: "",
    email: "",
    address: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    // resolver: yupResolver(loginSchema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);

    reset();
  };

  const form = useRef();

  const [data, setData] = useState();

  console.log(data);

  const handleemailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ub29or6",
        "template_51lq8bi",
        form.current,
        "DCK827ydgto_mWDl2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="shadow-lg px-5 lg:px-10 py-10">
      <div className="">
        <form
          name="SigninForm"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-0 py-5 w-full lg:px-5"
        >
          <h3 className="font-semibold mb-5">Recipient Information</h3>
          <div className=" grid grid-cols-2 gap-5 items-center justify-center">
            <div className="col-span-1">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    type="text"
                    className="bg-white"
                    autoFocus={true}
                    placeholder="Name"
                    helperText={errors?.name?.message}
                    variant="outlined"
                    error={!!errors?.name}
                    required
                    fullWidth
                  />
                )}
              />
            </div>
            <div className=" col-span-1">
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Position"
                    type="text"
                    className="bg-white"
                    autoFocus={true}
                    placeholder="Position"
                    helperText={errors?.position?.message}
                    variant="outlined"
                    error={!!errors?.position}
                    required
                    fullWidth
                  />
                )}
              />
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-5 items-center justify-center mt-5">
            <div className=" col-span-1">
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
            </div>

            <div className=" col-span-1">
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    type="text"
                    className="bg-white"
                    autoFocus={true}
                    placeholder="Address"
                    helperText={errors?.address?.message}
                    variant="outlined"
                    error={!!errors?.address}
                    required
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="mt-5">
        <form onSubmit={handleemailSubmit} ref={form} className="flex flex-col">
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-solid mb-3 rounded"
          />
          <textarea
            name="message"
            rows="4"
            cols="6"
            placeholder="Message"
            className="border-2 border-solid mb-2"
          />
          {/* <TextEditor setData={setData} /> */}
          <div className="flex justify-between">
            <button
              className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer mt-5"
              onClick={() => ondatasubmit("")}
            >
              Cancel
            </button>
            <button
              type="submit"
              value="Send"
              className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer mt-5"
              onClick={() => ondatasubmit("displaytemplate")}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompnayListSender;
