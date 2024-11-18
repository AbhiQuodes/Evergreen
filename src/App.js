import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage.js";
import Loginpage from "./Loginpage.js";
import CartContainer from "./components/footnavbar/CartContainer.js";
import AccountContainer from "./components/footnavbar/AccountContainer.js";
import ContactContainer from "./components/footnavbar/ContactContainer.js";
import SearchedBox from "./components/footnavbar/SearchedBox.js";
import ProductDisplayPage from "./ProductDisplayPage.js";
import ProductDetailInfo from "./ProductDetailInfo.js";

function App() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This makes the scroll smooth
  });

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/cart" element={<CartContainer />} />
      <Route path="/search" element={<SearchedBox />} />
      <Route path="/search/:searchedItem" element={<SearchedBox />} />
      <Route path="/account" element={<AccountContainer />} />
      <Route path="/contact" element={<ContactContainer />} />
      <Route
        path="/searched-product/:product"
        element={<ProductDisplayPage />}
      />
      <Route
        path="/search/searched-product/:product"
        element={<ProductDisplayPage />}
      />
      <Route path="/product-detail-info/:id" element={<ProductDetailInfo />} />
      <Route
        path="/searched-product/:product/product-detail-info/:id"
        element={<ProductDetailInfo />}
      />
      <Route
        path="/cart/product-detail-info/:id"
        element={<ProductDetailInfo />}
      />
    </Routes>
  );
}

export default App;
