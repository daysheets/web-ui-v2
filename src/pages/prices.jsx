import React from "react";
import { Navbar, PriceGrid, Footer } from "../components";

const prices = () => {
  return (
    <div className="flex flex-col min-h-[100vh] w-full">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <PriceGrid className="" />
      <Footer className="" />
    </div>
  );
};

export default prices;
