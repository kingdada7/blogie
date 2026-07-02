import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { assets, blog_data } from "../Assets/assets";
import Navbar from "../components/Navbar";
import SpaceScene from "../components/space/SpaceScene";
// import SpaceBackground from "../components/SpaceBackground";

function Blog() {
  const { id } = useParams();

  const [data, setData] = useState("");

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div className="relative">
      {/* <SpaceBackground /> */}
      <SpaceScene />
      <Navbar />
      <div></div>
      <div></div>
    </div>
  ) : (
    <div>
      <h1>loading...</h1>
    </div>
  );
}

export default Blog;
