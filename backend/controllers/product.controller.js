import Product from "../model/product.model.js";
import mongoose from "mongoose";

export const getAllItems = async (req, res) =>{
    try {
        const products = await Product.find();
        if(!products) {
            return res.status(404).json({status: false, message: "No products in db"});
        }
        res.status(200).json(products);
    } catch (error) {
        console.log("Error in getAllItems", error);
        res.status(500).json({status: "error", message: "Error getting products"});
    }
}

export const getItemById = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id);
        if(!product) {
            return res.status(404).json({status: false, message: "Could not find an item with that id"});
        }

        return res.status(200).json(product);
    } catch (error) {
        console.log("Error in getItemById", error);
        res.status(500).json({status: "error", message: "Error getting product with the id"})
    }
}

export const updateItemById = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ status: false, message: "Invalid id" });
    }

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log("Error in updateItemById", error);
      res.status(500).json({status: "error", message: "Error updating product with the id",});
    }
}

export const createProduct = async (req, res) => {
    const { name, price, image } = req.body;

    if(!name || !price || !image) {
        return res.status(400).json({success: false, message: "All fields required!"});
    }

    const newProduct = new Product({name, price, image});

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.log("Error in createProduct", error);
        res.status(500).json({ status: "error", message: "Error creating products" });   
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ status: false, message: "Invalid id" });
    }

    try {
      await Product.findByIdAndDelete(id);
      res
        .status(200)
        .json({ status: true, message: "Item deleted successfully!" });
    } catch (error) {
      console.log("Error deleting product", error);
      res
        .status(500)
        .json({ status: "error", message: "Error deleting products" });
    }
}