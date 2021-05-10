import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTravellers } from "../actions/travellerActions";
import "../Css/SearchTrainContainer.css";
import SearchTrainForm from "./SearchTrainForm";

const SearchTrainContainer = (props) => {
  useEffect(() => {
    props.fetchTravellers();
  });
  return (
    <div className="Search-train">
      <div className="hero-image-content">
        <div className="hero-position">
          <div className="heading">
            <h1>train ticketing app</h1>

            <h4>book tickets from the comfort of your homes</h4>
          </div>
          <SearchTrainForm />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clients: state.travellers.travellerItems,
});

export default connect(mapStateToProps, { fetchTravellers })(
  SearchTrainContainer
);
