import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About Us"
      />

      <div className="w-full py-16">
        We're a small group of passionate creators trying to make a difference.
        We value quality deliverables and human interaction. People are who we
        are, who we build for, and who we work for.
      </div>
      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
            The only way to make sense out of change is to plunge into it, move
            with it, and join the dance.
          </blockquote>

          <cite className="font-bold mt-4 text-right text-xs uppercase block">
            – Alan Watts
          </cite>
        </div>
        <figure className="w-2/3 md:w-1/3"></figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
