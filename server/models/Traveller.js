const mongoose = require("mongoose");
const { Schema } = mongoose;

const travellerSchema = new Schema({
    travellers: [
        {
            fullname: {
                type: String,
                required: true,
                trim: true
            },
            idcard: {
                type: String,
                required: true
            },
            gender: {
                type: String, 
                required: true
            },
            nationality: {
                type: String,
                required: true
            }
        }
    ],
    coachClass: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    travellerEmail: String,
    mpesaNumber: {
        type: String,
        required: true
    },
    travellingDate: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model("Traveller", travellerSchema);;
