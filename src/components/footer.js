import React from "react";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <nav className="flex justify-between p-4 md:p-8 text-sm">
        <p>&copy; {new Date().getFullYear()} Bootpack Digital, LLC</p>

        <p>
          <a
            className="font-bold no-underline text-grey-300"
            href="https://github.com/michaelbonner/bootpack-digital"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
}
export default Footer;
