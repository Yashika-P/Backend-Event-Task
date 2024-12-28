// controllers/paymentController.js
const processPayment = (req, res) => {
  const { amount, paymentMethod } = req.body;

  if (!amount || !paymentMethod) {
    return res.status(400).json({ message: "Amount and payment method are required" });
  }

  // Simulate a successful payment
  const paymentSuccess = true;

  if (paymentSuccess) {
    res.status(200).json({
      message: "Payment successful",
      transactionId: `txn_${Date.now()}`,
      amount,
      paymentMethod,
    });
  } else {
    res.status(500).json({ message: "Payment failed" });
  }
};

module.exports = { processPayment };
