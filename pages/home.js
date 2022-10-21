import React, { useState } from "react";
import AboutUsSecond from "../components/AboutUsSecond/AboutUsSecond";
import Banner from "../components/Banner/Banner";

import Conversation from "../components/Conversation/Conversation";
import DashboardSlider from "../components/DashboardSlider/DashboardSlider";
import FindCompanies from "../components/FindCompanies/FindCompanies";
import Footer from "../components/Footer/Footer";
import HomeAboutUs from "../components/HomeAboutUs/HomeAboutUs";
import HowitWorks from "../components/HowitWorks/HowitWorks";
import Navbar from "../components/Navbar/Navbar";

import PrintandPost from "../components/PrintandPost/PrintandPost";
import Result from "../components/Result/Result";

const Home = () => {
  const [isShown, setIsShown] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    setIsShown((current) => !current);
  };

  return (
    <>
      <Navbar />
      <Banner onSubmit={onSubmit} isShown={isShown} setIsShown={setIsShown} />
      {isShown ? (
        <>
          <Result
            onSubmit={onSubmit}
            isShown={isShown}
            setIsShown={setIsShown}
          />
        </>
      ) : (
        <>
          <FindCompanies />
          <PrintandPost />
          <DashboardSlider />
          <HowitWorks />
          <HomeAboutUs />
          <AboutUsSecond />
          <Conversation />
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
