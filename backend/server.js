import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/products", productRouter);

app.get("/api/products", (req, res) => {
    res.send("Hello there");
})

app.listen(PORT, (req, res) => {
    connectDB();
    console.log(process.env.MONGO_URI)
    console.log(`Listening on port: ${PORT}`);
})