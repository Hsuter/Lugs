const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    caption: { type: String, required: false },

    image: { type: Object, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;
