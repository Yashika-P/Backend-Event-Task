// routes/eventRoutes.js
const express = require("express");
const { createEvent, getAllEvents, getEventById } = require("../controllers/eventController");
const router = express.Router();

// Create Event
router.post("/events", createEvent);

// Get All Events
router.get("/events", getAllEvents);

// Get Single Event
router.get("/events/:id", getEventById);

module.exports = router;
