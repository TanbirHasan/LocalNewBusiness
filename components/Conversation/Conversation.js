import Image from "next/image";

const Conversation = () => {
  return (
    <div className="xl:px-20 lg:px-20 py-20 px-10">
      <div className="flex flex-col justify-evenly items-center px-10 bg-[#9BCCE9]  py-20 rounded xl:flex-row lg:flex-row md:flex-row  lg:mx-0 md:mx-0">
        <div className="flex flex-col justify-center items-center sm:pr-5 lg:items-start md:items-start">
          <h3 className="headline3 text-[20px] mb-5 lg:text-[36px] xl:text-[36px] md:text-[28px]">
            Get full conversion access with{" "}
          </h3>
          <div className="flex items-center mb-5">
            <Image src="/assets/logo.png" width="100" height="50" alt="" />
            <span className="headline6 ml-5 bg-[#3294D1] px-5 rounded text-white">
              Pro
            </span>
          </div>
          <button className="w-full py-5 rounded-lg headline6 my-5 text-center bg-[color:var(--primary1-color)] text-white cursor-pointer lg:w-2/3 md:w-2/3 sm:w-2/3">
            Upgrade to Pro
          </button>
        </div>
        <div>
          <h3 className="headline4 text-[16px] mb-5 lg:text-[24px]  md:text-[24px]">
            Featrues that you will get
          </h3>
          <div className="flex items-center mb-3">
            <span className="mr-5">
              <Image src="/assets/bluetick.png" width="25" height="20" alt="" />
            </span>
            <p className="headline6">Unlimited Storge</p>
          </div>
          <div className="flex items-center  mb-3">
            <span className="mr-5">
              <Image src="/assets/bluetick.png" width="25" height="20" alt="" />
            </span>
            <p className="headline6">More Cloud Storge</p>
          </div>
          <div className="flex items-center  mb-3">
            <span className="mr-5">
              <Image src="/assets/bluetick.png" width="25" height="20" alt="" />
            </span>
            <p className="headline6">Download in 3 More formats</p>
          </div>
          <div className="flex items-center  mb-3">
            <span className="mr-5">
              <Image src="/assets/bluetick.png" width="25" height="20" alt="" />
            </span>
            <p className="headline6">1 Year membershio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
