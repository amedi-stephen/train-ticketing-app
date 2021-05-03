const mongoose = require("mongoose");

const trainSchema = mongoose.Schema({
    trainName: String,
    totalSeats: {
        type: Number,
        default: 0
    },
    firstClass: {
        type: Number,
        max: 500
    },
    economyClass: {
        type: Number,
        max: 760
    },
    firstClassPrices: [
        {
            adults: {
                type: Number,
                default: 0
            },
            children: {
                type: Number,
                default: 0
            },
            infants: {
                type: Number,
                default: 0
            },
        }
    ],
    economyClassPrices: [
        {
            adults: {
                type: Number,
                default: 0
            },
            children: {
                type: Number,
                default: 0
            },
            infants: {
                type: Number,
                default: 0
            },
        }
    ],
    from: String,
    destination: String,
    departureDate: Date,
    // departureTime: Date,
    // arrivalTime: Date,
});

module.exports = mongoose.model("Train", trainSchema);