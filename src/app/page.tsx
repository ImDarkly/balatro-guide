"use client";
import { CardsGrid } from "../components/cards-grid";
import JokerCard from "../components/joker/joker-card";
import { Joker } from "../utils/types/jokers";
import { useJokerFilter } from "../hooks/useJokerFilter";
import { useJokerSort } from "../hooks/useJokerSort";
import { jokers } from "@/src/data/jokers.json";
import JokerControlsSheet from "../components/joker/joker-controls-sheet";
import { JokerSearch } from "../components/joker/joker-search";
import { useJokerSearch } from "../hooks/useJokerSearch";

export default function Home() {
  const searchedJokers = useJokerSearch(jokers as Joker[]);
  const filteredJokers = useJokerFilter(searchedJokers as Joker[]);
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
        <div className="flex flex-row justify-between">
          <JokerSearch />
          <JokerControlsSheet />
        </div>
        <CardsGrid items={sortedJokers as Joker[]}>
          {(joker) => <JokerCard key={joker.id} {...joker} />}
        </CardsGrid>
      </div>
    </main>
  );
}
