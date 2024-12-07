require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tasksRouter = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

app.use("/tasks", tasksRouter);

module.exports = app; // Exportamos app para las pruebas
