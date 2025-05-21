"use client";
import React, { useState } from "react";

// import ProductCard, { ProductProps } from '@/components/ProductCard';
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/products";
import { Product } from "@/static-data/product";
import products from "@/static-data/product";
import SadicianLoader from "@/components/loader";
import LoadingSpinner from "@/components/spinner";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  isBestSeller?: boolean;
}

const Page = () => {
  const toiletCleanerProducts: Product[] = products;

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    // activeFilter === "bestsellers"
    //   ? toiletCleanerProducts.filter((product) => product.isBestSeller)
      // :
       toiletCleanerProducts;


  return (
    <>
      <div className="bg-gradient-to-r from-tidywave-blue to-tidywave-light-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Sanitary Cleaning Agents{" "}
          </h1>
          <p className="text-lg max-w-3xl mx-auto animate-fade-in">
            Our cleaners are formulated to remove tough stains, kill 99.9% of
            germs, and leave your toilet fresh and hygienic.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-xl font-bold text-tidywave-blue">
              Key Benefits
            </div>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-tidywave-blue text-lg font-semibold mb-2">
                ✔ Removes stains & limescale
              </div>
              <p className="text-gray-600">
                Our powerful formulas target and break down stubborn stains and
                limescale deposits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-tidywave-blue text-lg font-semibold mb-2">
                ✔ Eliminates bad odor
              </div>
              <p className="text-gray-600">
                Advanced odor-fighting ingredients leave your bathroom smelling
                fresh and clean.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-tidywave-blue text-lg font-semibold mb-2">
                ✔ Safe for ceramic surfaces
              </div>
              <p className="text-gray-600">
                Gentle yet effective formulas that won't damage your toilet's
                ceramic surface.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-xl font-bold text-tidywave-blue">
              Our Products
            </div>
            <Separator className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 staggered-fade-in">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="bg-tidywave-light-gray p-6 rounded-lg animate-fade-in">
          <h3 className="text-xl font-bold text-tidywave-blue mb-4">
            Tips for Toilet Cleaning
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              For best results, apply the cleaner under the rim and let it flow
              down.
            </li>
            <li>
              Allow the cleaner to sit for 10-15 minutes before brushing for
              tough stains.
            </li>
            <li>
              Regular cleaning prevents buildup and makes deep cleaning easier.
            </li>
            <li>Always ventilate the bathroom when using cleaning products.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
