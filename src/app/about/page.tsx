import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              About Parspro
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              We're on a mission to provide premium quality products that
              enhance your everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2024, Parspro began with a simple idea: to create
                products that combine functionality, quality, and beautiful
                design. What started as a small operation has grown into a
                trusted brand serving customers worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founder, Mr. Ramakant Kumar, noticed a gap in the market for
                well-designed, high-quality everyday items that didn't break the
                bank. Drawing on her background in product design, she assembled
                a team of like-minded individuals who shared her vision.
              </p>
              <p className="text-muted-foreground">
                Today,Parspro offers a curated selection of products across
                multiple categories, each item carefully selected to meet our
                exacting standards. We're proud of how far we've come, but even
                more excited about where we're headed.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/owner.jpeg?height=800&width=600"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              These core principles guide everything we do, from product
              development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product undergoes rigorous
                testing to ensure it meets our high standards before it reaches
                your hands.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Sustainable Practices
              </h3>
              <p className="text-muted-foreground">
                We're committed to reducing our environmental impact through
                responsible sourcing, eco-friendly packaging, and sustainable
                manufacturing processes.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-muted-foreground">
                Your happiness is our priority. We stand behind every product we
                sell and are dedicated to providing exceptional customer
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
    </main>
  );
}
