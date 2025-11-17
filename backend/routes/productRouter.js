import express from "express";
import { createProduct, deleteProduct, getAllItems, getItemById, updateItemById } from "../controllers/product.controller.js";

const productRouter = express.Router();
productRouter.use(express.json());

productRouter.get("/", getAllItems);
productRouter.get("/:id", getItemById);
productRouter.put("/:id", updateItemById);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;