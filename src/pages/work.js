import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HereKidsWin from "../components/images/work/here-kids-win";
import WasatchCovers from "../components/images/work/wasatch-covers";
import HeritageOfPreston from "../components/images/work/heritage-of-preston";
import { Link } from "gatsby";

const WorkItem = ({ description, link, poster, title }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <a
        className="flex-shrink-0"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {poster}
      </a>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <a
            className="block"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              {description}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Site
              <svg
                className="ml-1 text-white w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <Layout>
      <SEO
        description="We build engaging, custom experiences for our clients. Here's a few examples we're particularly proud of."
        title="Work from Bootpack Digital"
      />
      <div className="relative hero-bg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Our Work
            </h2>
            <p className="mt-3 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-4">
              We build engaging, custom experiences for our clients. Here's a
              few examples we're particularly proud of.
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <WorkItem
              description={`Primary Children's Hospital launched a campaign called "Here Kids Win." As part of the campaign they wanted an interactive website to showcase some of the patient stories that have been submitted. We worked with the talented design team at Faktory to build an engaging experience seen by hundreds of thousands.`}
              link={`https://herekidswin.com/`}
              poster={<HereKidsWin />}
              title={`Here Kids Win`}
            />
            <WorkItem
              description={`Wasatch Covers was tired of their WordPress site's performance so we rebuilt the thing using modern technologies. The site now loads in a snap, check it out for yourself. Conversion rates are dramatically up now that customers aren't waiting seconds for a single page to load.`}
              link={`https://wasatchcovers.com/`}
              poster={<WasatchCovers />}
              title={`Wasatch Covers`}
            />
            <WorkItem
              description={`Heritage Senior Living in Preston, ID reached out to revamp their outdated website. We rebuilt it to help customers find what they're looking for. The new site highlights the facility with lots of photos.`}
              link={`https://www.heritageofpreston.com/`}
              poster={<HeritageOfPreston />}
              title={`Heritage Senior Living`}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-10">
            <span className="block">Ready to get started?</span>
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
export default Work;
