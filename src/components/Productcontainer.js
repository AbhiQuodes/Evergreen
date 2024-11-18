import react, { useState, useEffect } from "react";
import "./Productcontainer.css";
import Productcards from "./Productcards.js";
import SkeletonProductContainer from "./SkeletonProductContainer.js";
const Productcontainer = () => {
  const [productList, setProductList] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const getProducts = async () => {
        const fetchData = await fetch("https://fakestoreapi.com/products");
        const data = await fetchData.json();
        setProductList(data);
        setIsLoader(false);
      };
      getProducts();
    }, 100);
  }, []);

  //filter function is very important in practical use!!!
  const filterByCategory = (categoriee) => {
    return productList.filter((p) => {
      if (categoriee != "clothing") {
        return p.category === categoriee;
      } else {
        return p.category.trim().split(" ")[1] === categoriee;
      }
    });
  };

  return (
    <div>
      {isLoader ? (
        <SkeletonProductContainer />
      ) : (
        <div className="product-container">
          <div className="product-box">
            <h3 className="card-category">Premium Products</h3>
            <div className="fashion-container">
              <Productcards data={filterByCategory("jewelery")}></Productcards>
            </div>
          </div>

          <div className="product-box">
            <h3 className="card-category">Fashion Products</h3>
            <div className="clothes-container">
              <Productcards data={filterByCategory("clothing")}></Productcards>
            </div>
          </div>

          <div className="product-box">
            <h3 className="card-category">Electronics Products</h3>
            <div className="technology-container">
              <Productcards
                data={filterByCategory("electronics")}
              ></Productcards>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productcontainer;
