// routes/attendeeRoutes.js
const express = require("express");
const { registerAttendee, getAttendeesByEvent } = require("../controllers/attendeeController");
const router = express.Router();

// Register Attendee
router.post("/attendees", registerAttendee);

// Get Attendees for an Event
router.get("/attendees/:eventId", getAttendeesByEvent);

module.exports = router;
