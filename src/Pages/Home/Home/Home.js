import React from "react";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default Home;
