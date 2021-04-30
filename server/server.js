const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())
//FIXME: change to false if an error occurs
app.use(express.urlencoded({extended: true}))
app.use(cors());


mongoose.connect("mongodb://localhost:27017/traindb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => console.log("Connection to the db successful"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`))