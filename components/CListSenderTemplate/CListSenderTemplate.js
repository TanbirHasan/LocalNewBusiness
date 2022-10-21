import React from "react";
import PreviewIcon from "@mui/icons-material/Preview";

const CListSenderTemplate = ({ ondatasubmit }) => {
  return (
    <div className="py-5 px-3 shadow-lg lg:py-20">
      <div className="flex justify-center mt-5 items-center">
        <span className="mr-3">
          <PreviewIcon />
        </span>
        <h3>Preview</h3>
      </div>
      <div className="mt-5 flex justify-center">
        <img
          src="/assets/ClistsenderTemplate.png"
          width="350"
          height="600"
          alt=""
          className="shadow-lg"
        />
      </div>
      <div className="flex justify-end px-10">
        <button
          className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer mt-5"
          onClick={() => ondatasubmit("")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CListSenderTemplate;
