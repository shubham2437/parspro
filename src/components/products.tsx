"use clent";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Product } from "@/static-data/product";
import { encrypt } from "@/lib/route";
import LoadingSpinner from "./spinner";
import { useState } from "react";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  const encrpt_id = encodeURIComponent(encrypt(product.id));
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link href={`/products/${encrpt_id}`}>
      <Card className="overflow-hidden product-card border-none h-full cursor-pointer">
        <div className="relative h-[350px] overflow-hidden bg-gray-100 ">
          {isLoading ? (
            <div className="h-[100%] flex items-center justify-center bg-white">
              <LoadingSpinner />
            </div>
          ) : (
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-fit transition-transform duration-500 hover:scale-101"
              onLoadingComplete={() => setIsLoading(false)}
            />
          )}
          {product.isBestSeller && (
            <Badge className="absolute top-3 right-3 bg-tidywave-yellow text-tidywave-blue hover:bg-tidywave-yellow">
              Best Seller
            </Badge>
          )}
        </div>
        <CardContent className="p-6 ">
          <h3 className="text-xl font-bold text-tidywave-blue mb-2">
            {product.name} ({product.specs.Volume})
          </h3>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start mb-2">
                <div className="text-tidywave-light-blue mr-2 mt-0.5">
                  <Check size={16} />
                </div>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
