import React from "react";
import CocaCola from "../images/clients/coca-cola-classic-gray.svg";
import EdgeHomes from "../images/clients/edge-homes-gray.svg";
import FranklinCovey from "../images/clients/franklin-covey-gray.svg";
import NationalEnergyFoundation from "../images/clients/national-energy-foundation-gray.svg";
import Ogio from "../images/clients/ogio-gray.svg";
import WasatchCovers from "../images/clients/wasatch-covers-gray.svg";

function Brands() {
  return (
    <div className="mx-16 my-12">
      <h2 className="text-2xl text-center text-blue-600">
        Brands We've Worked With
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <img
          alt="National Energy Foundation"
          className="w-full max-w-md h-auto md:w-1/3 p-12 md:p-4 lg:p-8 xl:p-12"
          src={NationalEnergyFoundation}
        />
        <img
          alt="CocaCola"
          className="w-full max-w-md h-auto md:w-1/3 p-12 md:p-4 lg:p-8 xl:p-12"
          src={CocaCola}
        />
        <img
          alt="EDGEHomes"
          className="w-full max-w-md h-auto md:w-1/3 p-12 md:p-4 lg:p-8 xl:p-12"
          src={EdgeHomes}
        />
        <img
          alt="Franklin Covey"
          className="w-full max-w-md h-auto md:w-1/3 p-12 md:p-4 lg:p-8 xl:p-12"
          src={FranklinCovey}
        />
        <img
          alt="Ogio"
          className="w-full max-w-md h-auto md:w-1/3 p-12 md:p-4 lg:p-8 xl:p-12"
          src={Ogio}
        />
        <img
          alt="Wasatch Covers"
          className="w-full max-w-md h-auto md:w-1/3 p-12 md:p-4 lg:p-8 xl:p-12"
          src={WasatchCovers}
        />
      </div>
    </div>
  );
}
export default Brands;
