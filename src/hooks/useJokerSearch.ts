import { useQueryState } from "nuqs";
import { Joker } from "../utils/types/jokers";
import { useMemo } from "react";

export function useJokerSearch(jokers: Joker[]) {
  const [query] = useQueryState("query");

  const normalizedQuery = (query ?? "").toLowerCase().trim();

  const searchedJokers = useMemo(() => {
    if (!normalizedQuery) return jokers;

    return jokers.filter((joker) =>
      joker.name.toLowerCase().includes(normalizedQuery)
    );
  }, [jokers, normalizedQuery]);

  return searchedJokers;
}
