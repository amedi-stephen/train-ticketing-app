const mongoose = require("mongoose");
const { Schema } = mongoose;

const trainSchema = new Schema({
    trainName: String,
    totalSeats: Number,
    firstClass: {
        type: Number,
        max: 500
    },
    economyClass: {
        type: Number,
        max: 760
    },
    source: String,
    destination: String,
    departureDate: Date,
    departureTime: Date,
    // arrivalTime: Date
});

module.exports = mongoose.model("Train", trainSchema);