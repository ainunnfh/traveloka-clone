import React from "react";
import { Users, RockingChair } from "lucide-react";

const SubFeatures = () => {
  return (
    <div className="p-2 relative text-white flex flex-col gap-2 mt-3 md:flex-row md:justify-between">
      <div className="flex gap-2 md:flex-row justify-between items-center">
        <div className="bg-[#0094F3] rounded-full py-1 px-4 hover:cursor-pointer">
          One-way / Round-trip
        </div>
        <div className="bg-black/20 rounded-full py-1 px-4 hover:cursor-pointer">
          Multi-city
        </div>
      </div>

      <div className="md:flex md:gap-4 ">
        <div className="flex gap-2 border border-white rounded-md bg-black/10 px-1 py-2 hover:cursor-pointer">
          <Users /> <span>1 Adult, 0 Child, 0 Infant (on lap)</span>
        </div>
        <div className="flex gap-2 border border-white rounded-md bg-black/10 px-1 py-2 hover:cursor-pointer">
          <RockingChair /> Economy
        </div>
      </div>
    </div>
  );
};

export default SubFeatures;
