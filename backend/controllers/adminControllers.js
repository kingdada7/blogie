import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ sucesss: true, token });
  } catch (error) {
    res.json({ sucesss: false, message: error.message });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    res.json({ sucess: true, commets });
  } catch (error) {
    res.json({ sucess: false, message: error.message });
  }
};

export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.Component.countDocumemts;
    const drafts = await Blog.countDocuments({ isPublished: false });

    const dashboardData = {
      blogs,
      comments,
      drafts,
      recentBlogs,
    };
    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ sucess: false, message: error.message });
  }
};
