import { ArrowRight } from "lucide-react";
import { assets } from "../Assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img src={assets.blogie} alt="logo"  className="w-20 h-20 object-contain" />
      <button className="flex items-center gap 2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 ">
        Login
        <ArrowRight />
      </button>
    </div>
  );
};

export default Navbar;
