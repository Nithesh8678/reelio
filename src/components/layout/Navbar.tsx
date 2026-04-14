"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Offerings", href: "/offerings" },
  { name: "Resources", href: "/resources" },
  { name: "Contact us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-2xl font-heading font-bold tracking-tighter text-white">
            REELIO<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                pathname === link.href ? "text-primary" : "text-white/70 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8">
              LET'S TALK
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-reelio-black border-white/10 text-white w-full sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-4xl font-heading font-bold transition-colors ${
                        pathname === link.href ? "text-primary" : "hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link href="/contact">
                  <Button className="bg-primary text-white rounded-none w-full py-8 text-xl mt-4">
                    GET IN TOUCH
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
