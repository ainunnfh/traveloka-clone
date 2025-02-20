import React from "react";
import { HotelIcon, ChevronRight, SlidersHorizontal, Gift } from "lucide-react";
import CouponCard from "./CouponCard";

const Coupons = () => {
  const coupons = [
    {
      title: "Kupon Diskon s.d Rp300rb",
      description: "Berlaku untuk Pengguna Baru.",
      code: "HELLOSGCAID",
      logo: <Gift />,
    },
    {
      title: "Diskon 8% Hotel",
      description: "Min. transaksi Rp 500rb",
      code: "JALANYUK",
      logo: <HotelIcon />,
    },
    {
      title: "Diskon s.d 8% Xperience",
      description: "Min. transaksi Rp 300rb",
      code: "JALANYUK",
      logo: <SlidersHorizontal />,
    },
  ];
  return (
    <div className=" p-6 rounded-lg flex flex-col">
      <h2 className="text-xl font-bold flex items-center gap-2 text-blue-950 ">
        <Gift size={24} />
        8% New User Coupons
      </h2>
      <p className="text-blue-950 text-sm">
        Valid for First Transaction on Traveloka App
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {coupons.map((coupon, index) => (
          <CouponCard key={index} {...coupon} />
        ))}
      </div>
      <button className="flex justify-center items-center gap-2 mt-6 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 self-center font-semibold">
        Book now <ChevronRight />
      </button>
    </div>
  );
};

export default Coupons;
