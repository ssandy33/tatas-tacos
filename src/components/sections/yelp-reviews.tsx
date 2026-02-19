"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { ReviewCard } from "@/components/shared/review-card";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import { StarRating } from "@/components/shared/star-rating";
import { Button } from "@/components/ui/button";
import { REVIEWS, RESTAURANT_INFO } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

const slideVariants = ["slide-left", "fade-up", "slide-right"] as const;

export function YelpReviews() {
  return (
    <section id="events" className="scroll-mt-20 py-16 md:py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <SectionHeading
            title="What Chicago Is Saying"
            light
          />
          {/* Yelp Badge */}
          <div className="flex items-center justify-center gap-3 mb-12 -mt-6">
            <StarRating rating={RESTAURANT_INFO.yelpRating} size={22} />
            <span className="text-cream/80 text-sm">
              {RESTAURANT_INFO.yelpRating} stars · {RESTAURANT_INFO.yelpReviewCount} reviews on Yelp
            </span>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <ScrollAnimation key={review.name} variant={slideVariants[i]} delay={i * 0.1}>
              <ReviewCard {...review} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-cream text-cream hover:bg-cream/10 font-semibold"
          >
            <a
              href={RESTAURANT_INFO.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More on Yelp
              <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
