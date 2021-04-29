import React from "react";

const SearchTrainForm = () => {
  return (
    <form className="Search-field">
      <div className="form-group">
        <label htmlFor="trainType">Train Type</label>
        <select>
          <option value="inter-county">Inter County</option>
          <option value="express">Express</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="locationFrom">From</label>
        <select>
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
        <select>
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
        <input type="datetime" />
      </div>

      <button type="submit">Book a train</button>
    </form>
  );
};

export default SearchTrainForm;
