"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-2 lg:container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <Image
              src={"/cropped_image.png"}
              width={500}
              height={500}
              alt="logo"
              className="w-[3rem] h-[3rem]"
            />
            <span className="font-bold  text-[.85em] lg:text-[1em] text-primary w-[50%] lg:w-full">
              Parspro INDIA PRIVATE LIMITED
            </span>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>

        <nav
          className={cn(
            "absolute left-0 top-16 w-full bg-background border-b md:static md:border-0 md:w-auto md:bg-transparent",
            isMenuOpen ? "block" : "hidden md:block"
          )}
        >
          <ul className="container flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 py-4 md:py-0">
            <li>
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
