import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonDisplayProduct.css";
const SkeletonDisplayProduct = () => {
  return (
    <SkeletonTheme
      baseColor="rgba(200, 171, 205, 0.315)"
      highlightColor="rgba(200, 171, 205)"
    >
      <div
        className="product-display-info-box"
        style={{ textDecoration: "none" }}
      >
        <div className="product-display-description-box">
          <h4 className="product-title description-detail">
            <Skeleton circle width={100} height={100} />
          </h4>
          <h2 className="product-price description-detail">
            <Skeleton height={20} />
          </h2>
          <p className="product-rating description-detail">
            <Skeleton height={20} />
          </p>

          <div className="description-btn-box">
            <Skeleton height={20} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonDisplayProduct;
