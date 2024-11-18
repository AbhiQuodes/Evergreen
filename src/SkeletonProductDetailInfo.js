import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonProductDetailInfo = () => {
  return (
    <div>
      <SkeletonTheme
        baseColor="rgba(200, 171, 205, 0.315)"
        highlightColor="rgba(200, 171, 205)"
      >
        <div className="product-detail-info-box">
          <div>
            <Skeleton circle width={250} height={250} />
          </div>
          <div className="product-description-box">
            <h4 className="product-title description-detail">
              {" "}
              <Skeleton />
            </h4>
            <h2 className="product-price description-detail">
              <Skeleton height={20} />
            </h2>
            <p className="product-rating description-detail">
              <Skeleton count={5} height={20} />
            </p>

            <h4 className="product-description description-detail">
              <Skeleton height={50} />
            </h4>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonProductDetailInfo;
