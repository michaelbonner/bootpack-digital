import React, { CSSProperties } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";
import Obfuscate from "react-obfuscate";

function ContactPage() {
  return (
    <Layout>
      <SEO
        description="Do you have a project idea or an existing site that needs to be updated? Do you need an outside consultant? Get in touch!"
        title="Contact Us"
      />
      <div className="bg-white pt-8">
        <div className="container mx-auto px-4 text-gray-700 max-w-3xl">
          <h1 className="mt-12 text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
            Get in touch
          </h1>
          <p className="mt-4 text-xl max-w-3xl">
            Do you have a project idea or an existing site that needs to be
            updated? Do you need an outside consultant? Fill out this form and
            we'll be in touch. We specialize in custom web design, web
            development, and app development.
          </p>
          <div className="pt-4 max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-between items-end">
              <div>
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
              <div>
                <a
                  className="flex w-full lg:w-auto mt-8 px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  href="https://calendly.com/michaelbonner/30-minute-project-discussion"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="mx-2 text-white flex items-end">
                    Schedule a call on
                    <svg
                      className="fill-current text-white inline-block w-20 ml-2"
                      style={
                        {
                          enableBackground: `new 0 0 534 160`,
                        } as CSSProperties
                      }
                      version="1.1"
                      viewBox="0 0 534 160"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0px"
                    >
                      <g transform="matrix(1.3743674 0 0 1.3743674 -4.586789 185.07591)">
                        <path
                          className="st0"
                          d="M163.9-104.8c-7.8-7.8-18-11.7-28.3-11.7c-10.2,0-20.5,3.9-28.3,11.7c-15.6,15.6-15.6,40.9,0,56.6
		c15.6,15.6,40.9,15.6,56.6,0C179.5-63.8,179.5-89.2,163.9-104.8L163.9-104.8z M152.6-59.5c-9.4,9.4-24.6,9.4-33.9,0
		c-9.4-9.4-9.4-24.6,0-33.9c9.4-9.4,24.6-9.4,33.9,0C161.9-84.1,161.9-68.9,152.6-59.5z"
                        />
                        <path
                          className="st0"
                          d="M247.9-104.8c-7.8-7.8-18-11.7-28.3-11.7c-10.2,0-20.5,3.9-28.3,11.7c-15.6,15.6-15.6,40.9,0,56.6
		c15.6,15.6,40.9,15.6,56.6,0C263.5-63.8,263.5-89.2,247.9-104.8L247.9-104.8z M236.6-59.5c-9.4,9.4-24.6,9.4-33.9,0
		c-9.4-9.4-9.4-24.6,0-33.9c9.4-9.4,24.6-9.4,33.9,0C245.9-84.1,245.9-68.9,236.6-59.5z"
                        />
                        <path
                          className="st0"
                          d="M35.6-36.7l4,0.2h60l-0.2-4c-0.5-6.6-5.2-11.4-11.8-11.8l-4-0.2h-36l48-48l-0.2-4c-0.3-6.6-5.2-11.5-11.8-11.8
		l-4-0.2h-60l0.2,4c0.5,6.5,5.3,11.4,11.8,11.8l4,0.2h36l-48,48l0.2,4C24.2-41.9,29-37.1,35.6-36.7z"
                        />
                        <path
                          className="st0"
                          d="M309.4-92.5c1.4,2.4,1.8,5,2,8l0.2,4v28l0.2,4c0.4,6.5,5.2,11.4,11.8,11.8l4,0.2v-44l0.2-4
		c0.2-3,0.6-5.7,2-8.1c2.8-4.8,7.9-7.9,13.8-7.9s11.1,3.2,13.9,8c1.4,2.4,1.8,5.1,1.9,8l0.2,4v28l0.2,4c0.4,6.6,5.2,11.4,11.8,11.8
		l4,0.2v-44v-4c0-17.7-14.3-32-32-32c-9.6,0-18.1,4.2-24,10.8c-5.9-6.6-14.4-10.8-24-10.8c-6.6,0-12.8,2-17.9,5.5
		c-3.1-3.5-10.1-5.5-14.1-5.5v80l4-0.2c6.7-0.4,11.5-5.2,11.8-11.8l0.2-4v-28l0.2-4c0.2-3,0.6-5.7,2-8c2.8-4.8,7.9-8,13.8-8
		S306.7-97.3,309.4-92.5z"
                        />
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <section className="w-full max-w-3xl mx-auto pt-6 lg:pt-8 pb-24 mt-8 lg:mt-12 border-t">
            <ContactForm />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
