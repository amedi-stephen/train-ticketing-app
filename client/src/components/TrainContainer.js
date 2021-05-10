import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filterTrainDestination } from "../actions/trainActions";
import { fetchTravellers } from "../actions/travellerActions";
import "../Css/TrainContainer.css";
import Train from "./Train";

const TrainContainer = (props) => {
  useEffect(() => {
    props.filterTrainDestination();
    // props.fetchTravellers();
  });
  return (
    <div className="train-container">
      <h2>Choose a train</h2>
      <div className="train-row">
        {props.trains.map(train => (
          <Train train={train} key={train._id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trains: state.trains.trainItems,
  travellers: state.travellers.travellerItems
});

export default connect(mapStateToProps, { filterTrainDestination, fetchTravellers })(
  TrainContainer
);
