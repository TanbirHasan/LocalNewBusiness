import Image from "next/image";

const ReserveData = () => {
  return (
    <div className="flex justify-evenly items-center my-20">
      <div className="w-1/4">
        <h2 className="reserveHeadlintext">WE RESERVE MILLION DATA</h2>
      </div>
      <div className="w-1/4">
        <Image
          src="/assets/GlobalMap.png"
          width="423"
          height="500"
          alt="globalmap"
        />
      </div>
      <div className="w-1/4 flex flex-col items-start">
        <Image
          src="/assets/Discover.png"
          width="160"
          height="92"
          alt="Discover"
        />
        <span className="headline3 mb-5">Participants</span>
        <div className="border-solid border-b-2 pb-5 mb-5">
          <span className="mr-3">
            {" "}
            <Image
              src="/assets/Participant1.png"
              width="48"
              height="48"
              alt=""
            />
          </span>
          <span className="mr-3">
            <Image
              src="/assets/Participant2.png"
              width="48"
              height="48"
              alt=""
            />
          </span>
          <span className="mr-3">
            <Image
              src="/assets/Participant3.png"
              width="48"
              height="48"
              alt=""
            />
          </span>
          <span className="mr-3">
            <Image
              src="/assets/Participant4.png"
              width="48"
              height="48"
              alt=""
            />
          </span>
        </div>
        <p>
          Be the first to access new companies contact details with New Start
          Data. Be the first to access new companies.
        </p>
        <span>-Rapid Patel</span>
      </div>
    </div>
  );
};

export default ReserveData;
