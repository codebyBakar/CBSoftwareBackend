import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { products, discount, tax, totalAmount } = req.body;

    const order = await Order.create({
      products,
      discount,
      tax,
      totalAmount
    });

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating order" });
  }
};

// GET ALL ORDERS
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// GET SINGLE ORDER
export const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("products.product");
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching order" });
  }
};