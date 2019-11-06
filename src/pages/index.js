import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Functions from "../images/functions.svg";
import Destinations from "../images/destinations.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Bootpack Digital, LLC" />

      <div
        className="w-full pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center"
        style={{ backgroundImage: Destinations, backgroundSize: `100%` }}
      >
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            People first, product second
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            We work with and for people to build quality experiences for people.
          </p>
        </div>

        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            alt="People First"
            className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
            src={Functions}
          />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
