"use client";
import React, { useEffect, useState } from "react";
import ListsMenu from "./ListsMenu";
import Navbar from "./Navbar";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`relative flex justify-between p-2 border-b border-slate-200 ${
          isScrolled ? "bg-white" : ""
        }`}
      >
        <div className="">
          <img
            src={isScrolled ? "/traveloka.png" : "/traveloka-white.webp"}
            alt=""
            className="w-28 "
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:block">
          <ListsMenu isScrolled={isScrolled} />
        </div>

        {isMenuOpen && (
          <div className="absolute top-12 right-0 p-4 w-1/2 shadow-md rounded-md">
            <ListsMenu isScrolled={true} />
          </div>
        )}
      </div>
      <Navbar isScrolled={isScrolled} />
    </>
  );
};

export default MainNavbar;
