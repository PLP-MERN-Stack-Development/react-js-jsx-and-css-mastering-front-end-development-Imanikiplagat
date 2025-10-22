import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
connectDB();

app.use(cors({ origin: "http://localhost:5173" }));

// Parse JSON for routes that do NOT involve file upload
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Serve uploaded images
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => res.send("Backend running!"));

app.listen(5000, () => console.log("Server started at http://localhost:5000"));
