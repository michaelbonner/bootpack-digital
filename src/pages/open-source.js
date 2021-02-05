import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const OpenSource = () => {
  return (
    <Layout>
      <SEO
        description="Open source is important to the modern web. We are committed to sharing tools we think will strengthen the web development community."
        title="Open Source Projects"
      />
      <div className="hero-bg to-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Open Source Projects
            </h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-xl leading-7 text-gray-500 max-w-screen-md">
                Most of the web is built on open-source projects. Since open
                source projects are such a valuable resource, we are committed
                to sharing tools we think will strengthen the web development
                community.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            <div>
              <a
                className="block hover:underline"
                href="https://github.com/michaelbonner/is-it-down"
              >
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Is It Down Checker
                </h3>
              </a>
              <p className="mt-3 text-base leading-6 text-gray-500">
                A tool to track whether or not your sites are up. It also keeps
                track of how often a site goes down, and for how long. An
                invaluable tool for any company that manages several sites.
              </p>
              <div className="mt-3">
                <a
                  className="text-base leading-6 font-semibold text-orange-600 hover:text-orange-500 transition ease-in-out duration-150"
                  href="https://github.com/michaelbonner/is-it-down"
                >
                  See Is It Down Checker Code on GitHub
                </a>
              </div>
            </div>
            <div>
              <a
                className="block hover:underline"
                href="https://github.com/michaelbonner/redirects-wizard"
              >
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Redirects Wizard
                </h3>
              </a>
              <p className="mt-3 text-base leading-6 text-gray-500">
                Sometimes when you're migrating a site you have a lot of links
                you need to redirect somewhere else. Redirects Wizard allows you
                to do that task, but much quicker.
              </p>
              <div className="mt-3">
                <a
                  className="text-base leading-6 font-semibold text-orange-600 hover:text-orange-500 transition ease-in-out duration-150"
                  href="https://github.com/michaelbonner/redirects-wizard"
                >
                  See Redirects Wizard Code on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-10">
            <span className="block">Ready to build something together?</span>
            <span className="block text-blue-600">
              Send us a message so we can chat.
            </span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out"
                to="/contact"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OpenSource;
