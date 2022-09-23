import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutUsSecond from "../components/AboutUsSecond/AboutUsSecond";
import Banner from "../components/Banner/Banner";
import Conversation from "../components/Conversation/Conversation";
import DashboardSlider from "../components/DashboardSlider/DashboardSlider";
import FindCompanies from "../components/FindCompanies/FindCompanies";
import Footer from "../components/Footer/Footer";
import HowitWorks from "../components/HowitWorks/HowitWorks";
import Navbar from "../components/Navbar";
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
      <AboutUs />
      <AboutUsSecond />
      <Conversation />

      <Footer />
    </>
  );
};

export default Home;
