import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/Ai";

const Signin = () => {
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
    <div className="flex justify-center my-20 h-screen lg:flex-row md:flex-row sm:flex flex-col px-2">
      <div className="left-div xl:w-1/4 lg:w-1/4 md:w-1/4 xl:px-12 py-10 md:px-5 sm:w-full px-5">
        <div className="flex flex-col items-start justify-between h-full">
          <Image src="/assets/logo.png" width="120" height="50" alt="logo" />
          <div>
            <h3 className="font-bold text-xl text-white">
              Do you want to grow your business?
            </h3>
            <h3 className="font-bold text-xl text-white mb-5">Join us now.</h3>

            <p className="text-[11px] text-white">
              Creating Brands, Growing business’s and crafting unique
              experiences for customers all around the world.
            </p>
          </div>
        </div>
      </div>
      <div className="right-div xl:w-2/4 lg:w-2/4 md:w-2/4 bg-yellow-200 flex justify-center items-center z-0 sm:w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-5 py-5 lg:w-2/4"
        >
          <h3 className="font-semibold mb-5">Sign in to Local New Business</h3>
          <div className="form-control w-full max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="inputclass"
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

          <div className="form-control w-full max-w-xs relative">
            <input
              type="password"
              placeholder="Password"
              className="inputclass mt-5"
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
            <AiOutlineEye className="mt-2 absolute right-5 top-5 cursor-pointer" />

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

          <input
            type="submit"
            className="inputclass bg-[color:var(--form-button-color)] text-white cursor-pointer my-5"
            value="Sign In"
          />

          <Link href="/forgetpassword">
            <span className="mx-auto text-[#3294D1] cursor-pointer">
              Forget Password?
            </span>
          </Link>

          <p className="mx-auto">
            New User?
            <Link href="/registration">
              <span className="text-blue-600 my-5 text-[color:var(--form-button-color)] cursor-pointer">
                Create an Account
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
