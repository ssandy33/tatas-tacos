"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { NAV_LINKS, RESTAURANT_INFO } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition(50);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      animate={{
        backgroundColor: scrolled
          ? "rgba(28, 28, 28, 0.98)"
          : "rgba(28, 28, 28, 0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl font-bold text-cream">
            TATA&apos;S TACOS
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-red hover:bg-red-700 text-white font-semibold"
            >
              <a
                href={RESTAURANT_INFO.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/80 hover:text-gold transition-colors text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-red hover:bg-red-700 text-white font-semibold w-full mt-2"
              >
                <a
                  href={RESTAURANT_INFO.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
