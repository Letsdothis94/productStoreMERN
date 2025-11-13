import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
    res.send("Hello there");
})

app.listen(PORT, (req, res) => {
    connectDB();
    console.log(`Listening on port: ${PORT}`);
})