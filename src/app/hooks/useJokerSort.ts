import { Joker } from "@/src/utils/types/jokers";
import { useQueryState } from "nuqs";
import { useMemo } from "react";

const rarityOrder = {
  Common: 0,
  Uncommon: 1,
  Rare: 2,
  Legendary: 3,
};

export function useJokerSort(jokers: Joker[]) {
  const [sort] = useQueryState("sort");
  return useMemo(() => {
    const sortedJokers = [...jokers];
    switch (sort) {
      case "name-asc":
        sortedJokers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedJokers.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rarity-asc":
        sortedJokers.sort(
          (a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]
        );
        break;
      case "rarity-desc":
        sortedJokers.sort(
          (a, b) => rarityOrder[b.rarity] - rarityOrder[a.rarity]
        );
        break;
      case "buy-price-asc":
        sortedJokers.sort((a, b) => a.buyPrice - b.buyPrice);
        break;
      case "buy-price-desc":
        sortedJokers.sort((a, b) => b.buyPrice - a.buyPrice);
        break;
      case "sell-price-asc":
        sortedJokers.sort((a, b) => a.sellPrice - b.sellPrice);
        break;
      case "sell-price-desc":
        sortedJokers.sort((a, b) => b.sellPrice - a.sellPrice);
        break;
      default:
        sortedJokers.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return sortedJokers;
  }, [jokers, sort]);
}
