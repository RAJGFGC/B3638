const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        pizza: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Pizza",
          required: true,
        },
        name: String,
        price: Number,
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    totalAmount: { type: Number, required: true },
    address: { type: String, required: true },
    status: {
      type: String,
      enum: [
        "placed",
        "preparing",
        "out-for-delivery",
        "delivered",
        "cancelled",
      ],
      default: "placed",
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
