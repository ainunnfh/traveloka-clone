import React from "react";
import {
  Hotel,
  Plane,
  TrainFront,
  BusFront,
  Car,
  Grip,
  CheckCheck,
} from "lucide-react";

const Features = () => {
  return (
    <div className="relative flex text-white flex-wrap justify-center md:justify-around md:w-3/4">
      {[
        { icon: <Hotel />, label: "Hotel" },
        { icon: <Plane />, label: "Flights", active: true },
        { icon: <TrainFront />, label: "Trains" },
        { icon: <BusFront />, label: "Bus & Travel" },
        { icon: <Car />, label: "Car Rental" },
        { icon: <CheckCheck />, label: "Things to Do" },
        { icon: <Grip />, label: "More" },
      ].map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 p-2 font-bold rounded-full px-4
          ${
            item.active
              ? "bg-white text-black"
              : "border border-transparent hover:border-white text-white"
          }
          hover:cursor-pointer`}
        >
          {item.icon}
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Features;
