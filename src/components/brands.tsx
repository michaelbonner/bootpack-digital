import { Link } from "gatsby";
import React from "react";
import CocaCola from "../images/clients/coca-cola-classic-gray.svg";
import EdgeHomes from "../images/clients/edge-homes-gray.svg";
import IntermountainHealthcare from "../images/clients/intermountain-healthcare-gray.svg";
import NationalEnergyFoundation from "../images/clients/national-energy-foundation-gray.svg";
import Ogio from "../images/clients/ogio-gray.svg";
import WasatchCovers from "../images/clients/wasatch-covers-gray.svg";

function BrandImage({ title, logo, width = 300, height = 126 }) {
  return (
    <div className="py-3 px-4">
      <img alt={title} src={logo} width={width} height={height} />
    </div>
  );
}

function Brands() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-4 lg:py-24">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="lg:mt-8">
            <h2 className="text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Brands we have worked with
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-7 text-navy-700">
              We have worked with companies from all different industries on all
              sizes of projects.
            </p>
            <p className="mt-3">
              <Link className="underline text-lg text-blue-500" to="/work/">
                See some of our work
              </Link>
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 items-center">
            <BrandImage
              height={126}
              logo={CocaCola}
              title="CocaCola"
              width={300}
            />
            <BrandImage
              height={130}
              logo={NationalEnergyFoundation}
              title="National Energy Foundation"
              width={300}
            />
            <BrandImage
              height={65}
              logo={EdgeHomes}
              title="EDGEHomes"
              width={300}
            />
            <BrandImage
              height={63}
              logo={IntermountainHealthcare}
              title="Intermountain Healthcare"
              width={300}
            />
            <BrandImage height={102} logo={Ogio} title="Ogio" width={300} />
            <BrandImage
              height={150}
              logo={WasatchCovers}
              title="Wasatch Covers"
              width={298}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brands;
