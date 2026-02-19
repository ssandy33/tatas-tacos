import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function MenuCard({ name, description, price, image }: MenuCardProps) {
  return (
    <Card className="overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading text-xl">{name}</CardTitle>
          <span className="text-red font-bold text-lg">{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-charcoal/60 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
