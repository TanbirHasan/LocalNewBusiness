import React from "react";
import { Box, Modal, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useForm } from "react-hook-form";

const SearchModal = (props) => {
  const { open, setOpen, handleClose, handleOpen } = props;

  const [value, setValue] = React.useState(null);
  const [secondvalue, setsecondValue] = React.useState(null);

  const style = {
    position: "absolute",
    borderRadius: 2,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",

    boxShadow: 12,
    p: 4,
  };

  const defaultValues = {
    subject: "",
    datefrom: "",
    dateto: "",
    name: "",
    city: "",
    siccode: "",
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    //resolver: yupResolver(contactSchema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values, value, secondvalue);
    reset();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="mx-1"
    >
      <Box sx={style} className="w-full  lg:w-2/5 md:w-2/5 ">
        <form
          name="contactform"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-3 mb-3 gap-0 items-center">
            <label className="col-span-1">Subject : </label>
            <div className="col-span-2">
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
                    <TextField
                      {...field}
                      type="text"
                      className=" bg-white mt-2 border-none"
                      autoFocus={true}
                      placeholder="Subject"
                      error={!!errors.subject}
                      helperText={errors?.subject?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mb-3 items-center ">
            <label className="col-span-1">Incorporated From : </label>

            <div className="col-span-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="w-full"
                  label=""
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="grid grid-cols-3 mb-5">
            <label className="col-span-1">Incorporated To : </label>

            <div className="col-span-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="w-full"
                  label=""
                  value={secondvalue}
                  onChange={(newValue) => {
                    setsecondValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="grid grid-cols-3 mb-3 gap-0">
            <label className="col-span-1">Name : </label>
            <div className="col-span-2">
              <Controller
                name="name"
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
                    <TextField
                      {...field}
                      type="text"
                      className=" bg-white mt-2 border-none"
                      autoFocus={true}
                      placeholder="Name"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mb-3 gap-0">
            <label className="col-span-1">City : </label>
            <div className="col-span-2">
              <Controller
                name="city"
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
                    <TextField
                      {...field}
                      type="text"
                      className=" bg-white mt-2 border-none"
                      autoFocus={true}
                      placeholder="City"
                      error={!!errors.city}
                      helperText={errors?.city?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mb-3 gap-0">
            <label className="col-span-1">SIC code : </label>
            <div className="col-span-2">
              <Controller
                name="siccode"
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
                    <TextField
                      {...field}
                      type="text"
                      className=" bg-white mt-2 border-none"
                      autoFocus={true}
                      placeholder="Siccode"
                      error={!!errors.siccode}
                      helperText={errors?.siccode?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button
              className="rounded-lg px-3 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer mr-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="headline6 bg-[color:var(--form-button-color)] text-white cursor-pointer my-5 border-none  px-5 rounded-lg"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default SearchModal;
