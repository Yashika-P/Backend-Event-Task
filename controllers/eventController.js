// controllers/eventController.js
const Event = require("../models/Event");

// Create a new event
const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find(req.query);  // You can filter events using query params
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a single event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createEvent, getAllEvents, getEventById };
