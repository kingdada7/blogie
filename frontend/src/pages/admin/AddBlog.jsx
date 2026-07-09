import React, { useState } from "react";
import { assets } from "../../Assets/assets";
import { Upload } from "lucide-react";

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTiltle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
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
            <Upload className=" mt-2 h-10 w-10 text-gray-500" />
          )}
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-4 text-gray-300">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4 text-gray-300">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={subTiltle}
        />
      </div>
    </form>
  );
};

export default AddBlog;
