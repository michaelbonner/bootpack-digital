import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="w-full max-w-6xl mx-auto bg-gray-300 py-6 px-12 mt-16 shadow-md">
        <ContactForm />
      </section>
    </Layout>
  );
}

export default ContactPage;
