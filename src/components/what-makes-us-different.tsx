import React from "react";

const WhatMakesUsDifferent = () => {
  return (
    <div className="py-12 lg:py-36 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                15 years of experience
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Experience matters when it comes to building quality software.
                Working at agencies, in-house, and freelance has given us a
                breadth of understanding that's hard to come by any other way.
                We've built large scale production applications and will bring
                that knowledge to any project, no matter how big or small.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Business knowledge
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                We are a business minded development group. We don't just think
                about the code. Helping businesses grow has given us an
                understanding of ROI that allows us to help clients tune their
                ideas into something shippable and lovable. Go-to-market
                strategies can make or break your product. We can help guide you
                down a path that works for you.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                The latest tech
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Blazing fast performance improves conversions. Period. We build
                on the latest tech to make the customer experience as smooth and
                reliable as possible. We like the latest tech, your clients like
                the latest tech, it's a win-win.
              </p>
              <p className="mt-2 text-sm underline">
                <a
                  href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fbootpackdigital.com%2F"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                >
                  Check out our Google PageSpeed score
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatMakesUsDifferent;
