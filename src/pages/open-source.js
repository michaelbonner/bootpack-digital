import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const OpenSource = () => {
  return (
    <Layout>
      <SEO title="Open Source Projects from Bootpack Digital" />
      <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Open Source Projects
            </h2>
            <div class="mt-3 sm:mt-4">
              <p class="text-xl leading-7 text-gray-500 max-w-screen-md">
                Most of the web is built on open-source projects. Since we rely
                on it so heavily we thought we'd try to share some projects of
                our own.
              </p>
            </div>
          </div>
          <div class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div>
              <a
                class="block"
                href="https://github.com/michaelbonner/is-it-down"
              >
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Is It Down Checker
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  A tool to track whether or not your sites are up. It also
                  keeps track of how often a site goes down, and for how long.
                  An invaluable tool for any company that manages several sites.
                </p>
              </a>
              <div class="mt-3">
                <a
                  class="text-base leading-6 font-semibold text-orange-600 hover:text-orange-500 transition ease-in-out duration-150"
                  href="https://github.com/michaelbonner/is-it-down"
                >
                  See Is It Down Checker Code on GitHub
                </a>
              </div>
            </div>
            <div>
              <a
                class="block"
                href="https://github.com/michaelbonner/redirects-wizard"
              >
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Redirects Wizard
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Sometimes when you're migrating a site you have a lot of links
                  you need to redirect somewhere else. Redirects Wizard allows
                  you to do that task, but much quicker.
                </p>
              </a>
              <div class="mt-3">
                <a
                  class="text-base leading-6 font-semibold text-orange-600 hover:text-orange-500 transition ease-in-out duration-150"
                  href="https://github.com/michaelbonner/redirects-wizard"
                >
                  See Redirects Wizard Code on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OpenSource;
