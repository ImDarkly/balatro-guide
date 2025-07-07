"use client";

import { useQueryState } from "nuqs";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export function JokerSearch() {
  const [query, setQuery] = useQueryState("query");
  const [input, setInput] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(input === "" ? null : input);
    }, 0);

    return () => clearTimeout(handler);
  }, [input, setQuery]);

  return (
    <div className="max-w-md flex gap-4 items-center">
      <Icon icon="pixelarticons:search" className="size-8" />
      <Input
        className="bg-primary placeholder:text-sky-200 border-sky-200"
        placeholder="search joker"
        value={input ?? ""}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
