import { useForm } from "react-hook-form";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";

const contact = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Navbar />
      <div className="contact px-20">
        <div className="text-center z-10 pt-[100px]">
          {" "}
          <h3 className="Tagline mb-5 lg:text-[20px] text-[#D16F32]">
            CONTACT US
          </h3>
          <h2 className="headline3 lg:text-[36px] sm:text-[22px]">
            Be the first to access new companies contact
            <br /> details with new start data.
          </h2>
          <p className="headline6">
            Be the first to access new companies contact details with New Start
            Data.
          </p>
        </div>
      </div>

      <div className="my-20">
        <form onSubmit={handleSubmit(onSubmit)} className="formclass ">
          <div className="flex mb-5">
            <div>
              <label className="headline7 ml-5">Full Name</label>
              <div className="contactinput w-[389px] border-2 mx-5 mt-5">
                <input
                  type="text"
                  placeholder="Input your full name"
                  className="px-3 py-5 headline8 w-full"
                  {...register("fullname", {
                    required: {
                      value: true,
                      message: "Full Name is required",
                    },
                    pattern: {
                      message: "Provide a valid Name", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
              </div>
              <label className="label ml-5">
                {errors.fullname?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.fullname?.message}
                  </span>
                )}
                {errors.fullname?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.fullname?.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label className="headline7 ml-5">Company Name</label>

              <div className="contactinput w-[389px] border-2 mx-5 mt-5">
                <input
                  type="text"
                  placeholder="Input your company name"
                  className="px-3 py-5 headline8 w-full"
                  {...register("company", {
                    required: {
                      value: true,
                      message: "Company is required",
                    },
                    pattern: {
                      message: "Provide a valid Name", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
              </div>
              <label className="label ml-5">
                {errors.company?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.company?.message}
                  </span>
                )}
                {errors.company?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.company?.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* break */}

          <div className="flex ">
            <div>
              <lable className="headline7 ml-5">Email Address</lable>
              <div className="contactinput w-[389px] border-2 mx-5 mt-5">
                <input
                  type="email"
                  placeholder="Input your email address"
                  className="px-3 py-5 headline8 w-full"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
              </div>
              <label className="label ml-5">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.email?.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label className="headline7 ml-5">Subject</label>
              <div className="contactinput w-[389px] border-2 mx-5 mt-5">
                <select
                  placeholder="Select your subject"
                  className="px-3 py-5 headline8 w-full"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Subject is required",
                    },
                    pattern: {
                      message: "Provide a valid Subject", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
              </div>
              <label className="label ml-5">
                {errors.subject?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.subject?.message}
                  </span>
                )}
                {errors.subject?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {" "}
                    {errors?.subject?.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div>
            <label>Messages</label>
            <div className="contactinput w-full border-2 mt-5 w-[823px] ">
              <textarea
                rows="8"
                placeholder="Write your message here"
                className="w-full px-5 py-5"
              ></textarea>
            </div>
          </div>

          <input type="submit" className="formbutton" value="Send Message" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
