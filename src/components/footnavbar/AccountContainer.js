import React, { useState, useEffect, useParams } from "react";
import "./AccountContainer.css";
import Searchtool from "../Searchtool";
import Footerbox from "../site-skeleton-comp/Footerbox.js";
import Footnavbar from "../site-skeleton-comp/Footnavbar.js";
import LoginMsgPop from "../credentials/LoginMsgpop";
import Productcontainer from "./../Productcontainer.js";
import accountUserImg from "./../../images/account-user-img.png";
import { NavLink } from "react-router-dom";

const AccountContainer = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This makes the scroll smooth
  });
  const loginDetailsObject = JSON.parse(
    localStorage.getItem("loginDetailsObject")
  );
  const [closeBtn, setCloseBtn] = useState(false);
  return (
    <div>
      <Searchtool searchTool={true}></Searchtool>
      <div className="account-container">
        <img
          className="account-user-img"
          src={accountUserImg}
          alt="account-user-img"
        ></img>
        <h3 className="account-head-user">
          Hello !{" "}
          {loginDetailsObject
            ? loginDetailsObject.name + " " + loginDetailsObject.lastName
            : "user"}
        </h3>
      </div>
      {!loginDetailsObject && !closeBtn ? (
        <div>
          {" "}
          <LoginMsgPop
            closeBtn={closeBtn}
            setCloseBtn={setCloseBtn}
          ></LoginMsgPop>
          {closeBtn ? <Footerbox></Footerbox> : ""}
        </div>
      ) : (
        <div>
          {" "}
          <div className="account-tools">
            <NavLink style={{ textDecoration: "none" }} to="/cart">
              {" "}
              <div className="order-box account-tool-box">Order</div>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/cart">
              {" "}
              <div className="cart-box account-tool-box">Cart</div>
            </NavLink>
          </div>
          <Productcontainer></Productcontainer>
          <Footerbox></Footerbox>
        </div>
      )}
      <Footnavbar></Footnavbar>
    </div>
  );
};
export default AccountContainer;
