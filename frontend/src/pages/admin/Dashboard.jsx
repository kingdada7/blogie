import React from "react";
// import Layout from './Layout'
import { assets } from "../../Assets/assets";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex  items-center  gap-200 py-2 px-4 sm:px-12 border-b border-gray-300">
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
      <div className="flex h-[calc(100vh-70px)]"></div>
    </>
  );
};

export default Dashboard;
