import React from "react";
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

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FindCompanies />
      <PrintandPost />
      <DashboardSlider />
      <HowitWorks />
      <HomeAboutUs />
      <AboutUsSecond />
      <Conversation />

      <Footer />
    </>
  );
};

export default Home;
