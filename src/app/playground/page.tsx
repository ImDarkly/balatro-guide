"use client";
import CardsGrid from "@/src/components/cards-grid";
import { Joker } from "@/src/utils/types/jokers";
import JokerCard from "@/src/components/joker-card";
import { jokers } from "@/src/data/jokers.json";
import { useJokerSort } from "../hooks/useJokerSort";
import JokerSort from "@/src/components/joker-sort";

export default function Playground() {
  const sortedJokers = useJokerSort(jokers as Joker[]);

  return (
    <main className="flex-grow flex flex-col items-center justify-between gap-2 p-16">
      <h1 className="scroll-m-20 text-primary-foreground text-center text-4xl font-extrabold tracking-tight text-balance">
        Playground
      </h1>
      <JokerSort />
      <CardsGrid items={sortedJokers as Joker[]}>
        {(joker) => <JokerCard {...joker} />}
      </CardsGrid>
    </main>
  );
}
