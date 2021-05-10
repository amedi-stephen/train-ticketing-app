const express = require("express");
const trainsRoute = express.Router();
const Train = require("../models/Train");

// TODO: trains to destination

trainsRoute.get("/", async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.json({ message: error });
  }
});

trainsRoute.post("/post", async (req, res) => {
  const post = new Train({
    trainName: req.body.trainName,
    totalSeats: req.body.totalSeats,
    firstClass: req.body.firstClass,
    economyClass: req.body.economyClass,
    firstClassPrices: req.body.firstClassPrices,
    economyClassPrices: req.body.economyClassPrices,
    from: req.body.from,
    destination: req.body.destination,
    departureDate: req.body.departureDate,
  });

  try {
    const savedTrain = await post.save();
    res.json(savedTrain);
    // nest post with get
  } catch (error) {
    res.json({ message: error });
  }
});

// trainsRoute.get("/trainsdest", async (req, res) => {
//   try {
//     const trainDest = await Train.find({})
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

module.exports = trainsRoute;
