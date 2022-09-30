import Image from "next/image";

const Goal = () => {
  return (
    <div className="px-10 lg:px-20px md:px-20">
      <div className="flex lg:flex-row  md:flex sm:flex flex-col">
        <div class="vision p-6 my-5 w-auto h-auto  bg-white rounded-xl shadow-lg  items-center  lg:mx-8 md:mx-2 sm:mx-0 lg:my-0">
          <div class="shrink-0 text-center">
            <Image src="/assets/Exclude2.png" width="77" height="76" alt="" />

            <div>
              <h3 className="headline4 text-[24px] text-black my-5">Vission</h3>
              <p class="text-slate-500 text-[18px]">
                For more than 7 years, LocalNewBusiness has been helping
                companies create unique and powerful identity on the internet.
              </p>
            </div>
          </div>
        </div>
        <div class=" mission p-6 my-5 w-auto h-auto bg-white rounded-xl shadow-lg  items-center  lg:mx-8 mt-0 md:mx-2 md:mt-0 sm:mx-0 sm:mt-5 lg:my-0">
          <div class="shrink-0 text-center">
            <Image src="/assets/Exclude1.png" width="77" height="76" alt="" />

            <h3 className="headline4  text-[24px] text-black my-5">Mission</h3>
            <p class="text-slate-500 text-[18px]">
              For more than 7 years, LocalNewBusiness has been helping companies
              create unique and powerful identity on the internet.
            </p>
          </div>
        </div>
        <div class="values p-6 my-5 w-auto h-auto  bg-white rounded-xl shadow-lg  items-center  lg:mx-8 lg:my-0 md:mx-2 md:my-0 sm:mx-0 sm:my-5 lg:my-0">
          <div class="shrink-0 text-center ">
            <Image src="/assets/Exclude3.png" width="77" height="76" alt="" />

            <h3 className="headline4  text-[24px] text-black my-5">Values</h3>
            <p class="text-slate-500  text-[18px]">
              For more than 7 years, LocalNewBusiness has been helping companies
              create unique and powerful identity on the internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
