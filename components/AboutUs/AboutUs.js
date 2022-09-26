import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="px-10 lg:px-20 my-20 text-center sm:px-10">
      <div className="mx-auto">
        <img
          src="/assets/SearchLogo.png"
          alt=""
          className="w-[90px] mx-auto mb-5 lg:w-[212px] lg:h-[199px] md:w-[212px] md:h-[199px]"
        />
      </div>
      <h3 className="Tagline text-[16px] mb-5 lg:text-[20px] md:text[20px] text-[#D16F32]">
        About Us
      </h3>
      <h2 className="headline3 text-[16px] lg:text-[36px] sm:text-[22px]">
        Be the first to access new companies contact
        <br /> details with new start data.
      </h2>
      <p className="headline6 hidden lg:block md:block">
        Be the first to access new companies contact details with New Start
        Data.
      </p>
    </div>
  );
};

export default AboutUs;
