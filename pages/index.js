import React from "react";
import Banner from "../components/Banner/Banner";
import DashboardSlider from "../components/DashboardSlider/DashboardSlider";
import FindCompanies from "../components/FindCompanies/FindCompanies";
import Footer from "../components/Footer/Footer";
import HowitWorks from "../components/HowitWorks/HowitWorks";
import Navbar from "../components/Navbar";
import PrintandPost from "../components/PrintandPost/PrintandPost";

const index = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FindCompanies />
      <PrintandPost />
      <DashboardSlider />
      <HowitWorks />

      <Footer />
    </>
  );
};

export default index;
