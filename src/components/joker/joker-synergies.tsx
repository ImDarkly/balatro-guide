import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import data from "@/src/data/jokers.json";

export function JokerSynergies({ id }: { id: string }) {
  const joker = data.jokers.find((j) => j.id === id);
  if (!joker) return null;

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <Link href={`/joker/${id}`}>
              <Image
                src={joker.imageUrl || "/placeholder.png"}
                alt={joker.name || "Joker"}
                width={1024}
                height={1024}
                className="object-contain bg-transparent image-pixelated"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
