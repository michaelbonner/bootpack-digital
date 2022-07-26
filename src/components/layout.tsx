import PropTypes from "prop-types";
import React from "react";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="leading-normal tracking-normal text-gray-900">
      <Header />

      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
