import { ArrowRight } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const categories = [
  {
    id: "toilet-cleaners",
    title: "Sanitary Cleaning Agents",
    description: "Powerful solutions for a sparkling clean toilet.",
    image: "/layna.jpeg",
    path: "/products/cleaner-agent",
    comingSoon: false,
  },

  {
    id: "namkeen-products",
    title: "Namkeen Products",
    description:
      "A crispy and savory delight, crafted with authentic spices for a burst of flavor in every bite!",
    image: "/crypsara.jpeg",
    path: "/namkeen-products",
    comingSoon: true,
  },
];

export default function Ourproduct() {
  return (
    <section className="py-16 bg-tidywave-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tidywave-blue mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our premium range of cleaning and hygiene products designed
            for every space in your home or office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 staggered-fade-in">
          {categories.map((category) => (
            <div key={category.id}>
              {category.comingSoon ? (
                <Card className="overflow-hidden product-card h-full border-none max-w-[800px] relative">
                  <div className="overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[300px] object-cover transition-transform duration-500 filter brightness-75"
                    />
                    <div className="absolute top-0 right-0 bg-tidywave-blue text-white py-2 px-4 rounded-bl-md font-semibold">
                      Coming Soon
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-tidywave-blue mb-2 transition-colors">
                      🔹 {category.title} 
                    </h3> 
                    <p className="text-gray-600 mb-4">{category.description}</p>
                  </CardContent>
                </Card>
              ) : (
                <Link href={category.path} className="group">
                  <Card className="overflow-hidden product-card h-full border-none max-w-[800px]">
                    <div className="overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-tidywave-blue mb-2 group-hover:text-tidywave-light-blue transition-colors">
                        🔹 {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-tidywave-light-blue font-medium group-hover:translate-x-2 transition-transform">
                        <span>Explore</span>
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
