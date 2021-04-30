const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())
//FIXME: change to false if an error occurs
app.use(express.urlencoded({extended: true}))
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost:27017/traindb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT, () => console.log(`Server listening at port ${PORT}`)))
  .catch((error) => error.message);

mongoose.set("useFindAndModify", false);