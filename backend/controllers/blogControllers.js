export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog,
    );
    const imageFile = req.file;

    // fields validation

    if (!title || !description || !category || !imageFile) {
      return res.json({ sucesss: false, message: "missing required fields" });
    }
  } catch (error) {}
};
