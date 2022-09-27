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
        <div className="px-5">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Gps.png" width="24" height="24" alt="" />
          </div>

          <h3 className="headline4">Enter Postcode</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Select.png" width="24" height="24" alt="" />
          </div>

          <h3 className="headline4">Select Area</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Search.png" width="24" height="24" alt="" />
          </div>
          <h3 className="headline4">Search</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Database.png" width="24" height="24" alt="" />
          </div>
          <h3 className="headline4">Database</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <div className="logodesign w-[28px] h-[28px] bg-[red] px-[5px] py-[5px] mb-5">
            <Image src="/assets/Payment.png" width="24" height="24" alt="" />
          </div>
          <h3 className="headline4">Payment</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
