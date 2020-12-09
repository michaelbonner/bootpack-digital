import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

function PrivacyPage() {
  return (
    <Layout>
      <SEO
        description="Do you have a project idea or an existing site that needs to be updated? Do you need an outside consultant? Get in touch!"
        title="Privacy Policy"
      />
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 text-gray-700">
          <h1 className="mt-12 text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
            Privacy Policy
          </h1>
          <div className="pt-4 max-w-3xl lg:mx-24">
            <p className="mt-4">
              Your privacy is important to us. It is Bootpack Digital, LLC's
              policy to respect your privacy regarding any information we may
              collect from you across our website,{` `}
              <a href="https://bootpackdigital.com/">
                https://bootpackdigital.com/
              </a>
              , and other sites we own and operate.
            </p>
            <p className="mt-4">
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </p>
            <p className="mt-4">
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use or
              modification.
            </p>
            <p className="mt-4">
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.
            </p>
            <p className="mt-4">
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>
            <p className="mt-4">
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services.
            </p>
            <p className="mt-4">
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.
            </p>
            <p className="mt-4">
              This policy is effective as of 1 December 2020.
            </p>
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
}

export default PrivacyPage;
