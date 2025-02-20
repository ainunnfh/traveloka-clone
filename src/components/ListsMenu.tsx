import React from "react";
import { Percent } from "lucide-react";
const ListsMenu = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center text-white text-sm md:text-md font-semibold">
      <div className="flex gap-1 items-center hover:bg-black/20 hover:cursor-pointer py-2 md:px-2 rounded-md">
        <img src="icons-indonesia.png" alt="" className="w-6" />
        <span>EN | IDR</span>{" "}
      </div>
      <div className="flex items-center gap-1 hover:bg-black/20 hover:cursor-pointer py-2 md:px-2 rounded-md">
        <Percent size={12} color="green" />
        <span> Promo</span>
      </div>
      <div className="hover:bg-black/20 hover:cursor-pointer py-2 md:px-2 rounded-md">
        Deals
      </div>
      <div className="hover:bg-black/20 hover:cursor-pointer py-2 md:px-2 rounded-md">
        Support
      </div>
      <div className="hover:bg-black/20 hover:cursor-pointer py-2 md:px-2 rounded-md">
        Partnership
      </div>
      <div className="hover:bg-black/20 hover:cursor-pointer py-2 md:px-2 rounded-md">
        For Corporates
      </div>
      <div className="hover:bg-black/20 hover:cursor-pointer py-2 md:px-2 rounded-md">
        Bookings
      </div>

      <div className="hover:bg-black/20 hover:cursor-pointer p-1 rounded-md flex gap-2 border border-white">
        <img src="icon-user-white.png" alt="" className="w-5" />
        <span>Log In</span>
      </div>
      <div className="hover:bg-blue-600 ml-3 font-bold hover:cursor-pointer py-1.5 md:px-1 rounded-md flex justify-around bg-[#0094F3]">
        Register
      </div>
    </div>
  );
};

export default ListsMenu;
