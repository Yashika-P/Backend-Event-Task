// models/Event.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String },
  ticketTypes: [{
    type: String,
    price: { type: Number, required: true },
    available: { type: Number, required: true },
  }],
  images: [String],
  videos: [String],
});

module.exports = mongoose.model("Event", eventSchema);
