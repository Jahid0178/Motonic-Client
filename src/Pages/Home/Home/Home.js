import React from "react";
import Services from "../../Services/Services/Services";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default Home;
