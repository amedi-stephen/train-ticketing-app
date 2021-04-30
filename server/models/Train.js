const mongoose = require("mongoose");
const { Schema } = mongoose;

const trainSchema = new Schema({
    trainName: String,
    firstClass: {
        type: Number,
        max: 100
    },
    economyClass: {
        type: Number,
        max: 200
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departureTime: Date,
    arrivalTime: Date,
});

module.exports = mongoose.model("Train", trainSchema);