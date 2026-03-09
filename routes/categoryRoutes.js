import express from "express";

import {
addCategory,
getCategories,
deleteCategory,
updateCategory,
getSingleCategory
} from "../controllers/categoryController.js";

const categoryRoutes = express.Router();

categoryRoutes.post("/", addCategory);

categoryRoutes.get("/", getCategories);

categoryRoutes.get("/:id", getSingleCategory);

categoryRoutes.put("/:id", updateCategory);

categoryRoutes.delete("/:id", deleteCategory);

export default categoryRoutes;