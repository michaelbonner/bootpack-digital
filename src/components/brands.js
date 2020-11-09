import React from "react";
import CocaCola from "../images/clients/coca-cola-classic-gray.svg";
import EdgeHomes from "../images/clients/edge-homes-gray.svg";
import IntermountainHealthcare from "../images/clients/intermountain-healthcare-gray.svg";
import NationalEnergyFoundation from "../images/clients/national-energy-foundation-gray.svg";
import Ogio from "../images/clients/ogio-gray.svg";
import WasatchCovers from "../images/clients/wasatch-covers-gray.svg";

function BrandImage({ title, logo }) {
  return (
    <div className="py-3 px-4">
      <img alt={title} src={logo} />
    </div>
  );
}

function Brands() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="mt-8">
            <h2 className="text-3xl leading-9 font-extrabold text-navy-600 sm:text-4xl sm:leading-10">
              Brands we've worked with
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-7 text-navy-700">
              We've worked with companies from all different industries on all
              sizes of projects. We're proud of the work we do!
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 items-center">
            <BrandImage logo={CocaCola} title="CocaCola" />
            <BrandImage
              logo={NationalEnergyFoundation}
              title="National Energy Foundation"
            />
            <BrandImage logo={EdgeHomes} title="EDGEHomes" />
            <BrandImage
              logo={IntermountainHealthcare}
              title="Intermountain Healthcare"
            />
            <BrandImage logo={Ogio} title="Ogio" />
            <BrandImage logo={WasatchCovers} title="Wasatch Covers" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brands;
