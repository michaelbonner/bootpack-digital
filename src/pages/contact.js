import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container mx-auto px-4">
        <h1 className="mt-12 text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
          Get in touch
        </h1>
        <section className="py-6">
          <ContactForm />
        </section>
      </div>
    </Layout>
  );
}

export default ContactPage;
