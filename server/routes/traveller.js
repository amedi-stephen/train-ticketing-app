const express = require("express");
const travellerRouter = express.Router();
const Traveller = require("../models/Traveller");

// post traveller
travellerRouter.post("/post", async (req, res) => {
  const traveller = new Traveller({
    travellers: req.body.travellers,
    adults: req.body.adults,
    children: req.body.children,
    infants: req.body.infants,
    trainType: req.body.trainType,
    coachClass: req.body.coachClass,
    price: req.body.price,
    travellerEmail: req.body.travellerEmail,
    trainName: req.body.trainName,
    mpesaNumber: req.body.mpesaNumber,
    travellingDate: req.body.travellingDate,
    locationFrom: req.body.locationFrom,
    locationTo: req.body.locationTo,
  });
  try {
    const savedTraveller = await traveller.save();
    res.json(savedTraveller);
  } catch (error) {
    res.json({ message: error.message });
  }
});

travellerRouter.get("/user/:user_id", async (req, res) => {
  try {
    const user = await Traveller.findById(req.params.user_id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

travellerRouter.get("/users", async (req, res) => {
  try {
    const users = await Traveller.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// travellerRouter.put("/user/:user_id", async (req, res) => {
//   let updates = req.body;

//   try {
//     const updatedTraveller = await Traveller.findOneAndUpdate(
//       { _id: req.params.user_id },
//       updates,
//       { new: true }
//     );
//     res.json(updatedTraveller);
//     console.log(updatedTraveller);
//   } catch (error) {
//     res.json({ message: error.message });
//     console.log(error);
//   }
// });

travellerRouter.put("/:user_id", async (req, res) => {
  let updates = req.body;

  try {
    const updatedTraveller = await Traveller.findOneAndUpdate(
      { _id: req.params.user_id },
      { $set: updates },
      { new: true }
    );

    res.json(updatedTraveller);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = travellerRouter;
