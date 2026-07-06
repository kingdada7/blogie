import React from "react";
import { assets } from "../../Assets/assets";
import { useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-300">
        <img
          src={assets.blogie}
          className=" object-contain h-20 w-20 sm:w-40 cursor-pointer"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Layout;
