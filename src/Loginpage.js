import React from "react";
import Logintool from "./components/credentials/Logintool.js";
const Loginpage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This makes the scroll smooth
  });
  return <Logintool></Logintool>;
};
export default Loginpage;
