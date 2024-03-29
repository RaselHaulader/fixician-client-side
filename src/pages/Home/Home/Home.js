import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Faq from "../Faq/Faq";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Counter></Counter>
      <Faq></Faq>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
