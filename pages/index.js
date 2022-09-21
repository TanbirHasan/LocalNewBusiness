import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div>Welcome to Local new Business</div>
      <Footer />
    </>
  );
};

export default index;
