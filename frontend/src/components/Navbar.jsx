import { ArrowRight } from "lucide-react";
import { assets } from "../Assets/assets";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center cursor-pointer py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        onClick={() => navigate("/")}
        src={assets.blogie}
        alt="logo"
        className="w-20 h-20 object-contain"
      />
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 "
      >
        Login
        <ArrowRight className="w-4 " />
      </button>
    </div>
  );
};

export default Navbar;
