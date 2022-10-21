import { Autocomplete, Chip, TextField } from "@mui/material";
import React from "react";
const emails = () => [
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
];

const Emailsender = ({ ondatasubmit }) => {
  // const fixedOptions = [top100Films()[6]];
  //   const [value, setValue] = React.useState([...fixedOptions, top100Films()[13]]);
  const fixedOptions = [];
  const [value, setValue] = React.useState([]);
  return (
    <section class="text-gray-600 body-font ">
      <div class="container shadow-lg rounded-lg mx-auto  lg:px-8 py-12 md:px-4 sm:px-2">
        <div class="w-full lg:px-8 md:px-5 px-5  ">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p class="leading-relaxed mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            ab possimus tempora assumenda deleniti, dignissimos, ut ad velit
            atque quisquam nihil asperiores cupiditate cum enim nisi, eveniet
            et. Cum molestias natus dicta quod excepturi, consequatur non.
          </p>
        </div>

        <div className="lg:py-24 lg:px-32 md: sm:w-full p-2">
          <div className="px-2 lg:px-10 py-10 shadow-lg">
            <Autocomplete
              multiple
              id="email"
              style={{ borderRadius: "50px" }}
              value={value}
              onChange={(event, newValue) => {
                setValue([
                  ...fixedOptions,
                  ...newValue.filter(
                    (option) => fixedOptions.indexOf(option) === -1
                  ),
                ]);
              }}
              options={emails()}
              getOptionLabel={(option) => option.title}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    key=""
                    style={{ borderRadius: "50px" }}
                    label={option.title}
                    {...getTagProps({ index })}
                    disabled={fixedOptions.indexOf(option) !== -1}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} label="Email" placeholder="Type Email" />
              )}
            />
          </div>
          <button
            className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer mt-5"
            onClick={() => ondatasubmit("")}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Emailsender;
