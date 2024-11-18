import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Headerbar from "./components/site-skeleton-comp/Headerbar";
import Footerbox from "./components/site-skeleton-comp/Footerbox";
import Productcontainer from "./components/Productcontainer";
import "./ProductDisplayPage.css";
import SkeletonDisplayProduct from "./SkeletonDisplayProduct";
import Searchtool from "./components/Searchtool";
const ProductDisplayPage = () => {
  const { product } = useParams();
  const [searchValue, setSearchValue] = useState(product);
  const [isLoader, setIsLoader] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [cartItemData, setCartItemData] = useState([]);
  const [inCart, setInCart] = useState();
  const [cartMsg, setCartMsg] = useState();

  const navigatePath = (e, product) => {
    if (
      !e.target.classList.contains("add-to-cart") &&
      !e.target.classList.contains("already-in-cart")
    ) {
      navigate(`/searched-product/${product}`);
    }
  };
  let getData = [];

  const addToCart = (cartItem) => {
    let inCartCheck = false;
    let storedData = localStorage.getItem("cartItem");
    if (storedData) {
      storedData = JSON.parse(storedData);
      storedData.forEach((item) => {
        if (JSON.stringify(item.value) === JSON.stringify(cartItem)) {
          inCartCheck = true;
          setCartMsg("already in the cart");
          setInCart(cartItem.id);
          setTimeout(() => {
            setInCart("false");
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
      setCartMsg("Added to cart");
      setInCart(cartItem.id);
      setTimeout(() => {
        setInCart("false");
        setCartMsg("");
      }, 2000);
    }
  };

  useEffect(() => {
    setIsLoader(true);
    setCartItemData(() => {
      const storedData = localStorage.getItem("cartItem");
      return storedData ? JSON.parse(storedData) : [];
    });
    const getProducts = async () => {
      const fetchData = await fetch(
        `https://fakestoreapi.com/products/category/${product}`
      );
      getData = await fetchData.json();
      if (product != "clothing") {
        setData(getData.filter((D) => D.category == product));
      } else {
        setData(
          getData.filter((D) => D.category.trim().split(" ")[1] == product)
        );
      }
      setIsLoader(false);
    };
    getProducts();
    window.scrollTo({
      top: 0,
    });
  }, [navigate]);
  return (
    <div>
      <Headerbar searchTool={false} searchValue={searchValue} />
      <div className="product-display-info-container">
        {!isLoader ? (
          data.length != 0 ? (
            data.map((productItem) => {
              return (
                <div
                  onClick={(e) => {
                    navigatePath(
                      e,
                      `${product}/product-detail-info/${productItem.id}`
                    );
                  }}
                  className="product-display-info-box"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className="product-display-info-img"
                    src={productItem.image}
                    alt="product-img"
                  ></img>
                  <div className="product-display-description-box">
                    <h4 className="product-title description-detail">
                      {productItem.title}
                    </h4>
                    <h2 className="product-price description-detail">
                      Price :<b>{productItem.price}</b>
                    </h2>
                    <p className="product-rating description-detail">
                      Rating : <b>{productItem.rating.rate}</b>
                    </p>

                    <div className="description-btn-box">
                      <button
                        className="description-display-btn add-to-cart"
                        onClick={() => {
                          addToCart(productItem);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                    {inCart == productItem.id ? (
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
          ) : (
            <div className="no-product-display-info-box">
              <h4 className="no-data-found">
                Apologies ! No data found in Inventory products related to
                {`  ${product}`}
              </h4>
              <h4 className="no-data-found">
                Please do search from the given below Options!
              </h4>
              <div className="description-display-btn-box">
                <div
                  onClick={(e) => {
                    navigatePath(e, "clothing");
                  }}
                >
                  <button className="description-display-btn">Clothing</button>
                </div>

                <div
                  onClick={(e) => {
                    navigatePath(e, "jewelery");
                  }}
                >
                  <button className="description-display-btn">Jewelery</button>
                </div>

                <div
                  onClick={(e) => {
                    navigatePath(e, "electronics");
                  }}
                >
                  <button className="description-display-btn">
                    electronics
                  </button>
                  {/* </a> */}
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="skeleton-wrapper">
            <SkeletonDisplayProduct />
            <SkeletonDisplayProduct />
            <SkeletonDisplayProduct />
            <SkeletonDisplayProduct />
          </div>
        )}
      </div>
      <Productcontainer />

      {isLoader ? "" : <Footerbox />}
    </div>
  );
};

export default ProductDisplayPage;
