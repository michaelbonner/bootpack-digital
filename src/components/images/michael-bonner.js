import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Image({ className }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "michael-bonner.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Img
      alt="Michael Bonner"
      className={className}
      fluid={data.file.childImageSharp.fluid}
    />
  );
}
