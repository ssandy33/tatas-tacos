"use client";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { MenuCard } from "@/components/shared/menu-card";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import { MENU_ITEMS, RESTAURANT_INFO } from "@/lib/constants";

export function FeaturedMenu() {
  return (
    <section id="menu" className="scroll-mt-20 py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            title="Our Favorites"
            subtitle="Hand-picked crowd pleasers, straight from Tata's kitchen to your table."
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, i) => (
            <ScrollAnimation key={item.name} delay={i * 0.1}>
              <MenuCard {...item} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-red hover:bg-red-700 text-white font-semibold px-8"
          >
            <a
              href={RESTAURANT_INFO.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Full Menu
            </a>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
