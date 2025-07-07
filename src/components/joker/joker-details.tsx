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
import { getRarityColors, getTypeColors } from "@/src/utils/colors";
import { Icon } from "@iconify/react";
import { JokerSynergies } from "./joker-synergies";

export function JokerDetails({ id }: { id: string }) {
  const joker = data.jokers.find((j) => j.id === id);
  if (!joker) return null;

  return (
    <Card className="w-full max-w-4xl items-start p-6 flex-col">
      <div className="flex flex-col w-full lg:flex-row gap-8">
        <Image
          width={1024}
          height={1024}
          src={joker.imageUrl || "/placeholder.png"}
          alt={joker.name || "Joker"}
          className="object-contain bg-transparent image-pixelated w-full max-w-sm"
        />
        <div className="w-full flex flex-col gap-8">
          <CardHeader className="p-0">
            <div className="flex flex-row justify-between">
              <CardTitle className="text-3xl">{joker.name}</CardTitle>
              <Badge
                className={`text-xl ${getRarityColors(
                  joker.rarity || "Common"
                )}`}
              >
                {joker.rarity}
              </Badge>
            </div>
            <CardDescription className="text-xl">
              {joker.effect}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-6 h-6 flex-shrink-0">
                <Icon
                  icon="pixelarticons:lock-open"
                  className="w-full h-full"
                />
              </div>
              <p className="text-xl">{joker.unlockRequirement}</p>
            </div>
            <div>
              <p className="text-xl">Stats</p>
              <div className="flex p-4 bg-muted">
                <div className="flex flex-col p-2 w-1/3 space-y-2 text-xl">
                  <p>Buy Price</p>
                  <p>Sell Price</p>
                  <p>Type</p>
                  {joker.activation && <p>Activation</p>}
                </div>
                <div className="flex flex-col w-2/3 space-y-2 bg-background p-2 text-xl">
                  <p className="text-secondary">${joker.buyPrice}</p>
                  <p className="text-accent">${joker.sellPrice}</p>
                  <p className={getTypeColors(joker.type || "Additive Mult")}>
                    {joker.type}
                  </p>
                  {joker.activation && <p>{joker.activation}</p>}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              {joker.copyable && (
                <Badge className="bg-accent text-xl">Copyable</Badge>
              )}
              {joker.perishable && (
                <Badge className="bg-accent text-xl">Perishable</Badge>
              )}
              {joker.eternal && (
                <Badge className="bg-accent text-xl">Eternal</Badge>
              )}
            </div>
          </CardContent>
        </div>
      </div>
      <div className="w-full">
        <JokerSynergies id={joker.id} />
      </div>
    </Card>
  );
}
