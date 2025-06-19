// DEPRECATED: This file will be removed in v0.0.3-alpha. Use cards-grid.tsx instead.

import { getJokers } from "../lib/getJokers";
import JokerCard from "./joker-card";

const JokerGrid: React.FC = () => {
  const { jokers } = getJokers();

  return (
    <div className="grid gap-4  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {jokers.map((joker) => (
        <JokerCard key={joker.id} id={joker.id} />
      ))}
    </div>
  );
};

export default JokerGrid;
