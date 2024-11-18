import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Headerbar from "./components/site-skeleton-comp/Headerbar.js";
import Footerbox from "./components/site-skeleton-comp/Footerbox.js";
import Productcontainer from "./components/Productcontainer.js";
import "./components/Productcards.css";
import "./ProductDetailInfo.css";
import SkeletonProductDetailInfo from "./SkeletonProductDetailInfo.js";
import Searchtool from "./components/Searchtool.js";
const ProductDetailInfo = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [cartItemData, setCartItemData] = useState();
  const [inCart, setInCart] = useState(false);
  const [cartMsg, setCartMsg] = useState();

  const addToCart = (cartItem) => {
    let inCartCheck = false;
    let storedData = localStorage.getItem("cartItem");
    if (storedData) {
      storedData = JSON.parse(storedData);
      storedData.forEach((item) => {
        if (JSON.stringify(item.value) === JSON.stringify(cartItem)) {
          setInCart(true);
          inCartCheck = true;
          setCartMsg("already in the cart");
          setTimeout(() => {
            setInCart(false);
          }, 2000);
        }
      });
    }
    if (!inCartCheck) {
      setCartItemData((prevItem) => [
        ...(prevItem || []),
        { id: cartItem.id, value: cartItem },
      ]);
      localStorage.setItem("cartItem", [
        ...cartItemData,
        JSON.stringify({
          id: cartItem.id,
          value: cartItem,
        }),
      ]);
      localStorage.setItem(
        "cartItem",
        JSON.stringify([
          ...(cartItemData || []),
          {
            id: cartItem.id,
            value: cartItem,
          },
        ])
      );
      setInCart(true);
      setCartMsg("Added to cart");
      setTimeout(() => {
        setInCart(false);
      }, 2000);
    }
  };

  const buyProduct = () => {
    alert(
      "Thank You for your Interest ! Currently, purchases are temporarily unavailable . We apologize for any inconvenience and appeciate your patience. "
    );
  };

  useEffect(() => {
    setIsLoader(true);
    setCartItemData(() => {
      const storedData = localStorage.getItem("cartItem");
      return storedData ? JSON.parse(storedData) : [];
    });
    const getProducts = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      let data = await fetchData.json();
      data = data.filter((p) => p.id == id);
      setProductList(data);
      setIsLoader(false);
    };
    getProducts();
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  return (
    <div>
      <Headerbar searchTool={false}></Headerbar>
      <div className="product-detail-info-container">
        {isLoader ? (
          <SkeletonProductDetailInfo />
        ) : (
          productList.map((product) => {
            return (
              <div className="product-detail-info-box">
                <img
                  className="product-detail-info-img"
                  src={product.image}
                  alt="product-img"
                ></img>
                <div className="product-description-box">
                  <h4 className="product-title description-detail">
                    {product.title}
                  </h4>
                  <h2 className="product-price description-detail">
                    Price :<b>${product.price}</b>
                  </h2>
                  <p className="product-rating description-detail">
                    Rating : <b>{product.rating.rate}</b>
                  </p>

                  <h4 className="product-description description-detail">
                    {product.description}
                  </h4>
                  <div className="description-btn-box">
                    <button onClick={buyProduct} className="description-btn">
                      Buy Now
                    </button>
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="description-btn"
                    >
                      Add to Cart
                    </button>
                  </div>
                  {inCart ? (
                    <NavLink to="/cart" style={{ textDecoration: "none" }}>
                      <h4 className="already-in-cart">{cartMsg}</h4>
                    </NavLink>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      <a style={{ textDecoration: "none" }} href="#">
        <Productcontainer />
      </a>
      <Footerbox />
    </div>
  );
};

export default ProductDetailInfo;
