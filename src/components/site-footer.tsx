import react from ""
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">OceanTrade</h3>
            <p className="text-sm text-primary-foreground/80">
              Premium quality products for your everyday needs. Discover the difference with OceanTrade.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/category/electronics" className="hover:underline">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/products/category/clothing" className="hover:underline">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products/category/home" className="hover:underline">
                  Home & Living
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} OceanTrade. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

