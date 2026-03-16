import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { MONGODBURL, FRONTURL } from "./env.js";
import authRoutes from "./routes/authRoutes.js";
import DashboardRoutes from "./routes/dashboardRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import OrderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use("/uploads",express.static("uploads"));


app.use(express.json());


const allowedOrigins = [
  "http://localhost:5173",
  FRONTURL
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin || allowedOrigins.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials:true
}));


mongoose.connect(MONGODBURL)
.then(()=>console.log("DB Connected Successfully"))
.catch(err => console.log("MongoDB Error:", err));


app.use("/api/auth",authRoutes);
app.use("/api/dashboard",DashboardRoutes);
app.use("/api/products",productRoutes);
app.use("/api/categories",categoryRoutes);
app.use("/api/orders",OrderRoutes);


export default app