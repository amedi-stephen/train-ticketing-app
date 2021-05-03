import React from "react";
import Navbar from "./Navbar";
import SeatInfoForm from "./SeatInfoForm";

const SeatInfoPage = () => {
  return (
    <div className="Seat-info-page">
      <Navbar />
      <div className="header">
        <h2>Traveller Details</h2>
      </div>
      <SeatInfoForm />
    </div>
  );
};

export default SeatInfoPage;
