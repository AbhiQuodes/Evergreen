import React, { useState, useEffect } from "react";
import "./SearchedBox.css";
import Footnavbar from "../site-skeleton-comp/Footnavbar";
import Searchtool from "../Searchtool";
import cancelBtn from "./../../images/close.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const SearchedBox = () => {
  const { searchedItem } = useParams();
  const navigate = useNavigate();
  const [searchHistory, setSearchHistory] = useState(() => {
    const storedData = localStorage.getItem("searchHistory");
    return storedData ? JSON.parse(storedData) : [];
  });
  const loginDetailsObject = JSON.parse(
    localStorage.getItem("loginDetailsObject")
  );

  const handleSearchHistoryClick = (product) => {
    navigate(`/searched-product/${product}`);
  };

  const handleDelSearchItem = (id) => {
    let filterSearchHistory = [];
    filterSearchHistory = searchHistory.filter((searchItem) => {
      return searchItem.id != id;
    });
    setSearchHistory(filterSearchHistory);

    //storing the appended search history item in the local storage after deleting the searchHistory Item
    localStorage.setItem("searchHistory", JSON.stringify(filterSearchHistory));
  };

  return (
    <div className="search-product-container">
      <Searchtool
        inputFocus={true}
        setSearchHistory={setSearchHistory}
        searchHistory={searchHistory}
        searchValue={searchedItem}
        searchTool={true}
      ></Searchtool>
      <div className="search-history-container">
        {!loginDetailsObject ? (
          <ul className="search-history-list">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              {" "}
              <div className="search-history-list-item-box">
                <li
                  className="search-history-list-items"
                  style={{ textAlign: "center" }}
                >
                  {" "}
                  Please Log in to use Search history
                </li>
              </div>
            </NavLink>
          </ul>
        ) : searchHistory.length === 0 ? (
          <ul className="search-history-list">
            <div className="search-history-list-item-box">
              <li className="search-history-list-items"> no items Searched</li>
            </div>
          </ul>
        ) : (
          <ul className="search-history-list">
            {searchHistory.map((item) => {
              return (
                <div className="search-history-list-item-box">
                  <li
                    className="search-history-list-items"
                    onClick={() => {
                      handleSearchHistoryClick(item.value);
                    }}
                  >
                    {item.value}
                  </li>
                  <img
                    className="search-history-list-item-del"
                    src={cancelBtn}
                    onClick={() => {
                      handleDelSearchItem(item.id);
                    }}
                  ></img>
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
export default SearchedBox;
