"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import { SectionHeading } from "@/components/shared/section-heading";
import { MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/constants";

export function HoursLocation() {
  return (
    <section id="location" className="scroll-mt-20 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            title="Visit Us"
            subtitle="We're in the heart of Chicago's Six Corners neighborhood."
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <ScrollAnimation variant="slide-left">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[320px]">
              <iframe
                src={RESTAURANT_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tata's Tacos location on Google Maps"
              />
            </div>
          </ScrollAnimation>

          {/* Info */}
          <ScrollAnimation variant="slide-right">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="text-red shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                    Address
                  </h3>
                  <p className="text-charcoal/70">
                    {RESTAURANT_INFO.address}
                    <br />
                    {RESTAURANT_INFO.city}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="text-red shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                    Phone
                  </h3>
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="text-red hover:text-red-700 transition-colors font-medium"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <Separator />

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="text-red shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                    Hours
                  </h3>
                  <div className="space-y-1.5">
                    {RESTAURANT_INFO.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-charcoal font-medium">
                          {h.day}
                        </span>
                        <span className="text-charcoal/70">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-red hover:bg-red-700 text-white font-semibold w-full"
              >
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
