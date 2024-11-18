import "./Homepage.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headerbar from "./components/site-skeleton-comp/Headerbar.js";
import Productcontainer from "./components/Productcontainer.js";
import Bannerbox from "./components/Advertisement-comp/Bannerbox.js";
import BannerImgDiwali1 from "./images/Happy-Diwali1.png";
import Footerbox from "./components/site-skeleton-comp/Footerbox.js";
import Footnavbar from "./components/site-skeleton-comp/Footnavbar.js";
import LoginMsgPop from "./components/credentials/LoginMsgpop.js";
import UseScroll from "./custom-hooks/UseScroll.js";

const Homepage = () => {
  const [closeBtn, setCloseBtn] = useState(false);
  const { searchTool } = UseScroll();
  let [loginDetailsObject, SetLoginDetailsObject] = useState();
  useEffect(() => {
    SetLoginDetailsObject(
      JSON.parse(localStorage.getItem("loginDetailsObject"))
    );
  }, []);

  return (
    <div className="container-box">
      <Headerbar searchTool={searchTool}></Headerbar>
      {!closeBtn && !loginDetailsObject && searchTool && (
        <LoginMsgPop
          setCloseBtn={setCloseBtn}
          closeBtn={closeBtn}
        ></LoginMsgPop>
      )}
      <Bannerbox Img={BannerImgDiwali1}></Bannerbox>
      <Productcontainer></Productcontainer>
      <Footnavbar></Footnavbar>
      <Footerbox></Footerbox>
    </div>
  );
};

export default Homepage;
