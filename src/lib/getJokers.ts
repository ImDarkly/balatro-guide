import jokers from "@/src/data/jokers.json";

export function getJokers() {
  return jokers;
}

export function getJokerById(id: string) {
  const all = getJokers();
  return all.jokers.find((joker) => joker.id === id);
}
