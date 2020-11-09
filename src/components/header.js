import { Link } from "gatsby";
import React, { useState } from "react";
import BootpackHorizontal from "../images/bootpack-horizontal.svg";
import BootpackVertical from "../images/bootpack-digital.svg";
import SocialIcons from "./social-icons";

const MobileNav = ({ mobileNavOpen, setMobileNavOpen }) => {
  return (
    <div
      className={
        mobileNavOpen
          ? `absolute text-center z-50 top-4 left-4 right-4 bg-white shadow-lg border border-gray-100 py-4 px-6 rounded-md`
          : `hidden`
      }
    >
      <button
        className="absolute right-5 top-5 text-orange-500 font-semibold w-6 h-6"
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
        <img alt="Bootpack Digital" className="w-full" src={BootpackVertical} />
      </Link>
      <Link
        className="block text-navy-400 font-semibold text-xl py-2 px-4"
        to="/"
      >
        Home
      </Link>
      <Link
        className="block text-navy-400 font-semibold text-xl py-2 px-4"
        to="/work"
      >
        Work
      </Link>
      <Link
        className="block text-navy-400 font-semibold text-xl py-2 px-4"
        to="/open-source"
      >
        Open Source
      </Link>

      <div className="mt-4 flex justify-center">
        <SocialIcons />
      </div>
    </div>
  );
};

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="bg-white z-20 w-full mx-auto px-6 py-2 sticky top-0">
      <div className="w-full flex items-center justify-between">
        <div className="w-full justify-between flex items-center">
          <Link
            className="flex items-center text-blue-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl mr-0 lg:mr-8"
            to="/"
          >
            <img
              alt="Bootpack Digital"
              className="h-20"
              src={BootpackHorizontal}
            />
          </Link>

          <div className="hidden lg:flex">
            <Link
              className="text-navy-400 hover:underline font-semibold text-xl px-4"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-navy-400 hover:underline font-semibold text-xl px-4"
              to="/work"
            >
              Work
            </Link>
            <Link
              className="text-navy-400 hover:underline font-semibold text-xl px-4"
              to="/open-source"
            >
              Open Source
            </Link>
          </div>
        </div>

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
            <path
              d="M4 6h16M4 12h16m-7 6h7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>
        <MobileNav
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
      </div>
    </div>
  );
}

export default Header;
