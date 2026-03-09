import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      price: Number,
      quantity: Number,
      subtotal: Number
    }
  ],
  discount: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);