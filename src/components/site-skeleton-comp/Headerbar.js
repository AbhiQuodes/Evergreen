import React, { useState, useEffect, useRef } from "react";
import location_icon from "./../../images/location-icon.png";
import login_icon from "./../../images/login-icon.png";
import cart_icon from "./../../images/cart-icon.png";
import brand_name from "./../../images/brand-name-img.png";
import "./Headerbar.css";
import Searchtool from "../Searchtool.js";
import "./Headerbar.css";
import { NavLink } from "react-router-dom";
const Headerbar = ({ searchTool, searchValue }) => {
  return (
    <div>
      {searchTool ? (
        <Searchtool
          passingScrollHeight={window.scrollY}
          searchTool={searchTool}
          searchValue={searchValue}
        ></Searchtool>
      ) : (
        <div className="head-container">
          <div className="logo-box">
            {/* <a href='#'  className="brand-name"> */}
            <img src={brand_name} className="brand-name" alt="Evergreen"></img>
            <img
              className="map-img"
              src={location_icon}
              alt="location-icon"
            ></img>
            {/* </a>  */}
            <ul className="head-list">
              <NavLink to="/" className="head-list-items-links">
                <li className="head-list-items">Home</li>
              </NavLink>
              <NavLink to="/cart" style={{ textDecoration: "none" }}>
                <li className="head-list-items">
                  <img
                    className="cart-icon"
                    src={cart_icon}
                    alt="cart-icon"
                  ></img>
                  <a className="head-list-items-links">Cart</a>
                </li>
              </NavLink>
            </ul>
          </div>

          <Searchtool
            passingScrollHeight={window.scrollY}
            searchTool={searchTool}
            searchValue={searchValue}
          ></Searchtool>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <button className="log-sign-btn">
              {" "}
              <img
                className="login-icon"
                src={login_icon}
                alt="location-icon"
              ></img>
              login/sign-up
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Headerbar;
