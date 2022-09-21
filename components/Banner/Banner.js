import { useForm } from "react-hook-form";

const Banner = () => {
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
    <div className="banner h-screen md:px-20 py-20 sm:px-10">
      <div className="text-center mb-10">
        <h2 className="headline2 text-white mb-10">
          We help you connect with new local businesses before the competition.
        </h2>
        <p className="headline5 text-white">
          We help you reach their inboxes, so you can make connections that turn
          into sales.
          <br />
          We also offer templates that help you stand out from the crowd.
        </p>
      </div>
      <div className="flex justify-evenly text-white mb-10">
        <span className="headline7">Update Every Second</span>
        <span className="headline7">30 Days Free Trial</span>
        <span className="headline7">Unlimited Data</span>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-20 flex justify-evenly text-center"
        >
          <div className="form-control w-full max-w-xs">
            <label className="headline6 text-white">Search By Postcode</label>
            <input
              type="text"
              placeholder="Postcode"
              className="w-full py-5 rounded-lg headline6 my-5 text-center focus:outline-0 xl:w-full lg:w-2/3 md:w-2/3 sm:w-2/3"
              {...register("postcode", {
                required: {
                  value: true,
                  message: "Postcode is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Provide a valid Postcode", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              {errors.postcode?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors?.postcode?.message}
                </span>
              )}
              {errors.postcode?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors?.postcode?.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="headline6 text-white">Search by SIC Code</label>
            <input
              type="text"
              placeholder="SIC Code"
              className="w-full py-5 rounded-lg headline6 my-5 text-center focus:outline-0 xl:w-full lg:w-2/3 md:w-2/3 sm:w-2/3"
              {...register("sic", {
                required: {
                  value: true,
                  message: "SIC Code is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Provide a valid SIC Code", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <label className="label">
              {errors.sic?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors?.sic?.message}
                </span>
              )}
              {errors.sic?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors?.sic?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="headline6 text-white">
              Click Here to Search Data
            </label>
            <input
              type="submit"
              className="w-full py-5 rounded-lg headline6 my-5 text-center bg-[color:var(--primary1-color)] text-white cursor-pointer xl:w-full lg:w-2/3 md:w-2/3 sm:w-2/3"
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
