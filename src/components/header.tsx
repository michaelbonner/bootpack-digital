import { Link } from "gatsby";
import React from "react";
import BootpackHorizontal from "../animated-images/bootpack-horizontal.svg";
import MobileNav from "./mobile-nav";

function Header() {
  return (
    <div className="bg-white z-20 w-full mx-auto px-6 py-2 sticky top-0 shadow-md lg:shadow-none">
      <div className="w-full flex items-center justify-between">
        <div className="w-full justify-between flex items-center">
          <Link
            className="flex items-center text-blue-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl mr-0 lg:mr-8"
            to="/"
          >
            <BootpackHorizontal alt="Bootpack Digital" className="h-20" />
          </Link>

          <div className="hidden lg:flex items-center">
            <Link
              className="text-navy-400 hover:underline font-semibold text-xl px-4"
              to="/work/"
            >
              Work
            </Link>
            <Link
              className="text-navy-400 hover:underline font-semibold text-xl px-4"
              to="/about/"
            >
              About
            </Link>
            <Link
              className="text-navy-400 hover:underline font-semibold text-xl px-4"
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
          </div>
        </div>

        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
