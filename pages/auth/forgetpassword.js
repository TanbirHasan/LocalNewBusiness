import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";

const Forgetpassword = () => {
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
          <h3 className="font-semibold mb-5 headline4">Forgot Password?</h3>
          <p className="headline8 mb-5">
            No worriest! Just enter your email and we’ll send you a reset
            password link.
          </p>
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

          <input
            type="submit"
            className="formbutton"
            value="Send Recovery Email"
          />

          <p className="mx-auto headline8">
            Just Remember?
            <Link href="/auth/signin">
              <span className="formbottomlink">Sign In</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Forgetpassword;
