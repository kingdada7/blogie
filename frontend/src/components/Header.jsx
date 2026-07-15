import React, { useRef } from "react";
import { assets } from "../Assets/assets";
import { Sparkles } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-cyan-600 font-medium">
          <p>AI feature intergrated</p>
          <Sparkles className="w-3.5" />
        </div>

        <h1 className="text-xl sm:text-6xl font-semibold sm:leading-16 text-white">
          Welcome to <span className="text-cyan-600">blogie</span> <br />
          your own blogging platform
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-white">
          There is a vitality, a life force, an energy... translated through you
          into action, and because there is only one of you in all time, this
          expression is unique.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-lg max-sm:sclae-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
        >
          <input
            ref={inputRef}
            className="w-full pl-4 outline-none"
            type="text"
            placeholder="Search for blogs"
            required
          />
          <button
            className="bg-cyan-600 text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
