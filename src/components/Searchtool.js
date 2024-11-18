import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Searchtool.css";
import searchIcon from "../images/search-icon.png";
const Searchtool = ({
  passingScrollHeight,
  inputFocus,
  setSearchHistory,
  searchHistory,
  searchValue,
  searchTool,
}) => {
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const saveSearchedItem = () => {
    let noSameItemSearch = true;
    if (searchHistory.length != 0) {
      searchHistory.forEach((historyItem) => {
        if (historyItem.value === userInput) {
          noSameItemSearch = false;
        }
      });
    }

    if (userInput && noSameItemSearch) {
      navigate(`/searched-product/${userInput}`);
      setSearchHistory((prevHistory) => [
        ...(prevHistory || []),
        { id: searchHistory.length, value: userInput },
      ]);

      // storing the appended search history item in the local storage
      localStorage.setItem(
        "searchHistory",
        JSON.stringify([
          ...(searchHistory || []),
          { id: searchHistory.length, value: userInput } || {
            id: 0,
            value: userInput,
          },
        ])
      );
    }
  };
  const handleEnterBtn = (e) => {
    if (e.key === "Enter") {
      saveSearchedItem();
    }
  };

  useEffect(() => {
    if (inputFocus) {
      //focusing the input box
      inputRef.current.focus();
    }
    if (searchValue) {
      setUserInput(searchValue);
    }
  }, []);

  return (
    <div
      className={
        searchTool && !(passingScrollHeight < 12)
          ? "search-box-fixed-scroll"
          : "search-box"
      }
    >
      <img className="search-icon" src={searchIcon} alt="search_icon"></img>
      <NavLink className="input-box-link" to={`/search/${userInput}`}>
        <input
          ref={inputRef}
          type="text"
          className="input-box"
          placeholder="Search for products "
          value={userInput}
          onChange={handleUserInput}
          onKeyPress={handleEnterBtn}
        ></input>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        onClick={saveSearchedItem}
        className="search-btn-link"
        to={`/searched-product/${userInput}`}
      >
        {" "}
        <button className="search-btn">Search</button>{" "}
      </NavLink>
      <button className="filter-btn">Filter</button>
    </div>
  );
};
export default Searchtool;
