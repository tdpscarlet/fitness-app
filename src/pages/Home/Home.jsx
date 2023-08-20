import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Content from "../../components/Content/Content";
import "./home.scss";

function Home() {
  return (
    <div className="header">
      <div className="wrapper header-wrapper">
        <NavBar />
        <Banner />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
