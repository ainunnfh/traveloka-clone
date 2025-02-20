import React from "react";
import { InfoIcon, Copy } from "lucide-react";

interface CouponCardProps {
  logo: React.ReactNode;
  title: string;
  description: string;
  code: string;
}

const CouponCard: React.FC<CouponCardProps> = ({
  logo,
  title,
  description,
  code,
}) => {
  return (
    <div
      className={`relative p-4 rounded-lg shadow-md border bg-white" 
      }`}
    >
      <div className="flex justify-between">
        <div>{logo}</div>
        <div>
          <p className="text-md font-bold"> {title}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div>
          <InfoIcon className="size-4" />
        </div>
      </div>
      <div className="border border-dashed border-blue-200 mt-3"></div>
      <div className="flex justify-evenly items-center mt-3">
        <div className="flex  gap-2 bg-gray-200 px-2 py-1 w-3/4 rounded text-sm font-semibold text-gray-600">
          <Copy className="size-4" color="#014590" />
          {code}
        </div>
        <button className="bg-[#D1F0FF] text-[#014590] text-sm px-4 py-1 rounded-full hover:bg-blue-400">
          Copy
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
