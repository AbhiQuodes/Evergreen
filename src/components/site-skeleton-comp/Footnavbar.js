import React, { usestate, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "./Footnavbar.css";
import homeIcon from "./../../images/Home-icon.png";
import accounticon from "./../../images/account-icon.png";
import searchIcon from "./../../images/search-icon.png";
import cartIcon from "./../../images/cart-icon.png";
import contactIcon from "./../../images/contact-icon.png";

const Footnavbar = () => {
  const location = useLocation();
  const data = [
    {
      name: "Home",
      path: "/",
      icon: homeIcon,
    },
    {
      name: "You",
      path: "/account",
      icon: accounticon,
    },
    {
      name: "Search",
      path: "/search",
      icon: searchIcon,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: cartIcon,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: contactIcon,
    },
  ];
  return (
    <div className="foot-nav-box">
      <ul className="foot-nav-list">
        {data.map((d) => {
          return (
            <NavLink
              className="foot-nav-list-items-links"
              to={d.path}
              key={d.path}
            >
              <li
                className={`foot-nav-list-items ${
                  location.pathname === d.path ? "foot-active" : ""
                }`}
              >
                <img className="foot-nav-icons" src={d.icon}></img>
                {d.name}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
export default Footnavbar;
