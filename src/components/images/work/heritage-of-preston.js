import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "work/heritage-of-preston.jpg" }) {
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
  return (
    <Img alt="Heritage of Preston" fluid={data.file.childImageSharp.fluid} />
  );
}
