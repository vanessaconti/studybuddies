const express = require("express");
const events = express.Router();
const { getEvent, updateEvent } = require("../queries/events");

events.get("/:eid", async (req, res) => {
  const { eid } = req.params;
  const events = await getEvent(eid);
  res.send(events);
});

events.put("/:eid", async (req, res) => {
  const { eid } = req.params;
  try {
    const updatedEvent = await updateEvent(eid, req.body);
    console.log(updatedEvent);
    res.status(200).send(updatedEvent);
  } catch (error) {
    res.status(404).send({ error: "Event cannot be changed" });
  }
});

module.exports = events;
