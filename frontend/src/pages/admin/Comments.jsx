import React, { use, useEffect, useState } from "react";
import { comments_data } from "../../Assets/assets";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 ">
      <div className="flex justify-between items-center max-w-3xl">
        <h1 className="text-gray-300">Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === "Approved" ? "text-cyan-600" : "text-gray-300"}`}
          >
            Approved
          </button>

          <button
             onClick={() => setFilter("Not Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === "Not Approved" ? "text-cyan-600" : "text-gray-300"}`}
          >
            Not Approved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
