import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Destinations from "../images/destinations.svg";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="leading-normal tracking-normal text-gray-900">
      <Header />

      <main
        className="flex flex-col flex-1 md:justify-center lg:mx-16 px-4 py-8 md:p-8"
        style={{
          backgroundImage: `url(${Destinations})`,
          backgroundSize: `80%`,
          backgroundPosition: `100% 0%`,
          backgroundRepeat: `no-repeat`
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
