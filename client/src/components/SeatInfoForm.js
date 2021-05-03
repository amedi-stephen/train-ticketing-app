import React, { useState } from "react";
import "../Css/SeatInfoForm.css";

const SeatInfoForm = () => {
  const [seatDetails, setSeatDetails] = useState({
    adults: "",
    children: "",
    infants: "",
    class: "",
    totalPrice: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      adults: seatDetails.adult,
      children: seatDetails.children,
      infants: seatDetails.infants,
      class: seatDetails.class,
      totalPrice: seatDetails.totalPrice,
    };

    alert(JSON.stringify(formValues, null, 2));

    // TODO: put action here...
  };

  const handleReset = () => {
    setSeatDetails({
      adults: "",
      children: "",
      infants: "",
      class: "",
      totalPrice: ""
    });
  }

  const handleChange = (e) => {
    setSeatDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form className="traveller-details" onSubmit={handleSubmit}>
      <h4>How many people</h4>
      <div className="form-group-seats">
        <label htmlFor="adult">Adults</label>
        <input
          type="number"
          placeholder="How many adults"
          name="adults"
          onChange={handleChange}
          value={seatDetails.adults}
        />
      </div>

      <div className="form-group-seats">
        <label htmlFor="children">Children</label>
        <input
          type="number"
          placeholder="How many children(12 - 17 years)"
          name="children"
          onChange={handleChange}
          value={seatDetails.children}
        />
      </div>

      <div className="form-group-seats">
        <label htmlFor="infants">Infants</label>
        <input
          type="number"
          placeholder="How many children (3 - 7 years)"
          name="infants"
          onChange={handleChange}
          value={seatDetails.infants}
        />
      </div>

      <div className="form-group-seats">
        <label htmlFor="class">Class</label>
        <select name="class" onChange={handleChange} value={seatDetails.class}>
          <option value="">Select...</option>
          <option value="first class">First Class</option>
          <option value="economy">Economy</option>
        </select>
      </div>
      {/* TODO: 
        if first class, calculate the calculations for first class
        same as second class
        calculations involves multiplying class price to the number of people
        REMEMBER, each age group has its own price, highly consider this...
        thus we need to fetch data from the train store to do this calculations
        use onChange to detect changes and do the necessary calculations
        also, seats booked means they have already been taken. thus the new number has to be updated and rendered.

        TODO: stores needed are the train and traveller stores. to perform the necessary calculations.

        1. fetch the necessary stores. this will be easy since the algorithm is all there, its just connecting to the page
        2. start performing the calculations first
        3. ensure the number of seats are updated after booking
      */}

      <div className="form-group-seats">
        <label htmlFor="totalPrice">Total Cost</label>
        <input
          type="text"
          name="totalPrice"
          onChange={handleChange}
          value={seatDetails.totalPrice}
          readOnly
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SeatInfoForm;
