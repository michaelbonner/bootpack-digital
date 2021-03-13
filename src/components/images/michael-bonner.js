import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function MichaelBonner({ className }) {
  return (
    <StaticImage
      src="../../images/michael-bonner.jpg"
      alt="Michael Bonner"
      className={className}
    />
  );
}
