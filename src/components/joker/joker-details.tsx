"use client";
import data from "@/src/data/jokers.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { getRarityColors } from "@/src/utils/colors";
import { Icon } from "@iconify/react";

const JokerDescription: React.FC<{ id: string }> = ({ id }) => {
  const joker = data.jokers.find((j) => j.id === id);

  return (
    <Card className="w-full max-w-4xl items-center p-6 flex-col lg:flex-row lg:items-start">
      <Image
        width={1024}
        height={1024}
        src={joker?.imageUrl || "/placeholder.png"}
        alt={joker?.name || "Joker"}
        className="object-contain bg-transparent image-pixelated w-full max-w-sm"
      />
      <div className="w-full flex flex-col gap-8">
        <CardHeader className="p-0">
          <div className="flex flex-row justify-between">
            <CardTitle className="text-3xl">{joker?.name}</CardTitle>
            <Badge
              className={`text-xl ${getRarityColors(
                joker?.rarity || "Common"
              )}`}
            >
              {joker?.rarity}
            </Badge>
          </div>
          <CardDescription className="text-xl">{joker?.effect}</CardDescription>
        </CardHeader>
        <CardContent className="px-0 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="w-6 h-6 flex-shrink-0">
              <Icon icon="pixelarticons:lock-open" className="w-full h-full" />
            </div>
            <p className="text-xl">{joker?.unlockRequirement}</p>
          </div>
          <div>
            <p className="text-xl">Stats</p>
            <div className="flex p-4 bg-muted">
              <div className="flex flex-col p-2 w-1/2 space-y-2 text-xl">
                <p>Buy Price</p>
                <p>Sell Price</p>
                <p>Type</p>
                {joker?.activation && <p>Activation</p>}
              </div>
              <div className="flex flex-col w-1/2 space-y-2 bg-background p-2 text-xl">
                <p className="text-secondary">${joker?.buyPrice}</p>
                <p className="text-accent">${joker?.sellPrice}</p>
                <p>{joker?.type}</p>
                {joker?.activation && <p>{joker.activation}</p>}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            {joker?.copyable && (
              <Badge className="bg-accent text-xl">Copyable</Badge>
            )}
            {joker?.perishable && (
              <Badge className="bg-accent text-xl">Perishable</Badge>
            )}
            {joker?.eternal && (
              <Badge className="bg-accent text-xl">Eternal</Badge>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default JokerDescription;
