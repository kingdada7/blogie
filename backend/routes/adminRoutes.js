import express from "express";
import { adminLogin, getAllComments } from "../controllers/adminControllers.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth, getAllComments);

export default adminRouter;
