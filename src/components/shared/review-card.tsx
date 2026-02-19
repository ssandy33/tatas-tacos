import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "./star-rating";
import { Quote } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
}

export function ReviewCard({ name, rating, text }: ReviewCardProps) {
  return (
    <Card className="bg-white border-0 shadow-lg h-full">
      <CardContent className="pt-6 flex flex-col h-full">
        <Quote className="text-gold mb-3 shrink-0" size={28} />
        <p className="text-charcoal/80 leading-relaxed italic flex-1">
          &ldquo;{text}&rdquo;
        </p>
        <div className="mt-4 pt-4 border-t border-cream-200">
          <StarRating rating={rating} />
          <p className="font-semibold text-charcoal mt-1">{name}</p>
        </div>
      </CardContent>
    </Card>
  );
}
