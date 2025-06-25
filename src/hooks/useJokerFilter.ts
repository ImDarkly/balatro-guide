import { Joker } from "@/src/utils/types/jokers";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import { useMemo } from "react";

export function useJokerFilter(jokers: Joker[]) {
  const [filter] = useQueryStates({
    rarity: parseAsArrayOf(parseAsString),
    type: parseAsArrayOf(parseAsString),
    activation: parseAsArrayOf(parseAsString),
  });

  return useMemo(() => {
    let filteredJokers = [...jokers];
    if (filter.rarity) {
      filteredJokers = filteredJokers.filter((joker) =>
        filter.rarity!.includes(joker.rarity)
      );
    }
    if (filter.type) {
      filteredJokers = filteredJokers.filter((joker) =>
        filter.type!.includes(joker.type)
      );
    }
    if (filter.activation) {
      filteredJokers = filteredJokers.filter((joker) =>
        filter.activation!.includes(joker.activation)
      );
    }
    return filteredJokers;
  }, [jokers, filter]);
}
