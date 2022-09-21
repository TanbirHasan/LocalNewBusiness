import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";

const Reigistration = () => {
  let inputclass =
    "input input-bordered w-full max-w-xs rounded-lg px-2 py-1 border-[1px]";
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
    <div className="authform">
      <div className="leftdiv">
        <div className="leftdivinner">
          <div className="p-16">
            <Image src="/assets/logo.png" width="120" height="50" alt="logo" />
          </div>
          <div>
            <div className="headline2 text-white px-16">
              Do you want to grow <br /> your business? <br />
              Join us now.
            </div>
            <div className="headline6 text-white px-16 my-20">
              Creating Brands, Growing business’s and crafting unique
              experiences for customers all around the world.
            </div>
          </div>
        </div>
      </div>
      <div className="rightdiv">
        <form onSubmit={handleSubmit(onSubmit)} className="formclass">
          <h3 className="font-semibold mb-5 headline4">
            Register to Local New Business
          </h3>
          <div className="form-control w-full max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="inputclass headline8"
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
            <label className="label">
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

          <div className="form-control w-full max-w-xs relative mt-5">
            <div className="flex">
              <input
                type="text"
                placeholder="First-Name"
                className="inputclass mr-1 headline8"
                {...register("firstname", {
                  required: {
                    value: true,
                    message: "First-Name is required",
                  },
                })}
              />
              <input
                type="text"
                placeholder="Last-Name"
                className="inputclass ml-1 headline8"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "Last-Name is required",
                  },
                })}
              />
            </div>
          </div>
          <div className="form-control w-full max-w-xs relative mt-5">
            <input
              type="text"
              placeholder="Company name"
              className="inputclass headline8"
              {...register("compnayname", {
                required: {
                  value: true,
                  message: "Company name is required",
                },
              })}
            />
            <label className="label">
              {errors.compnayname?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors?.compnayname?.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs relative mt-5">
            <input
              type="text"
              placeholder="Phone number"
              className="inputclass headline8"
              {...register("phonenumber", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
              })}
            />
            <label className="label">
              {errors.phonenumber?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors?.phonenumber?.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs relative mt-5">
            <input
              type="text"
              placeholder="Post code"
              className="inputclass headline8"
              {...register("postcode", {
                required: {
                  value: true,
                  message: "Post code is required",
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
            </label>
          </div>

          <div className="form-control w-full max-w-xs relative mt-5">
            <input
              type="password"
              placeholder="Password"
              className="inputclass headline8"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Provide a valid Password", // JS only: <p>error message</p> TS only support string
                },
              })}
            />
            <AiOutlineEye className="absolute right-5 top-2 cursor-pointer" />

            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors?.password?.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <input type="submit" className="formbutton" value="Create Account" />
          <div className="form-control w-full max-w-xs relative mb-5">
            <input
              type="checkbox"
              className="appearance checked:bg-blue-500 mr-3"
            />
            <span className="headline9">
              By clicking Create account, I agree that I have read and accepted
              the Terms of Use and Privacy Policy.
            </span>
          </div>
          {/* 
      <Link href="">
        <span className="mx-auto text-[#3294D1]">Forget Password?</span>
      </Link>
              */}

          <p className="mx-auto headline8">
            Already have an account?
            <Link href="/auth/signin">
              <span className="formbottomlink">Sing in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Reigistration;
