import Image from "next/image";
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
    <div className="banner px-10 py-10 lg:px-20 lg:py-20 md:py-20 sm:px-10 h-auto">
      <div className="text-center mb-10">
        <h2 className="headline2 headline2Res  text-white mb-10 xl:w-[890px] lg:w-[890px]  mx-auto">
          We help you connect with new local businesses before the competition.
        </h2>
        <p className="headline5 headline5Res text-white lg:w-[712px] md:w-[650px] mx-auto sm:w-[396px] ">
          We help you reach their inboxes, so you can make connections that turn
          into sales. We also offer templates that help you stand out from the
          crowd.
        </p>
      </div>
      <div className="feature flex flex-col justify-center items-center lg:flex-row md:flex-row sm:flex-row text-white mb-10 ">
        <div className="featureclass mb-2">
          <Image src="/assets/Tick.png" width="15" height="15" alt="" />
          <span className="headline7 ml-4 ">Update Every Second</span>
        </div>
        <div className="featureclass mb-2">
          <Image src="/assets/Tick.png" width="15" height="15" alt="" />
          <span className="headline7 ml-4">30 Days Free Trial</span>
        </div>
        <div className="featureclass">
          <Image src="/assets/Tick.png" width="15" height="15" alt="" />
          <span className="headline7 ml-4">Unlimited Data</span>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form mb-20 flex justify-evenly lg:flex-row md:flex-row text-center sm:flex flex-col items-center"
        >
          <div className="form-control w-full max-w-xs">
            <label className="headline6 bannerlebleclass">
              Search By Postcode
            </label>
            <input
              type="text"
              placeholder="Postcode"
              className="bannerinputclass"
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
            <label className="headline6 bannerlebleclass">
              Search by SIC Code
            </label>
            <input
              type="text"
              placeholder="SIC Code"
              className="bannerinputclass"
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
            <label className="headline6 text-white text-[14px] lg:text-[16px] md:text-[16px] sm:text-[16px]">
              Click Here to Search Data
            </label>
            <input
              type="submit"
              className="bannersubmitbutton"
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
