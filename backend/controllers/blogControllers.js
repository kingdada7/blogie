import fs from "fs";

import imagekit from "../config/imageKIt";
import ImageKit, { toFile } from "@imagekit/nodejs";

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

    await client.files.upload({
      file: await toFile(Buffer.from("my bytes"), "file"),
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // optimaization through  imagekit URL transformation
    // URL with basic transformations
    const transformedUrl = imagekit.helper.buildSrc({
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
      src: response.filePath,
      transformation: [
        {
          width: 1280,
          height: 800,
          crop: "maintain_ratio",
          quality: "auto",
          format: "webp",
        },
      ],
    });

    const image = transformedUrl;
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });
    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
