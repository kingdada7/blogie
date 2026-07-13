import express from "express";
import { addBlog } from "../controllers/blogControllers";

const blogRouter = express.Router();

blogRouter.post("/add", addBlog);
