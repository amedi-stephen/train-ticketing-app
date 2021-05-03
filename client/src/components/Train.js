import React from "react";
import { connect } from "react-redux";
import { createDestination } from "../actions/travellersActions";
import "../Css/Train.css";

const Train = ({train}) => {

  return (
    <div className="train-card">
      <div className="train-header">
        <h3>Train {train.trainName} - {train.from} Terminus to {train.destination}</h3>
      </div>
      <div className="train-body">
        <div className="first-class-info">
          <p>First class - {train.firstClass} seats open </p>
          <p>Adults: kshs. 3000 </p>
          <p>Children (btwn 3 - 11yrs):kshs. 1500 </p>
          <p>Children (below 3 yrs): Free</p>
        </div>
        <hr />
        <div className="economy-class-info">
          <p>Economy - {train.economyClass} seats open </p>
          <p>Adults: kshs. 1000 </p>
          <p>Children (btwn 3 - 11yrs):kshs. 500 </p>
          <p>Children (below 3 yrs): Free</p>
        </div>
        <small>
          <span style={{ marginRight: "5%" }}>Departure: 02:35</span>
          <span>Arrival: 07:18</span>
        </small>

        <button>Choose Train</button>
      </div>
    </div>
  );
};

export default connect(null, { createDestination })(Train);
