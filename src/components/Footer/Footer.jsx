import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <span className="footerTitle">
        HI! How can <span className="yellow">we help </span>you?
      </span>
      <span className="footerDesc">
        subscribe your email to get special offering from us
      </span>
      <div className="footerInput">
        <input type="text" placeholder="enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
