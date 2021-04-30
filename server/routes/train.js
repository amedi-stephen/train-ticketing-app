const express = require("express");
const trainsRoute = express.Router();
const Train = require("../models/Train");

// TODO: trains to destination

trainsRoute.get("/", async (req, res) => {
  try {
    const trains = await Train.find({
      from: "Nairobi",
      destination: "Mombasa",
    });
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

module.exports = trainsRoute;
