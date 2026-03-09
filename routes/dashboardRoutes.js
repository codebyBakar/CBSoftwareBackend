import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const DashboardRoutes = express.Router();

DashboardRoutes.get("/", verifyToken, getDashboard);

export default DashboardRoutes;