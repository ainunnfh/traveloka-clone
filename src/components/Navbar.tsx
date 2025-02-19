import React from "react";

const Navbar = () => {
  return (
    <div className="relative p-2 flex justify-between md:justify-start md:gap-6 text-white font-bold text-xs md:text-base border-b border-slate-200 ">
      <div className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md">
        Hotels
      </div>
      <div className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md">
        Flights
      </div>
      <div className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md">
        Trains
      </div>
      <div className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md">
        Bus & Travel
      </div>
      {/* <div>Airport Transfer</div> */}
      <div className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md">
        Car Rental
      </div>
      <div className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md">
        Things to Do
      </div>
      <div className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md">
        More
      </div>
    </div>
  );
};

export default Navbar;
