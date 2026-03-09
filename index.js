import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT , MONGODBURL, FRONTURL } from "./env.js";
import authRoutes from "./routes/authRoutes.js";
import DashboardRoutes from "./routes/dashboardRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import OrderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use("/uploads",express.static("uploads"));


app.use(express.json());

app.use(cors({
  origin:FRONTURL,
  credentials:true
}));

mongoose.connect(`${MONGODBURL}/restraunt`)
.then(()=>console.log("DB Connected Successfully"));




app.use("/api/auth",authRoutes);
app.use("/api/dashboard",DashboardRoutes);
app.use("/api/products",productRoutes);
app.use("/api/categories",categoryRoutes);
app.use("/api/orders",OrderRoutes);


app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});