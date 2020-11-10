import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";
import Obfuscate from "react-obfuscate";

function ContactPage() {
  return (
    <Layout>
      <SEO
        description="Do you have a project idea or an existing site that needs to be updated? Do you need an outside consultant? Get in touch!"
        title="Contact Bootpack Digital"
      />
      <div className="bg-white pt-8">
        <div className="container mx-auto px-4 text-gray-700">
          <h1 className="mt-12 text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
            Get in touch
          </h1>
          <div className="pt-4 max-w-3xl lg:mx-24">
            <div className="flex items-center mt-4">
              <svg
                className="w-6 h-5 fill-current text-blue-600"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Phone</title>
                <rect
                  fill="none"
                  height="480"
                  rx="48"
                  ry="48"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  width="256"
                  x="128"
                  y="16"
                />
                <path
                  d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
              <p className="ml-2">
                <Obfuscate tel="(801) 839-5287" />
              </p>
            </div>
            <div className="flex items-center mt-4">
              <svg
                className="w-6 h-5 fill-current text-blue-600"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mail</title>
                <rect
                  fill="none"
                  height="320"
                  rx="40"
                  ry="40"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  width="416"
                  x="48"
                  y="96"
                />
                <path
                  d="M112 160l144 112 144-112"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
              <p className="ml-2">
                <Obfuscate email="hey@bootpackdigital.com" />
              </p>
            </div>
            <div className="flex items-center mt-4">
              <svg
                className="w-6 h-5 fill-current text-blue-600"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Address</title>
                <path d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z" />
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
              </svg>
              <p className="ml-2">
                6890 S 2300 E, Unit 711235
                <br />
                Salt Lake City, UT 84171
              </p>
            </div>
          </div>
          <section className="pt-6 pb-24 lg:mx-24">
            <p className="mt-4 text-xl max-w-3xl">
              Do you have a project idea or an existing site that needs to be
              updated? Do you need an outside consultant? Fill out this form and
              we'll be in touch.
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
