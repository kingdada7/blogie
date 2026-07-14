import express from "express";
import { addBlog } from "../controllers/blogControllers";
import upload from "../middleware/multer.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), addBlog);
