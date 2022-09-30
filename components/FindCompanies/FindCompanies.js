import Image from "next/image";
import { useState } from "react";

const information = [
  {
    id: 1,
    style: "col-span-1",
    headline: "Simple To Use",
    image: "/assets/Smiley.png",
    description:
      "We are a simple online service for filtering Companies House information for the names and addresses of companies, and the director names, of new UK companies of interest to you.",
  },
  {
    id: 2,
    style: "col-span-1",
    headline: "Filtered for You",
    image: "/assets/LocationMarker.png",
    description:
      "Not only do we filter by area, we filter addresses out by known virtual address providers so you don’t send mail to the wrong addresses (i.e Registered Offices) saving you time and money.",
  },
  {
    id: 3,
    style: "col-span-2",
    headline: "New Data",
    image: "/assets/File.png",
    description:
      "Utilising our technology integrated with Companies House we are able to filter their data for you in next to real time, meaning we can deliver you Utilising our technology integrated with Companies House we are able to filter their data for you in next to real time, meaning we can deliver you the resulting company data of interest to you within 24 hours of the companies having been formed.",
  },
];

const FindCompanies = () => {
  const [data, setData] = useState(information);

  console.log(data);

  return (
    <div className="py-20">
      <div className="pl-10 pr-10 lg:pl-20 md:pl-20 flex  lg:pr-0 md:pr-0 justify-between">
        <div>
          <h2 className="headline2 headline2Res w-full lg:w-3/4 md:w-3/4  mb-5">
            Find the names and addresses of newly formed companies in your area
            or industry.
          </h2>
        </div>
        <div className="hidden lg:w-1/4 md:w-1/4 lg:flex md:flex lg:justify-end md:justify-end">
          <Image
            src="/assets/LocationLogo.png"
            width="74"
            height="106"
            alt="locationImage"
          />
        </div>
      </div>

      <div className="px-10 grid grid-cols-1  md:grid-cols-2 gap-4 mt-5 lg:px-20 md:px-20">
        {data.map((data) => (
          <>
            <div
              className={`card mb-10 px-10 py-10 lg:mr-5 rounded-[10px] lg:mb-0 md:mb-0 lg:${data.style} md:${data.style}`}
              key={data.id}
            >
              <img
                src={data.image}
                width="24"
                height="24"
                alt="logo"
                className="mb-3"
              />
              <h3 className="headline5 mb-5 headline5Res">{data.headline}</h3>
              <p className="headline6 text-[14px] lg:text-[18px] md:text-[18px]">
                {data.description}
              </p>
            </div>
          </>
        ))}

        {/* <div className="card px-10 py-10 lg:ml-5 rounded-[10px]">
          <Image
            src="/assets/LocationMarker.png"
            width="24"
            height="24"
            alt="smily logo"
          />
          <h3 className="headline5 mb-5">Filtered for You</h3>
          <p className="headline6">
            Not only do we filter by area, we filter addresses out by known
            virtual address providers so you don’t send mail to the wrong
            addresses (i.e Registered Offices) saving you time and money.
          </p>
        </div> */}
      </div>

      {/* <div className="px-10 lg:px-20 md:px-20 mt-20">
        <div className="card px-10 py-10 rounded-[10px]">
          <Image
            src="/assets/File.png"
            width="24"
            height="24"
            alt="smily logo"
          />
          <h3 className="headline5 mb-5">New Data</h3>
          <p className="headline6">
            Utilising our technology integrated with Companies House we are able
            to filter their data for you in next to real time, meaning we can
            deliver you Utilising our technology integrated with Companies House
            we are able to filter their data for you in next to real time,
            meaning we can deliver you the resulting company data of interest to
            you within 24 hours of the companies having been formed.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default FindCompanies;
