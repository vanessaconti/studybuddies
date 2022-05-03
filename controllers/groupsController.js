const express = require("express");
const groups = express.Router();
const {
  getAllGroups,
  getOneGroup,
  createGroup,
  getEventsByGroupId,
  updateGroup,
} = require("../queries/groups");

groups.get("/", async (_, res) => {
  // console.log("GET request to /groups");
  const allGroups = await getAllGroups();
  if (allGroups[0]) {
    res.status(200).json(allGroups);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

groups.get("/:gid", async (req, res) => {
  //  console.log("GET request to /groups/:id");
  const { gid } = req.params;
  try {
    const group = await getOneGroup(gid);
    if (group.id) {
      res.status(200).json(group);
    } else {
      res.status(404).json({ error: "Group not found, check again" });
    }
  } catch (error) {
    console.log(error);
  }
});

groups.post("/", async (req, res) => {
  const { body } = req;
  try {
    const createdGroup = await createGroup(body);
    if (createdGroup.id) {
      res.status(200).json(createdGroup);
    } else {
      res.status(404).json({ error: "Group could not be created" });
    }
  } catch (error) {
    console.log(error);
  }
});

groups.put("/:gid", async (req, res) => {
  const { gid } = req.params;
  const { body } = req;
  const updatedGroup = await updatedGroup(gid, body);
  if (updatedGroup.id) {
    res.status(200).json(updatedGroup);
  } else {
    res.status(404).json({ error: "Group could not be updated" });
  }
});

groups.get("/:gid/events", async (request, response) => {
  const { gid } = request.params;
  try {
    const group = await getEventsByGroupId(gid);
    console.log(group);
    response.status(200).send(group);
  } catch (error) {
    response.status(404).send({ error: "Check again, group cant be found" });
  }
});

groups.post("/:gid/events", async (request, response) => {
  let event = request.body;
  try {
    const newEvent = await createEvent(event);
    response.status(200).send(newEvent);
  } catch (error) {
    response.status(404).send({ error: "Event cannot be created" });
  }
});

module.exports = groups;
