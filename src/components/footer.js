import { Link } from "gatsby";
import React from "react";
import SocialIcons from "./social-icons";

function Footer() {
  return (
    <footer className="border-t border-gray-200 lg:flex justify-between items-end">
      <nav className="w-full flex justify-between items-end p-4 md:p-8 text-sm">
        <div className="block lg:flex items-center">
          <p className="mr-12">
            &copy; {new Date().getFullYear()} Bootpack Digital, LLC
          </p>
          <Link className="block text-navy-500 py-2 lg:px-4" to="/">
            Home
          </Link>
          <Link className="block text-navy-500 py-2 lg:px-4" to="/work">
            Work
          </Link>
          <Link className="block text-navy-500 py-2 lg:px-4" to="/open-source">
            Open Source
          </Link>
          <Link className="block text-navy-500 py-2 lg:px-4" to="/contact">
            Contact
          </Link>
          <Link className="block text-navy-500 py-2 lg:px-4" to="/about">
            About
          </Link>
        </div>
        <SocialIcons />
      </nav>
    </footer>
  );
}
export default Footer;
