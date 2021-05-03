import React, { useState } from "react";
import { createDestination } from "../actions/travellersActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../Css/SearchTrainForm.css";

const SearchTrainForm = (props) => {
  const [trainDetails, setTrainDetails] = useState({
    trainType: "",
    locationFrom: "",
    locationTo: "",
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
      departureDate: "",
    });
  };

  const handleSubmit = (e) => {
    //FIXME: fix this if page submit and fails to show the trains page
    e.preventDefault();

    const trainDestinationDetails = {
      trainType: trainDetails.trainType,
      locationFrom: trainDetails.locationFrom,
      locationTo: trainDetails.locationTo,
      departureDate: trainDetails.departureDate,
    };

    props.createDestination(trainDestinationDetails);

    // TODO: clear forms after submission
    handleReset();
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
        <label htmlFor="departureDate">departure date</label>
        <input
          type="date"
          name="departureDate"
          onChange={handleChange}
          value={trainDetails.departureDate}
        />
      </div>

      <button type="submit" className="button-hero-lg">
        Search
      </button>
    </form>
  );
};

SearchTrainForm.propTypes = {
  searchTrain: PropTypes.func.isRequired,
};

export default connect(null, { createDestination })(SearchTrainForm);
