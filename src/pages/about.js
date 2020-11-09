import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MichaelBonner from "../components/images/michael-bonner";
import { Link } from "gatsby";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About Us" />

      <div className="relative py-16 bg-white overflow-hidden text-lg leading-8">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Introducing
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-navy-700 sm:text-4xl sm:leading-10">
              Bootpack Digital
            </h1>
          </div>

          <div className="max-w-prose text-gray-500 mx-auto">
            <p className="text-xl text-gray-500 leading-8">
              We're a small group of passionate creators trying to make a
              difference. We value quality deliverables and human interaction.
              People are who we are, who we build for, and who we work for.
            </p>
          </div>
          <div className="max-w-prose text-gray-500 mx-auto mt-12">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Who are we?
            </h2>
          </div>
          <div className="max-w-prose mx-auto mt-8">
            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <MichaelBonner className="overflow-hidden shadow-lg rounded-lg my-0 py-0" />
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-xl">Michael Bonner</h3>
                    <p className="text-orange-600 mt-2">Founder</p>
                  </div>
                  <div className="text-lg leading-7">
                    <p className="text-gray-500">
                      Michael started Bootpack Digital in 2019 as the next
                      generation of a freelance business he started in 2006.
                      Michael has been building websites since he was 16. What
                      started out as a fun thing to do became a livelihood.
                      Michael has worked at several different companies,
                      including managing a development team for 5 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-prose text-gray-500 mx-auto mt-12">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Why "Bootpack"?
            </h2>
            <p className="mt-4">
              I'm from Utah, so a lot of my life revolves around outdoor sports.
              Sometimes when you're skiing you need to need to unclip and hike
              your way to find fresh snow. To get there you can follow a boot
              pack, which is where other hikers have hiked up a steep section.
              The boot pack helps make the journey easier. That's where we come
              in, our goal is to help you, and your business, get to new
              heights.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
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
}

export default AboutPage;
