import Image from "next/image";

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

  return (
    <HoverCard openDelay={100} closeDelay={50}>
      <HoverCardTrigger>
        <Image
          src={joker?.imageUrl || "/placeholder.png"}
          alt={joker?.name || "Joker"}
          width={1024}
          height={1024}
          className="object-contain bg-transparent group-hover:opacity-50 hover:opacity-100 image-pixelated"
        />
      </HoverCardTrigger>
      <HoverCardContent>{joker?.effect}</HoverCardContent>
    </HoverCard>
  );
};

export default JokerHoverCard;
