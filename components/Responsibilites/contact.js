import {
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar";

const Contact = () => {
  const colour = "transparent";

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
    //resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <div>
      <div className="contact">
        <Navbar colour={colour} />
        <div className="px-20">
          <div className="text-center z-10 pt-[100px]">
            <h3 className="Tagline mb-5 lg:text-[20px] text-[#D16F32]">
              CONTACT US
            </h3>
            <h2 className="headline3 lg:text-[36px] sm:text-[22px]">
              Be the first to access new companies contact
              <br /> details with new start data.
            </h2>
            <p className="headline6">
              Be the first to access new companies contact details with New
              Start Data.
            </p>
          </div>
        </div>

        <div className="my-20">
          <form
            name="contactform"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col px-5 py-10 justify-center items-center"
          >
            <div className=" flex flex-col gap-5 items-center justify-between ">
              <div className="grid grid-cols-2 gap-5">
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
                          placeholder="Full Name"
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
                          placeholder="Company Name"
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
                          placeholder="Email Address"
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
                          Text
                        </InputLabel>
                        <Select
                          {...field}
                          type="select"
                          className="bg-white rounded mt-2"
                          autoFocus={true}
                          value="Select Your Subject"
                          placeholder="Select Subject"
                          error={!!errors.subject}
                          helperText={errors?.subject?.message}
                          variant="outlined"
                          required
                          fullWidth
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
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
                        Message
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
              className="headline8 bg-[#D16F32] text-white text-[14px] cursor-pointer my-7 bg-main px-3 py-2 w-full sm:w-96 md:w-96 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
