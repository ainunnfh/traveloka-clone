import React from "react";

const ListsMenu = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center text-white text-sm md:text-md font-semibold">
      <div className="flex gap-1 items-center">
        <img src="icons-indonesia.png" alt="" className="w-6" />
        <span>ID | IDR</span>{" "}
      </div>
      <div>
        logo<span> Promo</span>
      </div>
      <div>Bantuan</div>
      <div>Jadi Mitra</div>
      <div>For Corporates</div>
      <div>Pesanan</div>

      <div className="hover:bg-black/10 hover:cursor-pointer py-2 md:px-4 rounded-md flex justify-around border border-white">
        <img src="icon-user-white.png" alt="" className="w-5" />
        <span>Log In</span>
      </div>
      <div className="hover:bg-black/30 font-bold hover:cursor-pointer py-2 md:px-4 rounded-md flex justify-around bg-[#0094F3]">
        Register
      </div>
    </div>
  );
};

export default ListsMenu;
