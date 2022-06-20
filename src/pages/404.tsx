import React from "react";
import lottie from "lottie-web";
import { createRef, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import animation from "../lottie/lost.json";

function NotFoundPage() {
  let animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!animationContainer || animationContainer.current === null) {
      return;
    }

    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: `svg`,
      loop: true,
      autoplay: true,
      animationData: animation,
    });

    return () => anim.destroy();
  }, [animationContainer]);

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="relative py-16 bg-white overflow-hidden text-lg leading-8">
        <div className="relative px-4 sm:px-6 lg:px-8 text-center grid gap-y-12">
          <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
            404: Looks like you got lost along the way
          </h1>
          <div
            className="animation-container w-full max-w-3xl mx-auto"
            ref={animationContainer}
          />
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
