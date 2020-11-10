import { Link } from "gatsby";
import React from "react";
import SocialIcons from "./social-icons";

function Footer() {
  return (
    <footer className="lg:flex justify-between items-center text-navy-100 py-8 lg:py-0">
      <nav className="w-full lg:flex justify-between items-end p-4 md:p-8 text-sm">
        <div className="block lg:flex items-center px-4 lg:px-0 text-lg">
          <p className="mr-12 text-sm mb-4 lg:mb-0">
            &copy; {new Date().getFullYear()} Bootpack Digital, LLC
          </p>
          <div className="grid grid-cols-2 lg:flex">
            <Link className="block font-semibold py-4 lg:py-2 lg:px-4" to="/">
              Home
            </Link>
            <Link
              className="block font-semibold py-4 lg:py-2 lg:px-4"
              to="/work"
            >
              Work
            </Link>
            <Link
              className="block font-semibold py-4 lg:py-2 lg:px-4"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block font-semibold py-4 lg:py-2 lg:px-4"
              to="/open-source"
            >
              Open Source
            </Link>
            <Link
              className="block font-semibold py-4 lg:py-2 lg:px-4"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end mt-6 lg:mt-0">
          <SocialIcons />
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
