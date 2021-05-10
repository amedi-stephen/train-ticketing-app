const mongoose = require("mongoose");

const trainSchema = mongoose.Schema({
  trainName: String,
  totalSeats: {
    type: Number,
    max: 1260,
  },
  firstClass: {
    type: Number,
    max: 500,
  },
  economyClass: {
    type: Number,
    default: 0,
    max: 760,
  },
  firstClassPrices: {
    adults: Number,
    children: Number,
    infants: Number,
  },

  economyClassPrices: {
    adults: Number,
    children: Number,
    infants: Number,
  },
  from: String,
  destination: String,
  departureDate: Date,
  // departureTime: Date,
  // arrivalTime: Date,
});

module.exports = mongoose.model("Train", trainSchema);
