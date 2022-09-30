import AboutUsSecond from "../components/AboutUsSecond/AboutUsSecond";
import Conversation from "../components/Conversation/Conversation";
import Footer from "../components/Footer/Footer";
import Goal from "../components/Goal/Goal";
import Navbar from "../components/Navbar";
import ReserveData from "../components/ReserveData/ReserveData";
import Responsibilities from "../components/Responsibilites/Responsibilities";

const About = () => {
  const colour = "transparent";
  return (
    <div>
      <div className="about lg:text-center md:text-center sm:text-center">
        <Navbar colour={colour} />
        <div className=" z-10 pt-[100px] px-10">
          {" "}
          <h3 className="Tagline mb-5 lg:text-[20px] text-[#D16F32]">
            ABOUT US
          </h3>
          <h2 className="headline3 text-[20px] xl:text-[36px]  lg:text-[36px] md:text-[28px] sm:text-[22px]">
            Be the first to access new companies contact
            <br /> details with new start data.
          </h2>
          <p className="headline6">
            Be the first to access new companies contact details with New Start
            Data.
          </p>
        </div>
      </div>

      <ReserveData />
      <AboutUsSecond />
      <Responsibilities />
      <Goal />

      <div className="text-start py-10 px-10 xl:px-20  lg:px-20 md:px-20 md:px-10  lg:py-20 md:py-20 lg:text-center md:text-center">
        <h3 className="headline3 text-[24px] mb-5 lg:text-[36px]  xl:text-[36px]  md:text-[36px] ">
          Be the first to access new companies contact.
        </h3>
        <p className="headline6">
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
