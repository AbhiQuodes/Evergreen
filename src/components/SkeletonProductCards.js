import React, { useState, useEffect } from "react";
import "./Productcards.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonProductCards.css";

const skeletonProductCards = () => {
  return (
    <SkeletonTheme
      baseColor="rgba(200, 171, 205, 0.315)"
      highlightColor="rgba(200, 171, 205)"
    >
      <div className="product-cards">
        <div className="product-card-link">
          <div className="skeleton-img">
            <Skeleton width={80} height={80} circle></Skeleton>
          </div>
          <h4 className="product-title">
            <Skeleton height={11} count={3} borderRadius={0} />
          </h4>
          <h2 className="product-price">
            <Skeleton height={14} borderRadius={0} />
          </h2>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default skeletonProductCards;
