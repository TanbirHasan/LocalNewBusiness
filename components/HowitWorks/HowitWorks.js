import Image from "next/image";

const HowitWorks = () => {
  return (
    <div className="px-10 lg:px-20 md:px-20 mt-10 Howitworks py-20 text-white">
      <div>
        <h2 className="headline1 text-[24px] lg:text-[52px] md:text-[52px] text-center mb-5">
          How It Works
        </h2>
        <p className="hidden headline8  text-center mb-10 lg:block md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 md:gap-1">
        <div className="px-5 mx-auto lg:mx-0 md:mx-0 sm:mx-0">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Gps.png" width="24" height="24" alt="" />
          </div>

          <h3 className="headline4 text-[16px] lg:text-[24px] md:text-[24px] sm:text-[24px]">
            Enter Postcode
          </h3>
          <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px] sm:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5 mx-auto lg:mx-0 md:mx-0 sm:mx-0">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Select.png" width="24" height="24" alt="" />
          </div>

          <h3 className="headline4 text-[16px] lg:text-[24px] md:text-[24px] sm:text-[24px]">
            Select Area
          </h3>
          <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px] sm:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5 mx-auto lg:mx-0 md:mx-0 sm:mx-0">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Search.png" width="24" height="24" alt="" />
          </div>
          <h3 className="headline4 text-[16px] lg:text-[24px] md:text-[24px] sm:text-[24px]">
            Search
          </h3>
          <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px] sm:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5 mx-auto lg:mx-0 md:mx-0 sm:mx-0">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Database.png" width="24" height="24" alt="" />
          </div>
          <h3 className="headline4 text-[16px] lg:text-[24px] md:text-[24px] sm:text-[24px]">
            Database
          </h3>
          <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px] sm:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5 mx-auto lg:mx-0 md:mx-0 sm:mx-0">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Payment.png" width="24" height="24" alt="" />
          </div>
          <h3 className="headline4 text-[16px] lg:text-[24px] md:text-[24px] sm:text-[24px]">
            Payment
          </h3>
          <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px] sm:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
