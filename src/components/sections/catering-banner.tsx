"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import { RESTAURANT_INFO } from "@/lib/constants";

export function CateringBanner() {
  return (
    <section id="catering" className="scroll-mt-20 bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <ScrollAnimation variant="slide-left">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
                Bring Tata&apos;s to Your Event
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                From office lunches to weddings, quinceañeras to block parties —
                we bring the full Tata&apos;s experience to you. Our catering
                team handles everything so you can focus on enjoying the
                celebration. Minimum 20 guests, customizable menus available.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-red hover:bg-red-700 text-white font-semibold px-8"
              >
                <a href={`mailto:${RESTAURANT_INFO.email}?subject=Catering Inquiry`}>
                  Inquire About Catering
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation variant="slide-right">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop"
                alt="Tata's Tacos catering spread at a festive event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
