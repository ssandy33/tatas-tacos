"use client";

import { useState } from "react";
import { Heart, MapPin, Utensils, ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface StoryCard {
  icon: typeof Heart;
  label: string;
  detail: string;
  story: React.ReactNode;
}

const stats: StoryCard[] = [
  {
    icon: Heart,
    label: "Family Owned",
    detail: "Three generations of love",
    story: (
      <>
        <p className="mb-4">
          The Tata&apos;s story begins over 50 years ago in{" "}
          <strong>Michoacán, Mexico</strong>, where our founder&apos;s mother —
          widowed at just 28 — began making handmade tacos and enchiladas over
          an open fire. She sold them outside bars and at parties with live
          music, along with homemade moonshine, to put food on the table for her
          children.
        </p>
        <p className="mb-4">
          From Michoacán she moved to <strong>Tijuana</strong>, selling tacos and
          tamales on the streets. Then to <strong>Los Angeles</strong>, where she
          became one of the original street taco ladies. In the 1970s, she
          brought those same recipes to <strong>Chicago&apos;s Pilsen</strong>{" "}
          neighborhood — pioneering fresh, authentic street tacos and working
          tirelessly to put her children through school.
        </p>
        <p className="mb-4">
          Today, those 50-year-old family recipes live on at Tata&apos;s. Our
          tamales are still made from <strong>Mama Tata&apos;s</strong> original
          recipe. Co-founder <strong>Marci Romero Berner</strong> carries her
          mother&apos;s legacy forward, while chef and co-founder{" "}
          <strong>Julia Paphitis</strong> — trained under her father who ran food
          service at Chicago&apos;s legendary Drake Hotel for 40 years — perfects
          every cut of brisket, lamb, and pork.
        </p>
        <p className="mb-4">
          &ldquo;I just really want people to celebrate life and come and have a
          good day,&rdquo; says Marci. That spirit — born from a single
          mother&apos;s determination in rural Mexico — is in every taco we
          serve.
        </p>
        <p className="text-sm text-charcoal/60 italic">
          Tata&apos;s is a proud woman-owned, Mexican-owned business. The name
          honors co-founder Julia, a breast cancer survivor, and the
          restaurant supports cancer awareness initiatives and career workshops
          for young Dreamers.
        </p>
      </>
    ),
  },
  {
    icon: MapPin,
    label: "Chicago's Six Corners",
    detail: "A neighborhood staple since 2018",
    story: (
      <>
        <p className="mb-4">
          Six Corners is where three of Chicago&apos;s great arteries converge —{" "}
          <strong>Milwaukee Avenue</strong>, <strong>Irving Park Road</strong>,
          and <strong>Cicero Avenue</strong> — creating the six-cornered
          intersection that gave our neighborhood its name. It&apos;s been a
          gathering place since <strong>1841</strong>, nearly as old as Chicago
          itself.
        </p>
        <p className="mb-4">
          By the 1950s, Six Corners was{" "}
          <strong>
            the busiest commercial district in all of Chicago outside the Loop
          </strong>
          . The Art Deco Sears flagship store drew 99,500 customers on opening
          day in 1938. The Portage Theater, opened in 1920 as Chicago&apos;s
          first purpose-built movie palace, anchored the cultural scene. At its
          peak, over 150 stores lined these sidewalks.
        </p>
        <p className="mb-4">
          The neighborhood sits in the heart of Chicago&apos;s{" "}
          <strong>bungalow belt</strong> — the ring of working-class
          neighborhoods built between 1910 and 1940 that define the real
          Chicago. Waves of German, Scandinavian, Polish, Irish, Italian, and
          Hispanic families have each left their mark on the area&apos;s food,
          culture, and character. Portage Park was once home to the largest
          Polish community in the Chicago metro area.
        </p>
        <p className="mb-4">
          Today, Six Corners is in the middle of a{" "}
          <strong>genuine renaissance</strong>. The landmark 1938 Sears building
          has been transformed into 6 Corners Lofts with 206 apartments and new
          retail. Tata&apos;s opened on{" "}
          <strong>Cinco de Mayo, 2018</strong> and quickly became a neighborhood
          anchor — hosting live music, comedy nights, school fundraisers, and
          community events.
        </p>
        <p className="text-sm text-charcoal/60 italic">
          From the ancient portage routes of the Pottawatomie and Ottawa tribes,
          to the immigrant families who built the bungalows, to the new
          generation breathing life back into these streets — Six Corners has
          always been a crossroads. We&apos;re proud to be part of that story.
        </p>
      </>
    ),
  },
  {
    icon: Utensils,
    label: "Made Fresh Daily",
    detail: "Handmade, in-house, to order",
    story: (
      <>
        <p className="mb-4">
          At Tata&apos;s, &ldquo;fresh&rdquo; isn&apos;t a marketing word —
          it&apos;s a promise. As co-founder Julia Paphitis puts it:{" "}
          <strong>
            &ldquo;We tend to make everything in-house, as much as
            possible.&rdquo;
          </strong>
        </p>
        <p className="mb-4">
          Our <strong>tortillas are handmade in-house daily</strong> — including
          our signature house-made plantain tortillas for the Jibarito taco.
          Our birria beef is slow-cooked in guajillo sauce, and the tortillas
          are seared in the consommé for an extra layer of flavor that earned us
          a spot on The Infatuation&apos;s list of{" "}
          <strong>best birria tacos in all of Chicago</strong>.
        </p>
        <p className="mb-4">
          We use <strong>locally grown and sourced ingredients</strong> to
          deliver traditional Mexican dishes with a modern twist. Every meat is
          prepared to order — the brisket, lamb, and pork are described by
          reviewers as &ldquo;decadent, fresh, and made to order.&rdquo;
        </p>
        <p className="mb-4 font-medium">
          What our customers are saying:
        </p>
        <ul className="space-y-2 mb-4 text-charcoal/80">
          <li className="italic">
            &ldquo;Fresh, bright flavors on handmade tortillas. Great selection.
            Delightful prices.&rdquo;
          </li>
          <li className="italic">
            &ldquo;Freshly made tortillas are the best I&apos;ve ever
            had.&rdquo;
          </li>
          <li className="italic">
            &ldquo;Get ready to indulge in tacos that explode in your mouth with
            the freshest ingredients.&rdquo;
          </li>
          <li className="italic">
            &ldquo;Really tasty and healthy small individual tacos. Wide
            selection, all made with fresh salad and vegetables.&rdquo;
          </li>
        </ul>
        <p className="text-sm text-charcoal/60 italic">
          Our seasonally updated menu keeps things evolving, but the foundation
          never changes: 50-year-old family recipes, the freshest ingredients we
          can source, and everything made with love — just like Mama Tata did it.
        </p>
      </>
    ),
  },
];

export function AboutStrip() {
  const [openStory, setOpenStory] = useState<number | null>(null);

  return (
    <section id="about" className="scroll-mt-20 bg-gold py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-center text-charcoal text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            At Tata&apos;s, every taco tells a story. Our recipes trace back
            over 50 years to Michoacán, Mexico — from Mama Tata&apos;s open-fire
            kitchen to the streets of Tijuana and L.A., to the heart of
            Chicago&apos;s Six Corners. We believe great food starts with fresh
            ingredients, bold flavors, and a whole lot of love.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollAnimation key={stat.label} delay={i * 0.15}>
              <button
                onClick={() => setOpenStory(i)}
                className="flex flex-col items-center text-center w-full group cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:bg-charcoal/5"
              >
                <div className="bg-charcoal/10 rounded-full p-4 mb-4 group-hover:bg-charcoal/20 transition-colors">
                  <stat.icon className="text-charcoal" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                  {stat.label}
                </h3>
                <p className="text-charcoal/70 text-sm mb-2">{stat.detail}</p>
                <span className="inline-flex items-center text-xs font-semibold text-charcoal/50 group-hover:text-charcoal transition-colors">
                  Read the story
                  <ChevronRight size={14} className="ml-0.5" />
                </span>
              </button>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Story Dialogs */}
      {stats.map((stat, i) => (
        <Dialog
          key={stat.label}
          open={openStory === i}
          onOpenChange={(open) => setOpenStory(open ? i : null)}
        >
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-cream">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gold/20 rounded-full p-3">
                  <stat.icon className="text-gold-600" size={24} />
                </div>
                <DialogTitle className="font-heading text-2xl md:text-3xl text-charcoal">
                  {stat.label}
                </DialogTitle>
              </div>
              <DialogDescription className="sr-only">
                {stat.detail}
              </DialogDescription>
            </DialogHeader>
            <div className="text-charcoal/80 leading-relaxed text-[15px]">
              {stat.story}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}
