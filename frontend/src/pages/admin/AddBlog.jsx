import React, { useState } from "react";
import { assets } from "../../Assets/assets";
import { Upload } from "lucide-react";

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState(false);
  const [subTiltle, setSubTitle] = useState(false);
  const [category, setCategory] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex-1 text-gray-300 h-full overflow-scroll">
      <div className="w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload Thumbnail</p>
        <label htmlFor="image"></label>
        <Upload className="mt-12 h-16 rounded cursor-pointer" />
        <input type="file" id="image hidden required" />
      </div>
    </form>
  );
};

export default AddBlog;
