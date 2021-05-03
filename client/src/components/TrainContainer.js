import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTrains } from "../actions/trainActions";
import { fetchTravellerStore } from "../actions/travellersActions";
import "../Css/TrainContainer.css";
import Train from "./Train";

const TrainContainer = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchTrains();
    props.fetchTravellerStore();
  });
// TODO:
// find a way to connect the two stores to filter trains based on:
//  location, date, finished seats
//   
//   
  return (
    <div className="train-container">
      <h2>Choose a train</h2>
      <div className="train-row">
        {props.trains.map((train) => (
          <Train train={train} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trains: state.trains.trainsStore,
  travellers: state.travellers.travellersStore,
});

export default connect(mapStateToProps, { fetchTrains, fetchTravellerStore })(
  TrainContainer
);
