import React from "react";
import { assets } from "../../Assets/assets";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-800">
        <img
          src={assets.blogie}
          className=" object-contain h-20 w-20 sm:w-40 cursor-pointer"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-cyan-600 text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar/>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
