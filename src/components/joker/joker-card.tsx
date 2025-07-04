import Image from "next/image";
import { useQueryState } from "nuqs";
import { Icon } from "@iconify/react";

interface JokerCardProps {
  id: string;
}
import { jokers } from "@/src/data/jokers.json";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const JokerHoverCard: React.FC<JokerCardProps> = ({ id }) => {
  const joker = jokers.find((j) => j.id === id);
  const isPurchasable = joker?.buyPrice;
  const [sort] = useQueryState("sort");
  const isSortingByBuyPrice = sort?.startsWith("buy-price");

  return (
    <HoverCard openDelay={100} closeDelay={50}>
      <HoverCardTrigger className="relative">
        <Image
          src={joker?.imageUrl || "/placeholder.png"}
          alt={joker?.name || "Joker"}
          width={1024}
          height={1024}
          className={`object-contain bg-transparent image-pixelated ${
            isSortingByBuyPrice && !isPurchasable ? "opacity-30" : ""
          }`}
        />
        {!isPurchasable && isSortingByBuyPrice && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
            <Icon
              icon="pixelarticons:close"
              className="size-16 text-destructive"
            />
            <p className="text-primary-foreground">
              This Joker is currently unavailable for purchase in the shop.
            </p>
          </div>
        )}
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <h6 className="font-bold">{joker?.name}</h6>
          <p>{joker?.effect}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default JokerHoverCard;
