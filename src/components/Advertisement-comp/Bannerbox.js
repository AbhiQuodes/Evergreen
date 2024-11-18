import React, { usestate, useEffect } from "react";
import "./Bannerbox.css";

const Bannerbox = (props) => {
  return (
    <div className="Banner-container">
      <img className="banner-img" src={props.Img} alt="banner-img"></img>
    </div>
  );
};

export default Bannerbox;
