import React, { useState, useEffect } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import close from "./../../images/close.png";
import "./LoginMsgPop.css";
import { NavLink } from "react-router-dom";

const LoginMsgPop = ({ closeBtn, setCloseBtn }) => {
  const handleCloseBtnClick = () => {
    setCloseBtn(true);
  };
  useLockBodyScroll();
  return (
    <div className="modal-container">
      <div className="login-msg-box">
        <img
          className="close-img"
          src={close}
          alt="cancel"
          onClick={handleCloseBtnClick}
        ></img>
        <h2 className="login-msg-head">Login to Our Store</h2>
        <p className="login-msg-content">
          Login to our online store and start shopping your favourite products
          with
        </p>
        <NavLink className="login-page-link" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default LoginMsgPop;
