"use client";
import { ArrowRight, CheckCircle, Shield, Sparkles } from "lucide-react";
import TestimonialCard from "@/components/testimonials";
import FeatureCard from "@/components/features";

import Hero from "@/components/Hero";
import Ourproduct from "@/components/featured-product";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      <Ourproduct />

      {/* Key Features */}
      <section className="py-16 bg-tidywave-yellow">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12 ">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our premium toilet cleaner is designed to provide the best
              cleaning experience with these powerful features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="h-10 w-10 text-blue-500" />}
              title="Fast Action Formula"
              description="Works in seconds to dissolve tough stains and limescale, leaving your toilet sparkling clean."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="99.9% Germ Protection"
              description="Kills 99.9% of germs and bacteria, ensuring your bathroom is hygienic and safe."
            />
            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-blue-500" />}
              title="Long-Lasting Freshness"
              description="Leaves a pleasant fragrance that keeps your bathroom smelling fresh for hours."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">
              Why Choose Parspro?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best toilet cleaning solutions
              for a cleaner, healthier home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-blue mb-3 ">
                100% Effective
              </h3>
              <p className="text-muted-foreground">
                Our formula is tested and proven to remove even the toughest
                stains and buildup.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-blue mb-3">
                Eco-Friendly
              </h3>
              <p className="text-muted-foreground">
                Safe for septic tanks and environmentally conscious with
                biodegradable ingredients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-navy-blue mb-3">
                Affordable
              </h3>
              <p className="text-muted-foreground">
                Premium quality at a price that won't break the bank. Great
                value for your money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}

      {/* Testimonials */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what people are saying
              about Parspro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="मैंने कई टॉयलेट क्लीनर आजमाए हैं, लेकिन Parspro सबसे बेहतरीन है। यह पुराने दागों को भी आसानी से हटा देता है!"
              author="आरव शर्मा"
              location="दिल्ली"
              rating={5}
            />
            <TestimonialCard
              quote="इसकी ताजगी की खुशबू कई दिनों तक बनी रहती है और सफाई करना बहुत आसान हो जाता है। मैं इसे ज़रूर सुझाऊंगा!"
              author="मयंक वर्मा"
              location="मुंबई"
              rating={5}
            />
            <TestimonialCard
              quote="मुझे तेज़ रासायनिक गंध पसंद नहीं है, लेकिन Parspro टॉयलेट क्लीनर पूरी तरह से साफ करता है और खुशबू भी अच्छी होती है।"
              author="नेहा पाटिल"
              location="बैंगलोर"
              rating={4}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
