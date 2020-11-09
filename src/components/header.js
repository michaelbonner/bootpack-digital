import { Link } from "gatsby";
import React, { useState } from "react";
import BootpackHorizontal from "../images/bootpack-horizontal.svg";
import BootpackVertical from "../images/bootpack-digital.svg";

const SocialButtons = () => {
  return (
    <div className="hidden lg:flex w-1/2 justify-end content-center">
      <a
        className="inline-block text-blue-300 no-underline hover:text-blue-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
        href="https://fb.me/bootpack.digital"
      >
        <svg
          className="fill-current h-6"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
        </svg>
      </a>
      <a
        className="inline-block text-blue-300 no-underline hover:text-blue-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
        href="https://www.instagram.com/bootpack.digital/"
      >
        <svg
          className="fill-current h-6"
          viewBox="0 0 511 511.9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
          <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
          <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
        </svg>
      </a>
    </div>
  );
};

const MobileNav = ({ mobileNavOpen, setMobileNavOpen }) => {
  return (
    <div
      className={
        mobileNavOpen
          ? `absolute z-50 top-4 left-4 right-4 bg-white shadow-lg border border-gray-100 py-4 px-6 rounded-md`
          : `hidden`
      }
    >
      <button
        className="absolute right-3 top-3 text-navy-700 font-semibold w-6 h-6"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        X
      </button>

      <Link
        className="flex items-center text-blue-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl mr-0 lg:mr-8"
        to="/"
      >
        <img alt="Bootpack Digital" className="w-full" src={BootpackVertical} />
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

      <SocialButtons />
    </div>
  );
};

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div className="w-full mx-auto p-6">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
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

        <SocialButtons />
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
