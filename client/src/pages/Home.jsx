import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";
import TopBrandsProducts from "../components/TopBrandsProducts";

const Home = () => {
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto">
      <Carousel />
      <GenInfo />
      <Brands />

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Best Sellers
          </h2>
        </div>
        <TopBrandsProducts />
      </section>

      <section className="pb-12 md:pb-16">
        <div className="child:ring-white">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </section>
    </div>
  );
};

export default Home;
