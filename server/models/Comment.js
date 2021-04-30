const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    commentText: {
        type: String,
        required: true
    },
    uploadedPhoto: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema);