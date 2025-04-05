export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  category:
    | "Toilet Cleaner"
    | "Handwash"
    | "Glass Cleaner"
    | "Surface Cleaner"
    | "Dish Cleaner"
    | "Liquid Surf"
    | "Phenyl Bottle";
  images: string[];
  features: string[];
  specs: {
    Volume: string;
    Fragrance: string;
    "Kills Germs": string;
    "Safe for Surfaces": string;
    "Eco-Friendly": string;
  };
  isBestSeller?: boolean;
}

// Categorized Products
const products: Product[] = [
  // 🚽 Toilet Cleaners
  {
    id: "1",
    name: "Layna Toilet Cleaner",
    description: "Deep cleansing formula to remove tough stains and limescale.",
    price: 50,
    category: "Toilet Cleaner",
    images: ["/product/toilet-f-200ml.png", "/product/toilet-b-200ml.png"],
    features: [
      "Removes tough stains & limescale",
      "Kills 99.9% of germs",
      "Safe for ceramic surfaces",
      "Long-lasting fresh scent",
    ],
    specs: {
      Volume: "200ml",
      Fragrance: "Lemon",
      "Kills Germs": "99.9%",
      "Safe for Surfaces": "Yes",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Layna Toilet Cleaner",
    description: "Deep cleansing formula to remove tough stains and limescale.",
    // "Long-lasting fragrance with powerful cleaning action.",
    price: 105,

    category: "Toilet Cleaner",
    images: ["/product/toilet-f-500ml.png", "/product/toilet-b-500ml.png"],
    features: [
      "Continuous fragrance release",
      "Fights odor-causing bacteria",
      "Prevents stain buildup",
      "Gentle on plumbing",
    ],
    specs: {
      Volume: "500ml",
      Fragrance: "Lavender",
      "Kills Germs": "99.9%",
      "Safe for Surfaces": "Yes",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },

  // 🧴 Handwash
  {
    id: "3",
    name: "Layna Toilet Cleaner",
    description: "Deep cleansing formula to remove tough stains and limescale.",
    // "Enriched with aloe vera and essential oils for soft, clean hands.",
    price: 205,

    category: "Handwash",
    images: ["/product/toilet-f-1l.png", "/product/toilet-b-1l.png"],
    features: [
      "Gentle on skin",
      "Moisturizing aloe vera",
      "Kills 99.9% of germs",
      "Refreshing fragrance",
    ],
    specs: {
      Volume: "1000ml",
      Fragrance: "Coconut",
      "Kills Germs": "99.9%",
      "Safe for Surfaces": "N/A",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },

  // 🪟 Glass Cleaners
  {
    id: "4",
    name: "Layna Glass Cleaner",
    description: "Removes dust, fingerprints, and streaks from glass surfaces.",
    price: 60,

    category: "Glass Cleaner",
    images: ["/product/glass-f-250ml.png", "/product/glass-b-250ml.png"],
    features: [
      "Streak-free shine",
      "Fast-drying formula",
      "Safe for tinted glass",
      "Pleasant fresh scent",
    ],
    specs: {
      Volume: "250ml",
      Fragrance: "Unscented",
      "Kills Germs": "No",
      "Safe for Surfaces": "Glass, Mirrors",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Layna Glass Cleaner",
    description: "Removes dust, fingerprints, and streaks from glass surfaces.",
    price: 110,

    category: "Glass Cleaner",
    images: ["/product/glass-f-500ml.png", "/product/glass-b-500ml.png"],
    features: [
      "Streak-free shine",
      "Fast-drying formula",
      "Safe for tinted glass",
      "Pleasant fresh scent",
    ],
    specs: {
      Volume: "500ml",
      Fragrance: "Unscented",
      "Kills Germs": "No",
      "Safe for Surfaces": "Glass, Mirrors",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },

  // 🧽 Surface Cleaners
  {
    id: "6",
    name: "Layna Surface Disinfectant",
    description: "Kills bacteria and viruses on various household surfaces.",
    price: 205,

    category: "Surface Cleaner",
    images: ["/product/surface-f-1l.png", "/product/surface-b-1l.png"],
    features: [
      "Kills 99.9% of germs",
      "Safe for kitchen counters",
      "No harsh chemicals",
      "Lemon fresh scent",
    ],
    specs: {
      Volume: "1000ml",
      Fragrance: "Lemon",
      "Kills Germs": "99.9%",
      "Safe for Surfaces": "Yes",
      "Eco-Friendly": "No",
    },
    isBestSeller: true,
  },
  {
    id: "7",
    name: "Layna Surface Disinfectant",
    description: "Kills bacteria and viruses on various household surfaces.",
    price: 105,

    category: "Surface Cleaner",
    images: ["/product/surface-f-500ml.png", "/product/surface-b-500ml.png"],
    features: [
      "Kills 99.9% of germs",
      "Safe for kitchen counters",
      "No harsh chemicals",
      "Lemon fresh scent",
    ],
    specs: {
      Volume: "500ml",
      Fragrance: "Lemon",
      "Kills Germs": "99.9%",
      "Safe for Surfaces": "Yes",
      "Eco-Friendly": "No",
    },
    isBestSeller: true,
  },
  {
    id: "8",
    name: "Layna Dish wash",
    description: "Powerful grease-cutting action for sparkling clean dishes.",
    price: 60,
    category: "Dish Cleaner",
    images: ["/product/dish-f-250ml.png", "/product/dish-b-250ml.png"],
    features: [
      "Removes grease & stains",
      "Gentle on hands",
      "Lemon fresh scent",
    ],
    specs: {
      Volume: "250ml",
      Fragrance: "Lemon",
      "Kills Germs": "No",
      "Safe for Surfaces": "Yes",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },
  {
    id: "9",
    name: "Layna Dish wash",
    description: "Powerful grease-cutting action for sparkling clean dishes.",
    price: 110,
    category: "Dish Cleaner",
    images: ["/product/dish-f-500ml.png"],
    features: [
      "Removes grease & stains",
      "Gentle on hands",
      "Lemon fresh scent",
    ],
    specs: {
      Volume: "500ml",
      Fragrance: "Lemon",
      "Kills Germs": "No",
      "Safe for Surfaces": "Yes",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },
  {
    id: "10",
    name: "Liquid Surf Detergent",
    description: "Tough on stains, gentle on fabrics.",
    price: 210,

    category: "Liquid Surf",
    images: ["/product/surf-f-1l.png", "/product/surf-b-1l.png"],
    features: [
      "Removes tough stains",
      "Safe for all fabrics",
      "Pleasant floral fragrance",
    ],
    specs: {
      Volume: "1L",
      Fragrance: "Floral",
      "Kills Germs": "No",
      "Safe for Surfaces": "N/A",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },
  {
    id: "11",
    name: "Layna Premium Phenyl Bottle",
    description: "Kills germs and provides long-lasting fragrance.",
    price: 80,

    category: "Phenyl Bottle",
    images: ["/product/phy-f-1l.png"],
    features: [
      "Disinfects and cleans",
      "Pine fresh scent",
      "Safe for hard surfaces",
    ],
    specs: {
      Volume: "1L",
      Fragrance: "Pine",
      "Kills Germs": "99.9%",
      "Safe for Surfaces": "Yes",
      "Eco-Friendly": "No",
    },
    isBestSeller: true,
  },
  {
    id: "12",
    name: "Layna Hand Wash",
    description:
      "Enriched with aloe vera and essential oils for soft, clean hands.",
    price: 70,

    category: "Handwash",
    images: ["/product/hand-f-200ml.png", "/product/hand-b-200ml.png"],
    features: [
      "Gentle on skin",
      "Moisturizing aloe vera",
      "Kills 99.9% of germs",
      "Refreshing fragrance",
    ],
    specs: {
      Volume: "200ml",
      Fragrance: "Coconut",
      "Kills Germs": "99.9%",
      "Safe for Surfaces": "N/A",
      "Eco-Friendly": "Yes",
    },
    isBestSeller: true,
  },
];
export default products;

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
