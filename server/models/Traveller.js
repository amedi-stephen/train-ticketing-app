const mongoose = require("mongoose");
const { Schema } = mongoose;

const travellerSchema = new Schema({
  travellers: [
    {
      fullname: String,
      idcard: String,
      gender: String,
      nationality: String,
    },
  ],
  coachClass: String,
  totalPrice: {
    type: Number,
    default: 0,
  },
  travellerEmail: String,
  mpesaNumber: String,
  travellingDate: {
    type: String,
    default: Date.now,
  },
  locationFrom: String,
  locationTo: String,
});

module.exports = mongoose.model("Traveller", travellerSchema);
