// routes/ticketRoutes.js
const express = require("express");
const { createTicket, getTicketsByEvent } = require("../controllers/ticketController");
const router = express.Router();

// Create Ticket
router.post("/tickets", createTicket);

// Get Tickets for an Event
router.get("/tickets/:eventId", getTicketsByEvent);

module.exports = router;
