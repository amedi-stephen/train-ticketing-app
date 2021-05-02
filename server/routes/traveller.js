const express = require("express");
const travellerRouter = express.Router();
const Traveller = require("../models/Traveller");

// post traveller
travellerRouter.post("/post", async (req, res) => {
  const traveller = new Traveller({
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
});

// traveller_id
travellerRouter.get("/user/:user_id", async(req, res) => {
    try {
        const user = await Traveller.findById(req.params.user_id);
        res.json(user);
    } catch (error) {
        res.json({ message: error })
    }
})

travellerRouter.get("/users", async(req, res) => {
    try {
        const users = await Traveller.find();
        res.json(users)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = travellerRouter;
