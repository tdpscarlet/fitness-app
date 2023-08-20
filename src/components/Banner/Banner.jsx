import React from "react";
import "./banner.scss";
import banner from "../../assets/images/banner.png";
import rightArrow from "../../assets/svg/right-arrow.svg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <span className="banner-title">Change your</span>
        <span className="banner-title blue">habits</span>
        <span className="banner-title">Level up your</span>
        <span className="banner-title yellow">life quality</span>
        <span className="banner-subtitle">
          always take care of your daily habits, make your life more healty,
          more fit
        </span>
        <button className="banner-btn">
          Get Started <img src={rightArrow} alt="" />
        </button>
        <span className="text-behind">Good Habbits good life</span>
      </div>
      <img className="banner-image" src={banner} alt="banner" />
    </div>
  );
}

export default Banner;
