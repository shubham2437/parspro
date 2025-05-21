"use client";
import { useEffect } from "react";
import { ArrowLeft, BadgeIndianRupee, Star } from "lucide-react";

import { getProductById } from "@/static-data/product";
import products from "@/static-data/product";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import ImageGallery from "@/components/ImageGallary";
import { decrypt, encrypt } from "@/lib/route";

const ProductPage = () => {
  const { id }: any = useParams();
  // const navigate = useNavigate();
  const productId = id ? id : "1";
  const decryptedId = decrypt(decodeURIComponent(id));

  const product = getProductById(decryptedId);

  // useEffect(() => {
  //   if (!product) {
  //     // navigate("/");
  //     return;
  //   }

  //   document.title = `${product.name} - ProductShowcase`;
  // }, [product, navigate]);

  if (!product) return <div>Product not found</div>;
  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-8 ">
        <Link
          href="/products/cleaner-agent"
          className="inline-flex items-center text-sm font-medium mb-6 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 space-y-2">
          <ImageGallery images={product.images} productName={product.name} />

          <div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>

              <div className="text-2xl font-semibold flex items-center gap-2">
                <BadgeIndianRupee />

                {product.price ? product.price.toFixed(2) : ""}
              </div>

              <p className="text-muted-foreground">{product.description}</p>
              <div className="mb-2">
                <h3 className="font-semibold mb-4">Product Information</h3>
                <p className="text-muted-foreground">
                  Every {product.name} comes with a 2-year manufacturer warranty
                  against defects in materials and workmanship. Register your
                  product within 30 days of purchase to activate your warranty.
                </p>
                <p className="text-muted-foreground mt-4">
                  For additional information about this product, please contact
                  our customer support team.
                </p>
              </div>
            </div>
            <Tabs defaultValue="specifications" className="mb-12 ">
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">
                      Technical Specifications
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between border-b py-2"
                        >
                          <span className="font-medium">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-4">
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">
                    Customer Reviews Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    Be the first to review this product!
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Shipping Information
                    </h3>
                    <p className="text-muted-foreground">
                      We offer free standard shipping on all orders. Standard
                      shipping typically takes 3-5 business days. Express
                      shipping options are available at checkout.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Return Policy
                    </h3>
                    <p className="text-muted-foreground">
                      If you're not completely satisfied with your purchase, you
                      can return it within 30 days for a full refund or
                      exchange. Items must be in original condition with all
                      packaging and tags.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Separator className="my-8" />

            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${encodeURIComponent(
                    encrypt(relatedProduct.id)
                  )}`}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="h-full w-full object-fit transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-medium text-sm">
                      {relatedProduct.name} ({relatedProduct.specs.Volume})
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <BadgeIndianRupee />
                      {relatedProduct.price
                        ? relatedProduct.price.toFixed(2)
                        : ""}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductPage;
