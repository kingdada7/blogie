import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { blog_data } from "../Assets/assets";
import Navbar from "../components/Navbar";

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
    <div>
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
