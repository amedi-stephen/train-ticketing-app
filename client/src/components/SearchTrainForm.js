import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { postTravellerDetails } from "../actions/travellerActions";
import PropTypes from "prop-types";
import "../Css/SearchTrainForm.css";

const SearchTrainForm = (props) => {
  let history = useHistory();
  const [trainDetails, setTrainDetails] = useState({
    trainType: "",
    locationFrom: "",
    locationTo: "",
    adults: "",
    children: "",
    infants: "",
    class: "",
    departureDate: "",
  });

  const handleChange = (e) => {
    setTrainDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setTrainDetails({
      trainType: "",
      locationFrom: "",
      locationTo: "",
      adults: "",
      children: "",
      infants: "",
      class: "",
      departureDate: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trainDestinationDetails = {
      trainType: trainDetails.trainType,
      locationFrom: trainDetails.locationFrom,
      locationTo: trainDetails.locationTo,
      adults: trainDetails.adults,
      children: trainDetails.children,
      infants: trainDetails.infants,
      class: trainDetails.class,
      departureDate: trainDetails.departureDate,
    };

    props.postTravellerDetails(trainDestinationDetails);

    handleReset();

    history.push("/trains");
  };
  return (
    <form className="Search-field" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="trainType">Train Type</label>
        <select
          name="trainType"
          onChange={handleChange}
          value={trainDetails.trainType}
          required
        >
          <option value="">Select...</option>
          <option value="inter-county">Inter County</option>
          <option value="express">Express</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="locationFrom">From</label>
        <select
          name="locationFrom"
          onChange={handleChange}
          value={trainDetails.locationFrom}
        >
          <option value="">Select...</option>
          <option value="nairobi">Nairobi Terminus</option>
          <option value="mombasa">Mombasa Terminus</option>
          <option value="voi">Voi</option>
          <option value="mtito andei">Mtito Andei</option>
          <option value="mariakani">Mariakani</option>
          <option value="miaseny">Miaseny</option>
          <option value="kibwezi">Kibwezi</option>
          <option value="emali">Emali</option>
          <option value="athi river">Athi River</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="locationTo">To</label>
        <select
          name="locationTo"
          onChange={handleChange}
          value={trainDetails.locationTo}
        >
          <option value="">Select...</option>
          <option value="nairobi">Nairobi Terminus</option>
          <option value="mombasa">Mombasa Terminus</option>
          <option value="voi">Voi</option>
          <option value="mtito andei">Mtito Andei</option>
          <option value="mariakani">Mariakani</option>
          <option value="miaseny">Miaseny</option>
          <option value="kibwezi">Kibwezi</option>
          <option value="emali">Emali</option>
          <option value="athi river">Athi River</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="adult">Adults</label>
        <input
          type="number"
          placeholder="How many adults"
          name="adults"
          onChange={handleChange}
          value={trainDetails.adults}
        />
      </div>

      <div className="form-group">
        <label htmlFor="children">Children</label>
        <input
          type="number"
          placeholder="How many children(12 - 17 years)"
          name="children"
          onChange={handleChange}
          value={trainDetails.children}
        />
      </div>

      <div className="form-group">
        <label htmlFor="infants">Infants</label>
        <input
          type="number"
          placeholder="How many children (3 - 7 years)"
          name="infants"
          onChange={handleChange}
          value={trainDetails.infants}
        />
      </div>

      <div className="form-group">
        <label htmlFor="class">Coach Class</label>
        <select name="class" onChange={handleChange} value={trainDetails.class}>
          <option value="">Select...</option>
          <option value="first class">First Class</option>
          <option value="economy">Economy</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="departureDate">departure date</label>
        <input
          type="date"
          name="departureDate"
          onChange={handleChange}
          value={trainDetails.departureDate}
        />
      </div>

      <button type="submit" className="button-hero-lg">
        Make Reservation
      </button>
    </form>
  );
};

export default connect(null, { postTravellerDetails })(SearchTrainForm);
