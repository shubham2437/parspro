"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-tidywave-blue to-tidywave-light-blue text-white py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 flex justify-between opacity-40 pointer-events-none">
   
        <div
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full translate-y-3/4   lg:translate-x-2/3 lg:translate-y-1/4 "
        //   style={{ animationDelay: "1s" }}
        >
          <img
            src="/crypsara.jpeg?auto=format&fit=crop&w=800&q=80"
            alt="Cleaning products"
            className="rounded-lg shadow-xl animate-float max-w-full "
          />
        </div>
        <div
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full translate-y-7/4   lg:-translate-x-1/3 lg:translate-y-1/4 "
        //   style={{ animationDelay: "1s" }}
        >
          <img
            src="/layna.jpeg?auto=format&fit=crop&w=800&q=80"
            alt="Cleaning products"
            className="rounded-lg shadow-xl animate-float max-w-full "
          />
        </div>
        <div
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full  translate-y-8/3 lg:-translate-x-8/3 lg:translate-y-1/4 "
        //   style={{ animationDelay: "1s" }}
        >
          <img
            src="/paras_iso_certified.webp?auto=format&fit=crop&w=800&q=80"
            alt="Cleaning products"
            className="rounded-lg shadow-xl animate-float max-w-full "
          />
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-tidywave-yellow">Parspro</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your Trusted Partner for Hygiene & Cleaning Solutions! Discover our
            premium range of cleaning and hygiene products designed to keep your
            home and workspace spotless and germ-free.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-tidywave-yellow text-tidywave-blue hover:bg-white hover:text-tidywave-blue"
            >
              <Link href="/products/cleaner-agent">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-tidywave-yellow text-tidywave-blue hover:bg-white hover:text-tidywave-blue"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/2 animate-fade-in-right relative ">
  
          <img
            src="/65195f95-daba-4c7a-bc4d-ee216ee8d6b6.jpeg?auto=format&fit=crop&w=800&q=80"
            alt="Cleaning products"
            className="rounded-lg shadow-xl animate-float max-w-full h-[400px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
