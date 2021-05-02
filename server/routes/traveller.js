const express = require("express");
const travellerRouter = express.Router();
const Traveller = require("../models/Traveller");

//TODO: later, all travellers statistics

// post traveller
travellerRouter.post("/post", async (req, res) => {
  const traveller = new Traveller({
    // TODO: how will i represent this
    travellers: req.body.travellers,
    coachClass: req.body.coachClass,
    price: req.body.price,
    travellerEmail: req.body.travellerEmail,
    mpesaNumber: req.body.mpesaNumber,
    travellingDate: req.body.travellingDate,
    locationFrom: req.body.locationFrom,
    locationTo: req.body.locationTo,
  });
  try {
    const savedTraveller = await traveller.save();
    res.json(savedTraveller);
  } catch (error) {
    res.json({ message: error });
  }

//   console.log(req.body);
});

// traveller_id

module.exports = travellerRouter;
