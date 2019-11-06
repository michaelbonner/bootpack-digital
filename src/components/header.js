import { Link } from "gatsby";
import React from "react";
import BootpackHorizontal from "../images/bootpack-horizontal.svg";

function Header() {
  return (
    <div className="w-full container mx-auto p-6">
      <div className="w-full flex items-center justify-between">
        <Link
          className="flex items-center text-blue-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          to="/"
        >
          <img
            alt="Bootpack Digital"
            className="h-20"
            src={BootpackHorizontal}
          />
        </Link>

        <div className="flex w-1/2 justify-end content-center">
          <a
            className="inline-block text-blue-300 no-underline hover:text-blue-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
            href="https://www.facebook.com/Bootpack-Digital-LLC-105277397590244/"
          >
            <svg
              className="fill-current h-6"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
