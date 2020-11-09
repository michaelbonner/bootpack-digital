import React from "react";

const WhatMakesUsDifferent = () => {
  return (
    <div className="lg:my-12 py-12 bg-white">
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
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                15 years of experience
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                We've been around the block. We've worked at agencies, in house,
                and freelance. We've built large scale production applications
                and will bring that knowledge to any project, no matter how big
                or small.
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
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                Understanding of business
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                We offer an understanding of ROI and work with clients to tune
                their ideas into something shippable. Go to market strategies
                can make or break your product. We can help guide you down a
                path that works for you. We're only happy when you're happy.
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
              <h5 className="text-lg leading-6 font-medium text-gray-900">
                The latest tech
              </h5>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Blazing fast performance equals conversions. Period. We build on
                the latest tech to make customer experience as smooth and
                reliable as possible. We like the latest tech, your clients like
                the latest tech, it's a win-win.
              </p>
              <p className="mt-2 text-sm underline">
                <a
                  href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbootpackdigital.com%2F&tab=desktop"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                >
                  Check out our PageSpeed score
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
