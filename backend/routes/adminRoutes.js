import express from "express";
import {
  adminLogin,
  getAllBlogsAdmin,
  getAllComments,
} from "../controllers/adminControllers.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.post("/delete-comment",)

export default adminRouter;
