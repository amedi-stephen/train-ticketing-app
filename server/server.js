const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const trainsRoute = require("./routes/train");
const travellersRoute = require("./routes/traveller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/trains", trainsRoute);
app.use("/traveller", travellersRoute);

mongoose.connect(
  "mongodb://localhost:27017/traindb",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected successfully to DB!");
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
