import React from "react";

const Background: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[75vh]">
      <img
        src="bromo-mountain3.jpg"
        alt="Bromo Mountain"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-blue-950/70" />
    </div>
  );
};

export default Background;
