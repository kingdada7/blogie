import express from "express";
import { addBlog } from "../controllers/blogControllers";
import upload from "../middleware/multer";

const blogRouter = express.Router();

blogRouter.post("/add", upload, addBlog);
