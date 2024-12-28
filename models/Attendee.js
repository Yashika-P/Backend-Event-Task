// models/Attendee.js
const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  tickets: [{
    ticketType: { type: String, required: true },
    quantity: { type: Number, required: true },
  }],
  registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Attendee", attendeeSchema);
