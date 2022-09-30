import React from "react";

const HomeAboutUs = () => {
  return (
    <div className="px-10 text-center lg:text-center md:text-center lg:px-20 my-20 sm:px-10">
      <div className="mx-auto">
        <img
          src="/assets/SearchLogo.png"
          alt=""
          className="w-[90px] mx-auto mb-5 lg:w-[212px] lg:h-[199px] md:w-[212px] md:h-[199px]"
        />
      </div>
      <h3 className="Tagline taglineRes mb-5  text-[#D16F32]">ABOUT US</h3>
      <h2 className="headline3 headline3Res">
        Be the first to access new companies contact
        <br /> details with new start data.
      </h2>
    </div>
  );
};

export default HomeAboutUs;
