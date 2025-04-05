import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Ourproduct from "@/components/featured-product";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Office",
    isNew: false,
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    isNew: false,
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Kitchen",
    isNew: false,
  },
  {
    id: 6,
    name: "Bluetooth Portable Speaker",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    isNew: false,
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    isNew: false,
  },
  {
    id: 8,
    name: "Scented Candle Set",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    isNew: true,
  },
];

// Categories for filtering
const categories = [
  "All Categories",
  "Electronics",
  "Home Office",
  "Clothing",
  "Kitchen",
  "Accessories",
  "Home Decor",
];

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted py-8">
       <Ourproduct/>
      </section>
    </main>
  );
}
