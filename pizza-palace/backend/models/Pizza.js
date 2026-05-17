const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: {
      type: String,
      enum: ["veg", "non-veg", "vegan", "cheese", "special"],
      default: "veg",
    },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Pizza = mongoose.model("Pizza", pizzaSchema);
module.exports = Pizza;
