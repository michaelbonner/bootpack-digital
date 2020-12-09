import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="relative py-16 bg-white overflow-hidden text-lg leading-8">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold inline-block my-8 p-3">
              404: Looks like you got lost along the way.
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
