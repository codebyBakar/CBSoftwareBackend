import express from "express";
import upload from "../middleware/upload.js";

import {
 addProduct,
 getProducts,
 deleteProduct,
 updateProduct,
 getSingleProduct
} from "../controllers/productController.js";

const ProductRoutes = express.Router();

// ADD PRODUCT
ProductRoutes.post("/", upload.single("image"), addProduct);

// GET ALL PRODUCTS
ProductRoutes.get("/", getProducts);

// GET SINGLE PRODUCT
ProductRoutes.get("/:id", getSingleProduct);

// UPDATE PRODUCT
ProductRoutes.put("/:id", upload.single("image"), updateProduct);

// DELETE PRODUCT
ProductRoutes.delete("/:id", deleteProduct);

export default ProductRoutes;