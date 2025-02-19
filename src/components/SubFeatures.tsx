import React from "react";
import { Building } from "lucide-react";

const SubFeatures = () => {
  return (
    <div className="p-2 relative text-white flex justify-around mt-3 md:justify-start md:gap-4">
      {["Hotels", "Villa", "Appartement"].map((item, index) => (
        <div
          style={{
            backgroundColor: index === 0 ? "#0094F3" : "bg-black/30",
          }}
          key={index}
          className="flex items-center gap-1 bg-black/50 rounded-full py-1 px-2 hover:cursor-pointer md:px-4"
        >
          <Building />
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubFeatures;
