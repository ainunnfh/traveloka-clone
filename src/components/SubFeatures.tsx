import React from "react";

const SubFeatures = () => {
  return (
    <div className="p-2 relative text-white flex gap-2 justify-center md:justify-start">
      <div className="bg-[#0094F3] rounded-full py-1 px-4 hover:cursor-pointer">
        One-way / Round-trip
      </div>
      <div className="bg-black/20 rounded-full py-1 px-4 hover:cursor-pointer">
        Multi-city
      </div>
    </div>
  );
};

export default SubFeatures;
