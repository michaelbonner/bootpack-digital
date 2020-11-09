import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HereKidsWin from "../components/images/work/here-kids-win";
import Cosgriff from "../components/images/work/cosgriff";
import HeritageOfPreston from "../components/images/work/heritage-of-preston";

const WorkItem = ({ description, link, poster, title }) => {
  return (
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <a class="flex-shrink-0" href={link}>
        {poster}
      </a>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <a class="block" href={link}>
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">{description}</p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              href={link}
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
      <SEO title="Work of Bootpack Digital" />
      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Our Work
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              We build engaging, custom experiences for our clients. Here's a
              few examples we're particularly proud of.
            </p>
          </div>
          <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <WorkItem
              description={`Primary Children's Hospital launched a campaign called "Here Kids Win." As part of the campaign they wanted an interactive website to showcase some of the patient stories that have been submitted.`}
              link={`https://herekidswin.com/`}
              poster={<HereKidsWin />}
              title={`Here Kids Win`}
            />
            <WorkItem
              description={`J.E. Cosgriff Memorial Catholic School has been a long time client that needed a refresh. We rebuilt the site to make it easier for users to find what they are looking for and easier for employees to add content.`}
              link={`https://cosgriff.org/`}
              poster={<Cosgriff />}
              title={`J.E. Cosgriff Memorial Catholic School`}
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
    </Layout>
  );
};
export default Work;
