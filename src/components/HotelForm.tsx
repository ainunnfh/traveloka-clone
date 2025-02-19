import React from "react";
import { Calendar, MapPin, Search, Users } from "lucide-react";

const HotelForm = () => {
  return (
    <div className="flex flex-col items-center justify-start py-8 gap-4">
      <div className="relative flex items-center w-full max-w-4xl bg-white rounded-lg shadow-lg px-4 py-1 gap-4">
        <div className="flex flex-col flex-1">
          <label className="text-xs text-gray-500 mb-1">
            City, destination, or hotel name
          </label>
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-600" />
            <input
              type="text"
              placeholder="City, hotel, place to go"
              className="w-full outline-none bg-transparent placeholder-gray-500 text-gray-900"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 border-l border-gray-300 pl-4">
          <label className="text-xs text-gray-500 mb-1">
            Check-in & Check-out Dates
          </label>
          <div className="flex items-center gap-2">
            <Calendar className="text-blue-600" />
            <input
              type="text"
              placeholder="20 Feb 2025 - 21 Feb 2025"
              className="w-full outline-none bg-transparent placeholder-gray-500 text-gray-900"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 border-l border-gray-300 pl-4">
          <label className="text-xs text-gray-500 mb-1">Guests and Rooms</label>
          <div className="flex items-center gap-2">
            <Users className="text-blue-600" />
            <input
              type="text"
              placeholder="1 Adult(s), 0 Child, 1 Room"
              className="w-full outline-none bg-transparent placeholder-gray-500 text-gray-900"
            />
          </div>
        </div>

        <button className="bg-orange-500 text-white p-4 rounded-full">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HotelForm;
