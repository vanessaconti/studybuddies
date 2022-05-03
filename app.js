const express = require("express");
const groupsController = require("./controllers/groupsController.js");
const eventsController = require("./controllers/eventsController.js");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Welcome All To Study Buddies");
});

app.use("/groups", groupsController);
app.use("/events", eventsController);

app.get("*", (_, response) => {
  response.status(404).json({ error: "Sorry Page not found..." });
});

module.exports = app;
