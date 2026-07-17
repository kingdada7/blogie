import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold text-gray-300 mb-12">
        Never miss a post! Subscribe to our newsletter for the latest updates
        and exclusive content.
      </h1>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          type="text"
          placeholder="Enter your email id"
          required
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-cyan-600/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-1-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
