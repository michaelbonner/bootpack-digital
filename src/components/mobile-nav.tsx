import { Link } from "gatsby";
import React, { useState } from "react";
import SocialIcons from "./social-icons";
import BootpackVertical from "../images/bootpack-digital.svg";

const MobileNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <button
        className="block lg:hidden"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <svg
          className="w-8 stroke-current text-navy-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            d="M4 6h16M4 12h16m-7 6h7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </button>
      {mobileNavOpen && (
        <div
          className={`absolute text-center z-50 top-4 left-4 right-4 bg-white shadow-lg border border-gray-100 py-4 px-6 rounded-md`}
        >
          <button
            className="absolute right-3 top-5 text-orange-500 font-semibold w-6 h-6"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>

          <Link
            className="flex items-center text-blue-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl mr-0 lg:mr-8"
            to="/"
          >
            <img
              alt="Bootpack Digital"
              className="w-full"
              src={BootpackVertical}
            />
          </Link>
          <Link
            className="block text-navy-400 font-semibold text-xl py-2 px-4"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block text-navy-400 font-semibold text-xl py-2 px-4"
            to="/work/"
          >
            Work
          </Link>
          <Link
            className="block text-navy-400 font-semibold text-xl py-2 px-4"
            to="/about/"
          >
            About
          </Link>
          <Link
            className="block text-navy-400 font-semibold text-xl py-2 px-4"
            to="/open-source/"
          >
            Open Source
          </Link>
          <Link
            className="lg:ml-4 flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            to="/contact/"
          >
            Request a Quote
          </Link>

          <div className="mt-4 flex justify-center">
            <SocialIcons />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
