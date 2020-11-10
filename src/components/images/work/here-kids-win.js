import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "work/here-kids-win.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Img alt="Here Kids Win" fluid={data.file.childImageSharp.fluid} />;
}