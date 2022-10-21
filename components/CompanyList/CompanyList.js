import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { DataGrid } from "@mui/x-data-grid";

import SearchBar from "@mkyy/mui-search-bar";
import SearchModal from "./SearchModal/SearchModal";

const CompanyList = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "companyname", headerName: "Company name", width: 130 },
    { field: "companynumber", headerName: "Company Number", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    {
      field: "creationdate",
      headerName: "Creation Date",
      type: "date",
      width: 130,
    },
    {
      field: "city",
      headerName: "City",

      width: 130,
    },
    {
      field: "postcode",
      headerName: "Post Code",
      width: 130,
    },
    {
      field: "siccode",
      headerName: "Sic Code",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "details",
      headerName: "Details",
      width: 130,
    },
  ];

  const originalRows = [
    {
      id: 1,
      companyname: "RUNNINGWELLCO LTD",
      companynumber: "14247406",
      type: "Ltd",
      creationdate: "2022-07-21",
      city: "London",
      postcode: "NW10 7PQ",
      siccode: "3432",
      status: "Active",
      details: "Icon",
    },
    {
      id: 2,
      companyname: "TECNO",
      companynumber: "14247406",
      type: "Ltd",
      creationdate: "2022-07-21",
      city: "London",
      postcode: "NW10 7PQ",
      siccode: "3432",
      status: "Active",
      details: "Icon",
    },
    {
      id: 3,
      companyname: "SAMSUNG",
      companynumber: "14247406",
      type: "Ltd",
      creationdate: "2022-07-21",
      city: "London",
      postcode: "NW10 7PQ",
      siccode: "3432",
      status: "Active",
      details: "Icon",
    },
    {
      id: 4,
      companyname: "APPLE",
      companynumber: "14247406",
      type: "Ltd",
      creationdate: "2022-07-21",
      city: "London",
      postcode: "NW10 7PQ",
      siccode: "3432",
      status: "Active",
      details: "Icon",
    },
    {
      id: 5,
      companyname: "MICROSOFT",
      companynumber: "14247406",
      type: "Ltd",
      creationdate: "2022-07-21",
      city: "London",
      postcode: "NW10 7PQ",
      siccode: "3432",
      status: "Active",
      details: "Icon",
    },
    {
      id: 6,
      companyname: "HUAWEI",
      companynumber: "14247406",
      type: "Ltd",
      creationdate: "2022-07-21",
      city: "London",
      postcode: "NW10 7PQ",
      siccode: "3432",
      status: "Active",
      details: "Icon",
    },
    {
      id: 7,
      companyname: "NOKIA",
      companynumber: "14247406",
      type: "Ltd",
      creationdate: "2022-07-21",
      city: "London",
      postcode: "NW10 7PQ",
      siccode: "3432",
      status: "Active",
      details: "Icon",
    },
  ];

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.companyname.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  // const cancelSearch = () => {
  //   setSearched("");
  //   requestSearch(searched);
  // };
  return (
    <div>
      <div className="flex flex-col py-2 border-2 px-2 mb-3 shadow-md lg:flex-row ">
        <div className="flex flex-col justify-between w-full lg:w-3/4 lg:flex-row md:flex-row sm:flex-row items-center">
          <div className="w-full flex lg:w-2/4">
            <h6 className="mr-2 text-[15px] font-bold">Compnay List</h6>
            <p className="text-[14px]">2,326 new company found</p>
          </div>
          <div className="flex mr-3 items-center mt-2 lg:mt-0 w-full lg:w-2/4 sm:justify-end px-2">
            <p className="mr-2 text-[14px]">Company list per page</p>
            <select className="border-2 border-solid rounded h-8 ">
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
        </div>

        <div className="flex lg:justify-between items-center w-full lg:w-auto mt-5 lg:mt-0">
          <div className="w-2/4 ">
            <div className="flex border-2 border-solid rounded px-0 py-1 mr-1 h-8 items-center relative lg:px-2 md:justify-between">
              <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                className="Searchbar"
                sx={{
                  "& .css-i4bv87-MuiSvgIcon-root": {
                    display: "none!important",
                  },
                }}
              />

              <button onClick={handleOpen}>
                {" "}
                <TuneIcon className="cursor-pointer" />
              </button>
              <SearchModal
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
            </div>
          </div>
          <div className="w-2/4 lg:w-auto">
            <div className="flex border-2 border-solid rounded px-0 h-8 lg:px-2 ">
              <select className="w-full">
                <option value="">Sort By</option>
                <option>Company Number</option>
                <option>City</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
