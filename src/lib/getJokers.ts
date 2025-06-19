import jokers from "@/src/data/jokers.json";
import { Joker } from "../utils/types/jokers";

interface JokersData {
  jokers: Joker[];
}

export function getJokers() {
  return jokers as JokersData;
}

export function getJokerById(id: string) {
  const all = getJokers();
  return all.jokers.find((joker) => joker.id === id);
}
