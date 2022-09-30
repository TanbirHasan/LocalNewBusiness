import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="px-10 text-center lg:text-center md:text-center lg:px-20 my-20 sm:px-10">
      <h3 className="Tagline text-[16px] mb-5 lg:text-[20px] md:text-[20px] sm:text-[20px] text-[#D16F32]">
        ABOUT US
      </h3>
      <h2 className="headline3 text-[20px] lg:text-[36px] md:text-[28px] sm:text-[20px]">
        Be the first to access new companies contact
        <br /> details with new start data.
      </h2>
      <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px]  hidden lg:block md:block">
        Be the first to access new companies contact details with New Start
        Data.
      </p>
    </div>
  );
};

export default AboutUs;
