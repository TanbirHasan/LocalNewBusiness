import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsSecond from "../components/AboutUsSecond/AboutUsSecond";
import Conversation from "../components/Conversation/Conversation";
import Footer from "../components/Footer/Footer";
import Goal from "../components/Goal/Goal";
import Navbar from "../components/Navbar/Navbar";

import ReserveData from "../components/ReserveData/ReserveData";
import Responsibilities from "../components/Responsibilites/Responsibilities";

const About = () => {
  const colour = "transparent";
  return (
    <div>
      <div className="about lg:text-center md:text-center sm:text-center">
        <Navbar colour={colour} />

        <AboutUs />
      </div>

      <ReserveData />
      <AboutUsSecond />
      <Responsibilities />
      <Goal />

      <div className="text-start py-10 px-10 xl:px-20  lg:px-20 md:px-20   lg:py-20 md:py-20 lg:text-center md:text-center">
        <h3 className="headline3 headline3Res  mb-5">
          Be the first to access new companies contact.
        </h3>
        <p className="headline6 headline6Res">
          Be the first to access new companies contact details with New Start
          Data. Be the first to access new companies contact details with New
          Start Data. Be the first to access new companies contact details with
          New Start Data. Be the first to access new companies contact details
          with New Start Data. Be the first to access new companies contact
          details with New Start Data. Be the first to access new companies
          contact details with New Start Data. Be the first to access new
          companies contact details. Be the first to access new companies
          contact details with New Start Data. Be the first to access new
          companies accesss.
        </p>
        <button className="headline6 bg-[#D16F32] text-white text-[14px] cursor-pointer my-7 px-3 py-2 w-2/4 sm:w-1/4  md:w-1/4  lg:w-1/4 rounded-md font-semibold">
          Explore
        </button>
      </div>
      <Conversation />
      <Footer />
    </div>
  );
};

export default About;
