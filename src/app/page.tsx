"use client";

import JokerGrid from "../components/joker-grid";
import Search from "../components/search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around p-4">
      <div className="flex h-[50vh] flex-col justify-center">
        <h1 className="scroll-m-20 text-primary-foreground text-center text-4xl font-extrabold tracking-tight text-balance">
          Arlecchino - Balatro Guide
        </h1>
        <p className="text-muted text-xl text-center">
          Simple online guide to quickly find the best Joker combinations for
          Balatro.
        </p>
      </div>
      <div className="w-full max-w-screen-lg gap-4 flex flex-col pb-9">
        <JokerGrid />
      </div>
    </main>
  );
}
