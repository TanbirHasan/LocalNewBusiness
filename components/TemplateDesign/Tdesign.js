import { Button } from "@mui/material";
import React from "react";

const Tdesign = (props) => {
  const { ondatasubmit } = props;
  return (
    <div className="px-5 py-10 shadow-md lg:px-20">
      <div>
        <h5 className="headline6 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h5>
      </div>
      <div className="">
        <div class="tile  relative">
          <input
            type="checkbox"
            name="sports"
            id="sports1"
            className="absolute top-12 left-[18%]"
          />
          <label for="sports1">
            <img
              src="/assets/NewTemplate.png"
              width="250"
              height="auto"
              alt="template"
            />
          </label>
        </div>
      </div>
      <p>Or,</p>
      <div>
        <h5 className="headline6 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h5>
      </div>
      <div className="py-20 px-5 lg:px-0 flex flex-col items-center border-dotted border-2">
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          massa turpis tristique sagittis
        </p>
      </div>
      <div className="flex justify-between">
        <button
          className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer mt-5"
          onClick={ondatasubmit}
        >
          Cancel
        </button>
        <button
          className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer mt-5"
          onClick={() => ondatasubmit("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tdesign;
