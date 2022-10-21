import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TotalCompany from "../TotalCompnay/TotalCompany";

import CompanyList from "../CompanyList/CompanyList";
import SelectOption from "../SelectOption/SelectOption";

import Tdesign from "../TemplateDesign/Tdesign";
import CompnayListSender from "../CompanyListSender/CompnayListSender";
import Emailsender from "../Emailsender/Email";
import CListSenderTemplate from "../CListSenderTemplate/CListSenderTemplate";

const steps = ["Number of Company", "Company List", "Select Option", "Payment"];

const Result = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isShown, setIsShown] = React.useState(false);
  const [dataT, setData] = React.useState("");

  const { onSubmit } = props;

  // receiving data for changing component in select option step

  const ondatasubmit = (data) => {
    if (data === "next") {
      console.log(data);
      setData(data);
    } else if (data === "email") {
      console.log(data);
      setData(data);
    } else if (data === "displaytemplate") {
      console.log(data);
      setData(data);
    } else {
      setData(data);
      setIsShown((current) => !current);
    }
  };

  // stepper step functionality

  const isStepActive = (step) => {
    return step === 0;
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  console.log(activeStep);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Reseting Stepper back to default state

  const handleReset = () => {
    setActiveStep(0);
  };

  // function for switching component in eact stepper

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <TotalCompany />;

      case 1:
        return <CompanyList />;
      case 2:
        if (isShown && dataT == "printandpost") {
          return <Tdesign ondatasubmit={ondatasubmit} />;
        } else if (dataT == "next") {
          return <CompnayListSender ondatasubmit={ondatasubmit} />;
        } else if (dataT == "email") {
          return <Emailsender ondatasubmit={ondatasubmit} />;
        } else if (dataT == "displaytemplate") {
          return <CListSenderTemplate ondatasubmit={ondatasubmit} />;
        } else {
          return (
            <SelectOption
              ondatasubmit={ondatasubmit}
              isShown={isShown}
              setIsShown={setIsShown}
            />
          );
        }

      default:
        return "Payment components coming soon";
    }
  }

  return (
    <div className="px-5 pt-20 lg:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper
          activeStep={activeStep}
          className="grid justify-items-center grid-cols-4 "
          connector={null}
          sx={{
            "& .css-qivjh0-MuiStepLabel-label.Mui-active": {
              color: "#D16F32",
            },
            "& .css-1bw0nnu-MuiStep-root": {
              padding: "20px 0px ",
              flexShrink: 1,
            },
          }}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption"></Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step
                key={label}
                {...stepProps}
                className="py-5 px-0 lg:px-5 border-solid border-2 w-full "
              >
                <StepLabel
                  {...labelProps}
                  className="ml-0 lg:ml-[60px] flex-col text-center lg:flex-row w-full justify-center"
                >
                  <span className="text-[8px] sm:text-[12px] lg:text-[14px] flex justify-center lg:justify-start mt-3 lg:mt-0">
                    {label}
                  </span>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <div className="mt-5 ">
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box>
              <Box />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </div>
        ) : (
          <div className="">
            <Typography sx={{ mt: 2, mb: 1 }}>
              {getStepContent(activeStep)}
              {/* {activeStep + 1} */}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: 2,

                justifyContent: "space-between",
              }}
            >
              {activeStep === 0 ? (
                <button
                  color="inherit"
                  className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer"
                  onClick={onSubmit}
                  sx={{ mr: 1 }}
                >
                  Back
                </button>
              ) : (
                <button
                  color="inherit"
                  className="rounded px-3 py-2 border-2 border-[#D16F32] text-[#D16F32] cursor-pointer"
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </button>
              )}

              <Box />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

              <button
                onClick={handleNext}
                className="headline6 bg-[color:var(--form-button-color)] text-white cursor-pointer my-5 border-none py-2 px-5 rounded"
              >
                {activeStep === steps.length - 1
                  ? "Finish"
                  : "Continue To Next Step"}
              </button>
            </Box>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Result;
