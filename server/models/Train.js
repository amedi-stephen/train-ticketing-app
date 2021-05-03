const mongoose = require("mongoose");

const trainSchema = mongoose.Schema({
  trainName: String,
  totalSeats: {
    type: Number,
    default: 0,
    max: 1260,
  },
  firstClass: {
    type: Number,
    default: 0,
    max: 500,
  },
  economyClass: {
    type: Number,
    default: 0,
    max: 760,
  },
  firstClassPrices: {
    adults: {
      type: Number,
      default: 3000
    },
    children: {
      type: Number,
      default: 1500
    },
    infants: {
      type: Number,
      default: 0
    },
  },

  economyClassPrices: {
    adults: {
      type: Number,
      default: 1000,
    },
    children: {
      type: Number,
      default: 500,
    },
    infants: {
      type: Number,
      default: 0,
    },
  },
  from: String,
  destination: String,
  departureDate: Date,
  // departureTime: Date,
  // arrivalTime: Date,
});

module.exports = mongoose.model("Train", trainSchema);
