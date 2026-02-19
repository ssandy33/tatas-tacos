"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&h=1080&fit=crop"
        alt="Delicious tacos from Tata's Tacos"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-4"
        >
          TATA&apos;S TACOS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream/90 text-lg sm:text-xl md:text-2xl max-w-2xl mb-8"
        >
          {RESTAURANT_INFO.tagline}. Family-owned in Chicago&apos;s Six Corners
          since 1987.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-red hover:bg-red-700 text-white font-semibold text-lg px-8 py-6"
          >
            <a
              href={RESTAURANT_INFO.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cream text-cream bg-transparent hover:bg-cream/10 font-semibold text-lg px-8 py-6"
          >
            <a href="#menu">View Menu</a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="text-cream/60" size={36} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
