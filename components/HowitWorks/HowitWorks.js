import Image from "next/image";

const HowitWorks = () => {
  return (
    <div className="px-20 mt-10 Howitworks py-20 text-white">
      <div>
        <h2 className="headline1 text-center mb-5">How It Works</h2>
        <p className="headline8 text-center mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="px-5">
          <Image src="/assets/Gps.png" width="24" height="24" alt="" />
          <h3 className="headline4">Enter Postcode</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <Image src="/assets/Select.png" width="24" height="24" alt="" />
          <h3 className="headline4">Select Area</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <Image src="/assets/Search.png" width="24" height="24" alt="" />
          <h3 className="headline4">Search</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <Image src="/assets/Database.png" width="24" height="24" alt="" />
          <h3 className="headline4">Database</h3>
          <p className="headline6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="px-5">
          <Image src="/assets/Payment.png" width="24" height="24" alt="" />
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
