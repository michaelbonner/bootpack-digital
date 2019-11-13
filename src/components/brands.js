import React from "react";
import CocaCola from "../images/clients/coca-cola-classic-gray.svg";
import EdgeHomes from "../images/clients/edge-homes-gray.svg";
import FranklinCovey from "../images/clients/franklin-covey-gray.svg";
import NationalEnergyFoundation from "../images/clients/national-energy-foundation-gray.svg";
import Ogio from "../images/clients/ogio-gray.svg";
import WasatchCovers from "../images/clients/wasatch-covers-gray.svg";

function BrandImage({ title, logo }) {
  return (
    <img
      alt={title}
      className="w-full max-w-md h-auto md:w-1/3 py-12 px-4 md:p-4 lg:p-8 xl:p-12"
      src={logo}
    />
  );
}

function Brands() {
  return (
    <div className="mx-16 my-12">
      <h2 className="text-2xl text-center text-blue-600">
        Brands We've Worked With
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <BrandImage
          logo={NationalEnergyFoundation}
          title="National Energy Foundation"
        />
        <BrandImage logo={CocaCola} title="CocaCola" />
        <BrandImage logo={EdgeHomes} title="EDGEHomes" />
        <BrandImage logo={FranklinCovey} title="Franklin Covey" />
        <BrandImage logo={Ogio} title="Ogio" />
        <BrandImage logo={WasatchCovers} title="Wasatch Covers" />
      </div>
    </div>
  );
}
export default Brands;
