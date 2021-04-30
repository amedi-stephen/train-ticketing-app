const express = require("express");
const trainRouter = express.Router();
const Train = require("../models/Train");
const trainController = require("");

//TODO: for server [all trains]

// trains to specific destination
trainRouter.get("/trainstodestination", async (req, res) => {
  try {
    //   const trainsToDestination = Train.find({})
  } catch (error) {
    res.json({ message: error });
  }
});
// one train to specific destination

//TODO: allowing for posting of a train by admin

module.exports = trainRouter;
