import React from 'react'
import { NavLink } from "react-router";
import { assets } from "../../Assets/assets";
import {
  House,
  MessageCircleMore,
  MessageCirclePlus,
  ListPlus,
} from "lucide-react";
import { CirclePlus } from "lucide-react";


const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-600/10 border-r-4 border-cyan-600"}`
        }
      >
        <House className="text-cyan-600/40" />
        <p className="hidden md:inline-block text-white">Dashboard</p>
      </NavLink>

      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-600/10 border-r-4 border-cyan-600"}`
        }
      >
        <MessageCirclePlus className="text-cyan-600/40" />
        <p className="hidden md:inline-block text-white">Add blog</p>
      </NavLink>

      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-600/10 border-r-4 border-cyan-600"}`
        }
      >
        <ListPlus className="text-cyan-600/40" />
        <p className="hidden md:inline-block text-white">Blog Lists</p>
      </NavLink>

      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-600/10 border-r-4 border-cyan-600"}`
        }
      >
        <MessageCircleMore className="text-cyan-600/40" />
        <p className="hidden md:inline-block text-white">Comments</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
