const mongoose = require("mongoose");
const { Schema } = mongoose;

const travellerSchema = new Schema({
  travellers: [
    {
      fullname: {
        type: String,
        trim: true,
        maxlength: 50
      },
      idcard: String,
      gender: String,
      nationality: String,
    },
  ],
  adults: {
    type: Number,
    default: 0
  },
  children: {
    type: Number,
    default: 0
  },
  trainName: {
    type: String,
    default: null
  },
  infants: {
    type: Number,
    default: 0
  },
  trainType: {
    type: String,
    required: (true, "train type is required")
  },
  coachClass: String,
  totalPrice: Number,
  travellerEmail: String, //TODO: add email form at the frontend
  mpesaNumber: String,
  travellingDate: {
    type: Date,
    required: (true, "Date is required"),
    default: new Date,
  },
  locationFrom: {
    type: String,
    required: (true, "Field required")
  },
  locationTo: {
    type: String,
    required: (true, "Field required")
  },
});

module.exports = mongoose.model("Traveller", travellerSchema);
