import Image from "next/image";

const Conversation = () => {
  return (
    <div className="xl:px-20 lg:px-20 py-20 sm:px-10">
      <div className="flex justify-evenly bg-[#9BCCE9]  py-20 rounded lg:flex-row sm:flex-col sm:px-10">
        <div className="flex flex-col justify-center items-start">
          <h3 className="headline3 mb-5">Get full conversion access with </h3>
          <div className="flex items-center mb-5">
            <Image src="/assets/logo.png" width="100" height="50" alt="" />
            <span className="headline6 ml-5 bg-[#3294D1] px-5 rounded text-white">
              Pro
            </span>
          </div>
          <button className="py-5 rounded-lg headline6 my-5 text-center bg-[color:var(--primary1-color)] text-white cursor-pointerlg:w-2/3 md:w-2/3 sm:w-2/3">
            Upgrade to Pro
          </button>
        </div>
        <div>
          <h3 className="headline4 mb-5">Featrues that you will get</h3>
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
