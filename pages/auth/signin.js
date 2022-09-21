import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";

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
          <h3 className="headline4 mb-5">Sign in to Local New Business</h3>
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

          <div className="form-control w-full max-w-xs relative">
            <input
              type="password"
              placeholder="Password"
              className="inputclass mt-5 headline8"
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

          <input type="submit" className="formbutton" value="Sign In" />

          <Link href="/auth/forgetpassword">
            <span className="headline8 mx-auto text-[#3294D1] cursor-pointer mb-5">
              Forget Password?
            </span>
          </Link>

          <p className="headline8 mx-auto">
            New User?
            <Link href="/auth/registration">
              <span className="formbottomlink">Create an Account</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
