import React from "react";
import { Calendar, MapPin, Search, Users } from "lucide-react";

const HotelForm = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-2">
      <div className="flex w-3/4 max-w-4xl justify-between px-4 text-white">
        <div className="flex flex-col items-start">
          <label className="relative text-sm font-semibold">
            City, destination, or hotel name
          </label>
        </div>
        <div className=" relative flex flex-col items-start">
          <label className="text-sm font-semibold">
            Check-in & Check-out Dates
          </label>
        </div>
        <div className="flex flex-col items-start">
          <label className="relative text-sm font-semibold">
            Guests and Rooms
          </label>
        </div>
      </div>

      <div className="relative flex items-center w-3/4 max-w-4xl bg-white rounded-full shadow-lg px-4 py-2 gap-4">
        <div className="flex flex-1 items-center gap-2">
          <MapPin className="text-blue-600" />
          <input
            type="text"
            placeholder="City, hotel, place to go"
            className="w-full outline-none bg-transparent placeholder-gray-500 text-gray-900"
          />
        </div>

        <div className="flex flex-1 items-center gap-2 border-l border-gray-300 pl-4">
          <Calendar className="text-blue-600" />
          <input
            type="text"
            placeholder="20 Feb 2025 - 21 Feb 2025"
            className="w-full outline-none bg-transparent placeholder-gray-500 text-gray-900"
          />
        </div>

        <div className="flex flex-1 items-center gap-2 border-l border-gray-300 pl-4">
          <Users className="text-blue-600" />
          <input
            type="text"
            placeholder="1 Adult(s), 0 Child, 1 Room"
            className="w-full outline-none bg-transparent placeholder-gray-500 text-gray-900"
          />
        </div>

        <button className="bg-orange-500 text-white p-4 rounded-full">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HotelForm;
