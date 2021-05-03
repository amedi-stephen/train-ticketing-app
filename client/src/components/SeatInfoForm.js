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
          name="adult"
          onChange={handleChange}
          value={seatDetails.adults}
        />
      </div>

      <div className="form-group-seats">
        <label htmFor="children">Children</label>
        <input
          type="number"
          placeholder="How many children(12 - 17 years)"
          name="children"
          onChange={handleChange}
          value={seatDetails.children}
        />
      </div>

      <div className="form-group-seats">
        <label htmlFor="infants">Children</label>
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

      <div className="form-group-seats">
        <label htmlFor="totalPrice">Total Cost</label>
        <input
          type="text"
          name="totalPrice"
          onChange={handleChange}
          value={seatDetails.totalPrice}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SeatInfoForm;
