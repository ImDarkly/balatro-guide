"use client";
import { CardsGrid } from "../components/cards-grid";
import JokerCard from "../components/joker/joker-card";
import { Joker } from "../utils/types/jokers";
import { useJokerFilter } from "../hooks/useJokerFilter";
import { useJokerSort } from "../hooks/useJokerSort";
import { jokers } from "@/jokers-parse.json";
import JokerControlsSheet from "../components/joker/joker-controls-sheet";

export default function Home() {
  const filteredJokers = useJokerFilter(jokers as Joker[]);
  const sortedJokers = useJokerSort(filteredJokers as Joker[]);

  return (
    <main className="flex flex-col items-center justify-around p-4">
      <div className="flex h-[30vh] flex-col justify-center">
        <h1 className="scroll-m-20 text-primary-foreground text-center text-4xl font-extrabold tracking-tight text-balance">
          Arlecchino - Balatro Guide
        </h1>
        <p className="text-muted text-xl text-center">
          Simple online guide to quickly find the best Joker combinations for
          Balatro.
        </p>
      </div>
      <div className="w-full max-w-screen-lg gap-4 flex flex-col pb-9">
        <JokerControlsSheet />
        <CardsGrid items={sortedJokers as Joker[]}>
          {(joker) => <JokerCard key={joker.id} {...joker} />}
        </CardsGrid>
      </div>
    </main>
  );
}
