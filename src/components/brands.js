import React from "react";
import CocaCola from "../images/clients/coca-cola-classic.svg";
import EdgeHomes from "../images/clients/edge-homes.svg";
import FranklinCovey from "../images/clients/franklin-covey.svg";
import Ogio from "../images/clients/ogio.svg";

function Brands() {
  return (
    <div className="mx-16 my-12">
      <h2 className="text-2xl text-center md:text-left text-blue-600 md:px-16">
        Brands We've Worked With
      </h2>
      <div className="flex flex-wrap justify-between items-center">
        <img
          alt="CocaCola"
          className="w-full h-auto md:w-1/4 p-12 md:p-4 lg:p-8 xl:p-12"
          src={CocaCola}
        />
        <img
          alt="EDGEHomes"
          className="w-full h-auto md:w-1/4 p-12 md:p-4 lg:p-8 xl:p-12"
          src={EdgeHomes}
        />
        <img
          alt="Franklin Covey"
          className="w-full h-auto md:w-1/4 p-12 md:p-4 lg:p-8 xl:p-12"
          src={FranklinCovey}
        />
        <img
          alt="Ogio"
          className="w-full h-auto md:w-1/4 p-12 md:p-4 lg:p-8 xl:p-12"
          src={Ogio}
        />
      </div>
    </div>
  );
}
export default Brands;
