// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require('./config/db');
require("dotenv").config();


// Routes
const eventRoutes = require("./routes/eventRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const attendeeRoutes = require("./routes/attendeeRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

// Initialize the app
const app = express();

// Enable CORS for all origins or specify your frontend URL
const allowedOrigins = ['https://online-event-task.netlify.app', 'http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions)); 

// Middleware
app.use(cors());
app.use(express.json());


// Initialize database connection
connectDB();

// Routes
app.use("/api", eventRoutes);
app.use("/api", ticketRoutes);
app.use("/api", attendeeRoutes);
app.use("/api", paymentRoutes);

// Optional: Add a default route to prevent "Cannot GET /"
app.get('/', (req, res) => {
    res.send('Event Management API');
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
