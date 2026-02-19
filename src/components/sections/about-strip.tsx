"use client";

import { Heart, MapPin, Utensils } from "lucide-react";
import { ScrollAnimation } from "@/components/shared/scroll-animation";

const stats = [
  {
    icon: Heart,
    label: "Family Owned",
    detail: "Three generations of love",
  },
  {
    icon: MapPin,
    label: "Chicago's Six Corners",
    detail: "A neighborhood staple",
  },
  {
    icon: Utensils,
    label: "Made Fresh Daily",
    detail: "From scratch, every morning",
  },
];

export function AboutStrip() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-gold py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-center text-charcoal text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            At Tata&apos;s, every taco tells a story. Our recipes have been
            passed down through three generations — from our abuela&apos;s
            kitchen in Jalisco to the heart of Chicago&apos;s Six Corners. We
            believe great food starts with fresh ingredients, bold flavors, and a
            whole lot of love.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollAnimation key={stat.label} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-charcoal/10 rounded-full p-4 mb-4">
                  <stat.icon className="text-charcoal" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                  {stat.label}
                </h3>
                <p className="text-charcoal/70 text-sm">{stat.detail}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
