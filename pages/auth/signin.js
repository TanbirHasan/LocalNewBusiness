import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai";
import SigninComponent from "../../components/auth/signin";

const Signin = () => {
  return (
    <div>
      <SigninComponent />
    </div>
  );
};

export default Signin;
