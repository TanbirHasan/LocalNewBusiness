import Image from "next/image";

const FindCompanies = () => {
  return (
    <div className="py-20">
      <div className="flex justify-between pl-20">
        <div>
          <h2 className="headline2">
            Find the names and addresses of newly formed
            <br /> companies in your area or industry.
          </h2>
        </div>
        <div>
          <Image
            src="/assets/LocationLogo.png"
            width="74"
            height="106"
            alt="locationImage"
          />
        </div>
      </div>

      <div className="flex justify-between px-20 mt-20">
        <div className="card px-10 py-10 mr-5 rounded-[10px]">
          <Image
            src="/assets/Smiley.png"
            width="24"
            height="24"
            alt="smily logo"
          />
          <h3 className="headline5 mb-5">Simple To Use</h3>
          <p className="headline6">
            We are a simple online service for filtering Companies House
            information for the names and addresses of companies, and the
            director names, of new UK companies of interest to you.
          </p>
        </div>
        <div className="card px-10 py-10 ml-5 rounded-[10px]">
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
        </div>
      </div>

      <div className="px-20 mt-20">
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
      </div>
    </div>
  );
};

export default FindCompanies;
