import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heatmap from "../images/heatmap.svg";
import ContactForm from "../components/contact-form";
import Brands from "../components/brands";
import WhatMakesUsDifferent from "../components/what-makes-us-different";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Custom web development in Utah" />

      <div className="container mx-auto">
        <div className="w-full py-12 md:py-24 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-navy-500 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
              Software and Web Developers{` `}
              <br />
              <span className="text-blue-500">in Salt Lake, UT</span>
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-blue-600">
              We build websites, mobile applications, and web software. We want
              to help you turn your ideas into realities. We understand how to
              build quality software, and we understand what it takes for a
              business to succeed. Let us help you get your product ot the next
              level.
            </p>
            <div className="rounded-md shadow my-4 lg:my-0">
              <a
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                href="#get-in-touch"
              >
                Send us a message
              </a>
            </div>
          </div>

          <div className="w-full xl:w-2/5 pt-12 lg:py-6 overflow-y-hidden">
            <img
              alt="People First"
              className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src={Heatmap}
            />
          </div>
        </div>
      </div>
      <WhatMakesUsDifferent />
      <Brands />
      <div className="container mx-auto">
        <div className="w-full mx-auto py-6 px-8 mt-16" id="get-in-touch">
          <h2 className="text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
            Get in touch!
          </h2>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
