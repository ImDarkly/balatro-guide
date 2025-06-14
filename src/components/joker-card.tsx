import { getJokerById } from "../lib/getJokers";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface JokerCardProps {
  id: string;
}

const JokerCard: React.FC<JokerCardProps> = ({ id }) => {
  const joker = getJokerById(id);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{joker?.name}</CardTitle>
        <CardDescription>{joker?.effect}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-grow justify-end h-auto">
        <Image
          src={joker?.imageUrl || "/placeholder.png"}
          alt={joker?.name || "Joker"}
          width={256}
          height={256}
          className="w-full object-contain bg-transparent"
        />
      </CardContent>
    </Card>
  );
};

export default JokerCard;
