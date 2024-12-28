// controllers/attendeeController.js
const Attendee = require("../models/Attendee");

// Register a new attendee for an event
const registerAttendee = async (req, res) => {
  try {
    const newAttendee = new Attendee(req.body);
    await newAttendee.save();
    res.status(201).json(newAttendee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all attendees for a specific event
const getAttendeesByEvent = async (req, res) => {
  try {
    const attendees = await Attendee.find({ eventId: req.params.eventId });
    if (!attendees || attendees.length === 0) {
      return res.status(404).json({ error: "No attendees found for this event" });
    }
    res.status(200).json(attendees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { registerAttendee, getAttendeesByEvent };
