import React, { useState, useEffect } from "react";
import "./Productcards.css";
import { NavLink } from "react-router-dom";

const Productcards = (prop) => {
  const dataSet = prop.data;
  return (
    <div className="product-category-box">
      {dataSet.map((data) => {
        return (
          <div className="product-cards">
            <NavLink
              to={`/product-detail-info/${data.id}`}
              className="product-card-link"
            >
              {" "}
              <img
                className="product-img"
                src={data.image}
                alt="product-img"
              ></img>
              <h4 className="product-title">{data.title}</h4>
              <h2 className="product-price">
                Price :<b>${data.price}</b>
              </h2>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Productcards;
