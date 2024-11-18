import React, { useState, useEffect, useRef } from "react";
import "./Logintool.css";
import { NavLink, useNavigate } from "react-router-dom";
import backBtnImg from "./../../images/back-btn-img.png";

//using hook useRef to get refrence of Dom elements in react.

const Logintool = () => {
  const navigate = useNavigate();
  const [loginValidityCheck, setLoginValidityCheck] = useState(false);
  const [signUpValidityCheck, setSignUpValidityCheck] = useState(false);
  let loginDetailsObject = localStorage.getItem("loginDetailsObject");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLoginInputName = (e) => {
    setLoginName(e.target.value);
  };
  const handleLoginInputPassword = (e) => {
    setLoginPassword(e.target.value);
  };
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const navigateToHome = () => {
    navigate(`/`);
  };
  // if ((loginName!="" && loginPassword!="") || (name!="" && lastName!="" && password!="" && email!="")) {
  //   if (loginName && loginPassword) setLoginValidityCheck(true);
  //   else setSignUpValidityCheck(true);
  // }

  const handleLogSignBtnClick = (e) => {
    if (!e.target.classList.contains("login-btn")) {
      if (name && lastName && password && email) {
        loginDetailsObject = {
          name: name,
          lastName: lastName,
          password: password,
          email: email,
        };
        localStorage.setItem(
          "loginDetailsObject",
          JSON.stringify(loginDetailsObject)
        );
        navigateToHome();
      }
    } else {
      loginDetailsObject = localStorage.getItem("loginDetailsObject");
      if (loginDetailsObject) {
        if (
          loginName === loginDetailsObject.name &&
          loginPassword === loginDetailsObject.Password
        ) {
          navigateToHome();
        }
      }
    }
  };

  const logBoxRef = useRef();
  const sigBoxRef = useRef();

  let loginBoxDisplay = true;

  const toggleBox = () => {
    if (loginBoxDisplay) {
      logBoxRef.current.style.left = "-300px";
      logBoxRef.current.style.display = "none";
      sigBoxRef.current.style.display = "flex";
      sigBoxRef.current.style.right = "auto";
    } else {
      logBoxRef.current.style.display = "flex";
      logBoxRef.current.style.left = "auto";
      sigBoxRef.current.style.right = "-300px";
      sigBoxRef.current.style.display = "none";
    }
    loginBoxDisplay = !loginBoxDisplay;
  };

  return (
    <div className="login-container">
      <NavLink to="/">
        {" "}
        <img className="back-btn-img" src={backBtnImg} alt="back-btn-img"></img>
      </NavLink>
      {!loginDetailsObject ? (
        <div ref={logBoxRef} className="login-box">
          <h3 className="action-head">Login</h3>
          <input
            type="text"
            className="user-input user-name"
            placeholder="Username"
            onChange={handleLoginInputName}
          ></input>
          <input
            type="password"
            className="user-input log-password"
            placeholder="Password"
            onChange={handleLoginInputPassword}
          ></input>

          <button className="alter-login">Forget Password ?</button>
          <div
            className={`log-sign-page-btn-link ${
              !loginValidityCheck ? "disable-link" : "enable-link"
            }`}
          >
            {" "}
            <button
              onClick={handleLogSignBtnClick}
              className="log-sign-page-btn login-btn"
            >
              Login
            </button>{" "}
          </div>
          <h4 className="member-head">
            Not a Member ?
            <button className="swap-log-sig" onClick={toggleBox}>
              Sign up ?
            </button>
          </h4>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "white" }} className="already-logged-in">
            You are Already logged in Application !
          </h2>
        </div>
      )}

      <div ref={sigBoxRef} className="signup-box">
        <h3 className="action-head">Sign Up</h3>
        <input
          type="text"
          className="user-input first-name"
          placeholder="first Name"
          value={name}
          onChange={handleInputName}
        ></input>
        <input
          type="text"
          className="user-input last-name"
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputLastName}
        ></input>
        <input
          type="email"
          className="user-input email"
          placeholder="Email"
          value={email}
          onChange={handleInputEmail}
        ></input>
        <input
          type="password"
          className="user-input sig-passWord"
          placeholder="Password"
          value={password}
          onChange={handleInputPassword}
        ></input>

        <div
          className={`log-sign-page-btn-link${
            !signUpValidityCheck ? " disable-link" : " enable-link"
          }`}
        >
          {" "}
          <button
            className="log-sign-page-btn signup-btn"
            onClick={handleLogSignBtnClick}
          >
            Sign up
          </button>{" "}
        </div>
        <h4 className="member-head">
          Already a Member ?
          <button className="swap-log-sig" onClick={toggleBox}>
            Login ?
          </button>
        </h4>
      </div>
    </div>
  );
};

export default Logintool;
