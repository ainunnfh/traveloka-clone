import React from "react";

interface INavbarProps {
  isScrolled: boolean;
}
const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <div
      className={`relative p-2 flex justify-between md:justify-start md:gap-6 font-bold text-xs md:text-base border-b border-slate-200 transition-all duration-300 ${
        props.isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {[
        "Hotels",
        "Flights",
        "Trains",
        "Bus & Travel",
        "Car Rental",
        "Things to Do",
        "More",
      ].map((item, index) => (
        <div
          key={index}
          className="hover:cursor-pointer hover:bg-black/20 py-1 px-2 rounded-md "
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
