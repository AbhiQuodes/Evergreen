import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactContainer.css";
import Footnavbar from "../site-skeleton-comp/Footnavbar.js";
import LoginMsgPop from "../credentials/LoginMsgpop.js";
import Headerbar from "../site-skeleton-comp/Headerbar.js";
import Footerbox from "../site-skeleton-comp/Footerbox.js";
import { NavLink } from "react-router-dom";

const ContactContainer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertt, setalertt] = useState("");
  const loginDetailsObject = JSON.parse(
    localStorage.getItem("loginDetailsObject")
  );

  const sendResponseEmail = (e) => {
    if (email && message) {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_lgvir2j",
          "template_pd6dqar",
          e.target,
          "cLdebBPtnShamwbpz"
        )
        .then(
          (result) => {},
          (error) => {
            alertt("Some Error Occured" + error.text);
          }
        );
    }
  };

  const sendInitialEmail = (e) => {
    if (email && message) {
      sendResponseEmail(e);
      setalertt("Sending Email...");
      e.preventDefault();
      emailjs
        .sendForm(
          "service_lgvir2j",
          "template_txobfh5",
          e.target,
          "cLdebBPtnShamwbpz"
        )
        .then(
          (result) => {
            setalertt("Email Sent Successfully!");
            setEmail("");
            setMessage("");
            setTimeout(() => {
              setalertt("");
            }, 3000);
          },
          (error) => {
            alert("Some Error Occured" + error.text);
            setalertt("");
          }
        );
    }
  };

  return (
    <div>
      {!loginDetailsObject ? (
        <div>
          <Headerbar></Headerbar>
          <div className="contact-login-box">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              {" "}
              <h2>Please login to Contact us !</h2>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="contact-page">
          <div className="contact-container">
            <div className="page-heading">
              <h2 className="font-bold">Contact us</h2>
              <hr />
            </div>
            <div className="contact-box">
              <form className="contact-box-form" onSubmit={sendInitialEmail}>
                <h4 className="contact-head">Quick Contact</h4>
                {alertt && <div color="success">{alertt}</div>}
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-id-input"
                ></input>

                <input
                  type="text"
                  name="from_name"
                  value={loginDetailsObject.name}
                  className="email-id-input display-none"
                  style={{ display: "none" }}
                ></input>

                <input
                  className="email-msg-input"
                  type="textarea"
                  placeholder="message"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></input>
                <div className="btn-box">
                  <button className="email-submit-btn">Submit</button>
                </div>

                <div className="msg-display-box">
                  <p>
                    We value your feedback and suggestions! If you have any
                    questions, comments, or inquiries, please do not hesitate to
                    reach out to us. Our team is here to assist you.
                  </p>
                </div>
              </form>
            </div>
          </div>
          <Footnavbar />
        </div>
      )}
    </div>
  );
};

export default ContactContainer;
