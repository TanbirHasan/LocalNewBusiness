import { Divider } from "@mui/material";

import React from "react";
import PrintandPost from "../PrintandPost/PrintandPost";

const SelectOption = (props) => {
  const { ondatasubmit, isShown, setIsShown } = props;
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="shadow-md py-10 w-full lg:w-3/4 mr-2">
        <PrintandPost
          ondatasubmit={ondatasubmit}
          isShown={isShown}
          setIsShown={setIsShown}
        />
      </div>
      <div className="w-full lg:w-1/4 shadow-md px-5 py-10">
        <h5 className="headline5">Charge Details</h5>
        <p className="headline7 mb-5">
          You select 500 company. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <Divider />
        <div className="flex justify-between mt-5">
          <p className="headline7">Print & Post</p>
          <span>$23</span>
        </div>
        <div className="flex justify-between mt-5">
          <p className="headline7">Email</p>
          <span>$10</span>
        </div>
        <div className="flex justify-between mt-5">
          <p className="headline7">Download</p>
          <span>$5</span>
        </div>
        <Divider />
        <button className="bg-[#EEFAF4] text-[13px] py-3 px-2 rounded-md mt-5 text-[#1CD44D]">
          Choose Monthly/Yearly Subbscription
        </button>
        <p className="text-[13px] mt-5">
          In case you are struggling with any of these steps and have any
          confusion, please make sure to contact support@avalon.com We will be
          happy to help you{" "}
        </p>
      </div>
    </div>
  );
};

export default SelectOption;
