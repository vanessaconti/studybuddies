const db = require("../db/dbConfig.js");

const getEvent = async (eid) => {
  try {
    const event = await db.one("SELECT * FROM events WHERE event_id=$1", eid);
    return event;
  } catch (error) {
    return error;
  }
};

const updateEvent = async (eid, event) => {
  try {
    const updatedEvent = await db.one(
      "UPDATE event SET name=$1, virtual_meeting_link=$2, start_time=$3, end_time=$4, number_of_attendees=$5, study_group_id=$6, event_id=$7 RETURNING *",
      [
        event.name,
        event.virtual_meeting_link,
        event.start_time,
        event.end_time,
        event.number_of_attendees,
        event.study_group_id,
        eid,
      ]
    );
    return updateEvent;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getEvent,
  updateEvent,
};
