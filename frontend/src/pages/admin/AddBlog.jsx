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
      <div className=" bg-white/5 w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="h-16 w-16 rounded"
            />
          ) : (
            <Upload className=" mt-2 h-12 w-12 text-gray-500" />
          )}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
      </div>
    </form>
  );
};

export default AddBlog;
