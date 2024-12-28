// controllers/ticketController.js
const Ticket = require("../models/Ticket");

// Create a new ticket
const createTicket = async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tickets for a specific event
const getTicketsByEvent = async (req, res) => {
  try {
    const tickets = await Ticket.find({ eventId: req.params.eventId });
    if (!tickets) {
      return res.status(404).json({ error: "No tickets found for this event" });
    }
    res.status(200).json(tickets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createTicket, getTicketsByEvent };
