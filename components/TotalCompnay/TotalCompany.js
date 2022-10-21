import React from "react";

const TotalCompany = () => {
  return (
    <div>
      <div className="flex py-2 border-2 px-2 mb-3 shadow-md">
        <h6 className="mr-2">Result</h6>
        <p>2,326 new company found</p>
      </div>
      <div className="border-2 flex flex-col justify-items-center items-center py-20">
        <div className="bg-[#3294D133] w-1/4 text-center rounded  mb-5">
          <h2 className="headline1 headline1Res">2,326</h2>
        </div>
        <p className="w-9/12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
          elementum feugiat morbi risus consequat nunc posuere velit.
        </p>
      </div>
    </div>
  );
};

export default TotalCompany;
