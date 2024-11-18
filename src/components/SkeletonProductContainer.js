import react, { useState, useEffect } from "react";
import "./Productcontainer.css";
import SkeletonProductCards from "./SkeletonProductCards.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonProductContainer.css";
const SkeletonProductContainer = () => {
  return (
    <div className="product-container skeleton-product-container">
      <div className="product-box">
        <h3 className="card-category"> </h3>
        <div className="fashion-container">
          <div className="product-category-box">
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
          </div>
        </div>
      </div>

      <div className="product-box">
        <h3 className="card-category"></h3>
        <div className="clothes-container">
          <div className="product-category-box">
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
          </div>
        </div>
      </div>

      <div className="product-box">
        <h3 className="card-category"></h3>
        <div className="technology-container">
          <div className="product-category-box">
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
            <SkeletonProductCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductContainer;
