import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import PhoneContainer from "../PhoneContainer";

const Home = () => {
  const { searchPhone, filteredArray, sortBy, isLoading } = useGlobalContext();

  useEffect(() => {
    sortBy("byName");
  }, [filteredArray]);

  return (
    <main className="home-page-container">
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      />
      <div className="header-of-homepage">
        <h3>Mobile phones</h3>
        <p>
          <span className="number-of-devices">{filteredArray.length}</span>{" "}
          devices found
        </p>
      </div>
      <div className="searchAndSelectContainer">
        <input
          type="text"
          placeholder="Search model"
          className="search-input"
          onChange={(event) => searchPhone(event.target.value)}
        ></input>

        <select
          onChange={(e) => {
            sortBy(e.target.value);
          }}
        >
          <option value="byName">Sort by name ascending</option>
          <option value="lowToHigh">Sort by price low to high</option>
          <option value="highToLow">Sort by price high to low</option>
          <option value="popularity">Sort by popularity</option>
        </select>
      </div>
      <div className="phones-container">
        {isLoading ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <PhoneContainer />
        )}
      </div>
      <div className="line-border"></div>
      <div className="social-icons">
        <p>Follow us on</p>
        <a href="/" className="facebook-icon">
          <i className="uil uil-facebook"></i>
        </a>
        <a href="/" className="instagram-icon">
          <i className="uil uil-instagram"></i>
        </a>
        <a href="/" className="youtube-icon">
          <i className="uil uil-youtube"></i>
        </a>
      </div>
    </main>
  );
};

export default Home;
