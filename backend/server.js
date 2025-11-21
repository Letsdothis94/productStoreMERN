import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use("/api/products", productRouter);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.get("/api/products", (req, res) => {
    res.send("Hello there");
})

app.listen(PORT, (req, res) => {
    connectDB();
    console.log(`Listening on port: ${PORT}`);
})