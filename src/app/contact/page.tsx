"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SadicianLoader from "@/components/loader"; // or use any loader
import LoadingSpinner from "@/components/spinner";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);


 

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                <p className="text-muted-foreground">
                  Naipokhar, giriyak road, <br />
                  Rajgir, Bihar (803116)
                  <br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">
                  For general inquiries:
                </p>
                <a
                  href="mailto:info@oceantrade.com"
                  className="text-primary hover:underline"
                >
                  info@parsproindia.com
                </a>
                <p className="text-muted-foreground mt-2 mb-2">For support:</p>
                <a
                  href="mailto:support@oceantrade.com"
                  className="text-primary hover:underline"
                >
                  info@parsproindia.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">Customer Service:</p>
                <a
                  href="tel:+18005551234"
                  className="text-primary hover:underline"
                >
                  (+91) 7004258062
                </a>
                <p className="text-muted-foreground mt-2 mb-2">
                  Business Hours:
                </p>
                <p className="text-muted-foreground">
                  Monday-Friday: 9am-6pm PST
                  <br />
                  Saturday: 10am-4pm PST
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Contact Form */}

            {/* Map */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Find Us
              </h2>
              <div className="flex-1 bg-muted rounded-lg overflow-hidden border min-h-[300px] flex items-center justify-center">
                <div
                  className="gmap_canvas"
                  style={{
                    overflow: "hidden",
                    background: "none!important",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {isLoading && (
                    <div className="h-full  flex items-center justify-center bg-white">
                      <LoadingSpinner />
                    </div>
                  )}

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3615.1077787291692!2d85.42807627537638!3d25.03041617781869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAxJzQ5LjUiTiA4NcKwMjUnNTAuMyJF!5e0!3m2!1sen!2sin!4v1743858949744!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                  ></iframe>
                </div>
                <style jsx>{`
                  .mapouter {
                    position: relative;
                    text-align: right;
                    width: 100%;
                    height: 400px;
                  }
                  .gmap_canvas {
                    overflow: hidden;
                    background: none !important;
                    width: 100%;
                    height: 100%;
                  }
                  .gmap_iframe {
                    width: 100% !important;
                    height: 100% !important;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find quick answers to common questions about our products and
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy on all unused items in their original packaging. Please contact our customer service team to initiate a return.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes, we ship to most countries worldwide. International shipping times vary by location, typically 7-14 business days.",
              },
              {
                question: "How can I track my order?",
                answer:
                  "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order in your account dashboard.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for?
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:support@oceantrade.com">Email Our Support Team</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
