import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({ className }) {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "michael-bonner.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`);
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="Michael Bonner"
      className={className} />
  );
}
