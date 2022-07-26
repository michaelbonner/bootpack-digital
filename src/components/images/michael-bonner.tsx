import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function MichaelBonner({ className }) {
  return (
    <StaticImage
      alt="Michael Bonner"
      className={className}
      src="../../images/michael-bonner.jpg"
    />
  );
}
