import React from "react";
import "../Css/SearchTrainContainer.css";
import SearchTrainForm from "./SearchTrainForm";

const SearchTrainContainer = () => {
  return (
    <div className="Search-train">
      <div className="hero-image-content">
        <div className="hero-position">
          <h1>train ticketing app</h1>

          <h2>book tickets from the comfort of your homes</h2>
          <SearchTrainForm />
        </div>
      </div>
    </div>
  );
};

export default SearchTrainContainer;
