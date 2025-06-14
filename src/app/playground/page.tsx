"use client";
import Search from "@/src/components/search";
import SortJoker from "@/src/components/joker-sort";
import JokerFilter from "@/src/components/joker-filter";

export default function Playground() {
  return (
    <main className="flex-grow flex flex-col items-center justify-between gap-2 p-16">
      <h1 className="scroll-m-20 text-primary-foreground text-center text-4xl font-extrabold tracking-tight text-balance">
        Playground
      </h1>
      <div className="flex-grow flex w-full items-center justify-center">
        <Search />
        <JokerFilter />
      </div>
    </main>
  );
}
