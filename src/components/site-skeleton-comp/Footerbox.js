import React, { useState, useEffect } from "react";
import "./Footerbox.css";

const Footerbox = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // This makes the scroll smooth
    });
  };

  return (
    <div>
      <div className="back-to-top" onClick={backToTop}>
        {" "}
        Back To Top{" "}
      </div>
      <div className="foot-container">
        <div className="About-box box">
          <h3 className="footer-box-name">About us</h3>
          <ul className="footer-box-unordered-list">
            <li className="footer-box-unordered-list-items">details lorem</li>
            <li className="footer-box-unordered-list-items">
              payment methods icon
            </li>
            <li className="footer-box-unordered-list-items">
              lock-icon Security Payment
            </li>
          </ul>
        </div>

        <div className="category-box box">
          <h3 className="footer-box-name">Categories</h3>
          <ul className="footer-box-unordered-list">
            <li className="footer-box-unordered-list-items">Clothing</li>
            <li className="footer-box-unordered-list-items"> Electronics</li>
            <li className="footer-box-unordered-list-items"> Footwear</li>
            <li className="footer-box-unordered-list-items">Jewellery</li>
            <li className="footer-box-unordered-list-items">Belt</li>
          </ul>
        </div>

        <div className="information-box box">
          <h3 className="footer-box-name">Informations</h3>
          <ul className="footer-box-unordered-list">
            <li className="footer-box-unordered-list-items"> About us</li>
            <li className="footer-box-unordered-list-items"> Contact us</li>
            <li className="footer-box-unordered-list-items">
              Terms & Condition
            </li>
            <li className="footer-box-unordered-list-items">
              Return & Exchange
            </li>
            <li className="footer-box-unordered-list-items">
              Shipping & Delivery
            </li>
            <li className="footer-box-unordered-list-items">Private Policy</li>
          </ul>
        </div>

        <div className="Contact-box box">
          <h3 className="footer-box-name">Contact</h3>
          <ul className="footer-box-unordered-list">
            <li className="footer-box-unordered-list-items">details lorem</li>
            <li className="footer-box-unordered-list-items">Office address</li>
            <li className="footer-box-unordered-list-items">
              Social media icons
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footerbox;
