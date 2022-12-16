require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// ES6
const PORT = process.env.PORT || 5000;

// connect to mongo db
const DATABASE_NAME = process.env.DATABASE_NAME;
const MONGO_HOST = process.env.MONGO_HOST;

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_HOST + DATABASE_NAME)
  .then(() => console.info("mongodbDB connected "))
  .catch((error) => console.error("mongodbDB error ", error));

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.use("/*", (req, res) => res.status(404).send("API NOT FOUND"));

// listen to server
app.listen(PORT, () => console.log("server is listing on port : ", PORT));
