import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="leading-normal tracking-normal text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer>
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
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
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
