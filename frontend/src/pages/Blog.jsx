import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { assets, blog_data, comments_data } from "../Assets/assets";
import Navbar from "../components/Navbar";
import SpaceScene from "../components/space/SpaceScene";
import moment from "moment";

function Blog() {
  const { id } = useParams();

  const [data, setData] = useState("");
  const [comments, setComments] = useState([]);

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      <SpaceScene />
      <Navbar />
      <div className="text-center mt-20 text-gray-600">
        <p className="text-gray-400">
          Published on {moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-gray-300 text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto">
          {data.title}
        </h1>
        <h2 className="text-gray-400 my-5 max-w-lg truncate mx-auto">
          {data.subTitle}
        </h2>
        <p className="text-gray-400 inline-block py-1 px-4 rounded-full mb-6 border text-sm border-cyan/35 bg-primary font-medium ">
          john doe
        </p>
      </div>
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="rounded-xl mb-5" />
        <div
          className="rich-text max-w-xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        {/* comments section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="text-gray-400">Comments({comments.length})</p>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>loading...</h1>
    </div>
  );
}

export default Blog;
