import React, { useState, useEffect } from "react";
import "./CartContainer.css";
import Footnavbar from "../site-skeleton-comp/Footnavbar";
import Headerbar from "../site-skeleton-comp/Headerbar";
import { NavLink, useNavigate } from "react-router-dom";
const CartContainer = () => {
  window.scrollTo({
    top: 0,
    // This makes the scroll smooth
  });
  const navigate = useNavigate();
  const navigatePath = (e, path) => {
    if (!e.target.classList.contains("remove-btn")) navigate(path);
  };
  const loginDetailsObject = JSON.parse(
    localStorage.getItem("loginDetailsObject")
  );
  const [totalPrice, setTotalPrice] = useState();
  const [cartItemData, setCartItemData] = useState(() => {
    const storedData = localStorage.getItem("cartItem");
    return storedData ? JSON.parse(storedData) : [];
  });
  useEffect(() => {
    let cost = 0;
    cartItemData.forEach((item) => {
      cost = cost + item.value.price;
    });
    setTotalPrice(cost);
  }, [cartItemData]);

  const handleDelCartItem = (id) => {
    let filterCartItem = [];
    filterCartItem = cartItemData.filter((cartItem) => {
      return cartItem.id != id;
    });
    setCartItemData(filterCartItem);

    //storing the appended search history item in the local storage after deleting the searchHistory Item
    localStorage.setItem("cartItem", JSON.stringify(filterCartItem));
  };

  return (
    <div>
      <Headerbar />
      <div className="cart-container">
        {!loginDetailsObject ? (
          <ul className="cart-list-item-container">
            <NavLink to={`/login`} style={{ textDecoration: "none" }}>
              {" "}
              <div className="cart-list-item-box">
                <li
                  className="cart-list-item"
                  style={{ textAlign: "center", listStyle: "none" }}
                >
                  Please Log in to view Added Cart Product
                </li>
              </div>
            </NavLink>
          </ul>
        ) : cartItemData.length == 0 ? (
          <ul className="cart-list-item-container">
            <div className="cart-list-item-box">
              <li className="no-cart-list-items">
                {" "}
                no items added to the Cart
              </li>
            </div>
          </ul>
        ) : (
          <ul className="cart-list-item-container">
            {totalPrice ? (
              <div className="total-price"> SubTotal : ${totalPrice}</div>
            ) : (
              ""
            )}
            {cartItemData.map((item) => {
              return (
                <div
                  onClick={(e) => {
                    navigatePath(e, `/product-detail-info/${item.id}`);
                  }}
                  className="cart-list-item-box"
                >
                  <img
                    src={item.value.image}
                    className="cart-list-items-img"
                    alt="product-image"
                  ></img>
                  <div className="cart-list-item-description">
                    <li className="cart-list-items">{item.value.title}</li>
                    <li className="cart-list-items">
                      Price :<b>${item.value.price}</b>
                    </li>
                    <li className="cart-list-items">
                      Rating :<b>{item.value.rating.rate}</b>
                    </li>
                    <button
                      className="cart-list-items-del remove-btn"
                      onClick={() => {
                        handleDelCartItem(item.id);
                      }}
                    >
                      {" "}
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        )}
      </div>
      <Footnavbar></Footnavbar>
    </div>
  );
};
export default CartContainer;
