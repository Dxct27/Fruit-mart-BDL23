const mongoose= require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price_per_kg: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Fruit = mongoose.model("Fruit", schema);

module.exports = Fruit;