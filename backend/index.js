import "dotenv/config";  

import cors from "cors";
import express from "express";

import connectDB from "./config/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import imagekit from "./config/imageKit.js";


// Connect DB
connectDB();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://blogie-aum9.vercel.app" ,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.get("/", (req, res) => res.send("API is working"));

app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});