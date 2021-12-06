import React from "react";
import { Link } from "gatsby";
import Cosgriff from "../components/images/work/cosgriff";
import DenverWindowWellCovers from "../components/images/work/denver-window-well-covers";
import HereKidsWin from "../components/images/work/here-kids-win";
import HeritageOfPreston from "../components/images/work/heritage-of-preston";
import JeremyMiller from "../components/images/work/jeremy-miller";
import KnowYourForce from "../components/images/work/know-your-force";
import Ravens from "../components/images/work/ravens";
import TheDoctorsCbd from "../components/images/work/the-doctors-cbd";
import ThunderBiotech from "../components/images/work/thunder-biotech";
import WasatchCovers from "../components/images/work/wasatch-covers";
import Layout from "../components/layout";
import SEO from "../components/seo";

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
        title="Work"
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
          <div className="mt-12 grid gap-x-5 gap-y-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <WorkItem
              description={`Primary Children's Hospital launched a campaign called "Here Kids Win." As part of the campaign they wanted an interactive website to showcase some of the patient stories that have been submitted. We worked with the talented design team at Faktory to build an engaging experience seen by hundreds of thousands.`}
              link={`https://herekidswin.com/`}
              poster={<HereKidsWin />}
              title={`Primary Children's Hospital | Here Kids Win`}
            />
            <WorkItem
              description={`Wasatch Covers was tired of their WordPress site's performance so we rebuilt the thing using modern technologies. The site now loads in a snap, check it out for yourself. Conversion rates are dramatically up now that customers aren't waiting seconds for a single page to load.`}
              link={`https://wasatchcovers.com/`}
              poster={<WasatchCovers />}
              title={`Wasatch Covers`}
            />
            <WorkItem
              description={`As skilled technicians with a unique sensibility for storytelling, RAVENS are poised to execute nearly any mission from heavy lift aerials to pursuit tracking or technical phantom flex high speed work.`}
              link={`https://ravensfilmworks.com/`}
              poster={<Ravens />}
              title={`Ravens Film Works`}
            />
            <WorkItem
              description={`Know Your Force (KYF) is rethinking the way police and communities communicate. QR codes are generated for each employee and can be printed anywhere. The end user scans the QR code, and leaves a review for the representative. We built the platform from the ground up using serverless technology to help the platform scale infinitely. `}
              link={`https://knowyourforce.com/`}
              poster={<KnowYourForce />}
              title={`Know Your Force`}
            />
            <WorkItem
              description={`Heritage Senior Living in Preston, ID reached out to revamp their outdated website. We rebuilt it to help customers find what they're looking for. The new site highlights the facility with lots of photos.`}
              link={`https://www.heritageofpreston.com/`}
              poster={<HeritageOfPreston />}
              title={`Heritage Senior Living`}
            />
            <WorkItem
              description={`Denver Window Well Covers was a ground up build to service the semi-custom needs of Colorado residents. Denver Window Well Covers offers a quality product at the lowest prices on window well covers in Colorado and Denver areas.`}
              link={`https://denverwindowwellcovers.com/`}
              poster={<DenverWindowWellCovers />}
              title={`Denver Window Well Covers`}
            />
            <WorkItem
              description={`Jeremy Miller is an award-winning film director based in Salt Lake City, Utah. He wanted a new site that put the focus on the work, so we built him a site that did exactly that in a stylistic way. Be sure to check out the custom Vimeo player on the individual work page; we're pretty proud of that one.`}
              link={`https://jeremymillerdirector.com/`}
              poster={<JeremyMiller />}
              title={`Director Jeremy Miller`}
            />
            <WorkItem
              description={`The Cosgriff school used a site we built about 10 years ago. Needless to say it was time for a fresh coat of paint and a rethink of how the pages were organized. We rebuilt the site from the ground up in ~4 weeks. After comparing analytics the new site clearly outperforms the old site in nearly every measurable way.`}
              link={`https://cosgriff.org/`}
              poster={<Cosgriff />}
              title={`J.E. Cosgriff School`}
            />
            <WorkItem
              description={`Thunder Biotech is a cancer research group with huge aspirations. They needed a site that conveyed their purpose and vision. We worked with the team at Faktory to build a site to accomplish their goals.`}
              link={`https://thunderbiotech.com/`}
              poster={<ThunderBiotech />}
              title={`Thunder Biotech`}
            />
            <WorkItem
              description={`The Doctors CBD had an existing site, but it was slow and lacked the features they needed in order to sell their products online. We redesigned a new elegant site that has helped them list and sell their products online.`}
              link={`https://www.thedoctorscbdrelief.com/`}
              poster={<TheDoctorsCbd />}
              title={`The Doctors CBD`}
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
                to="/contact/"
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
