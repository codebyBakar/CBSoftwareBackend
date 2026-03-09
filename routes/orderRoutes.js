import express from "express";
import { createOrder, getOrders, getSingleOrder } from "../controllers/orderController.js";

const OrderRoutes = express.Router();

OrderRoutes.post("/", createOrder);
OrderRoutes.get("/", getOrders);
OrderRoutes.get("/:id", getSingleOrder);

export default OrderRoutes;