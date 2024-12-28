// routes/paymentRoutes.js
const express = require("express");
const { processPayment } = require("../controllers/paymentController");
const router = express.Router();

// Simulate Payment (without using Stripe or Razorpay)
router.post("/pay", processPayment);

module.exports = router;
