import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
export default function Image() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "work/denver-window-well-covers.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="Here Kids Win"
    />
  );
}
