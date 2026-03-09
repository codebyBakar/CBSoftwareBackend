import express from "express";
import { registerAdmin , loginAdmin } from "../controllers/authController.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/",loginAdmin);
AuthRoutes.post("/register",registerAdmin);

export default AuthRoutes;