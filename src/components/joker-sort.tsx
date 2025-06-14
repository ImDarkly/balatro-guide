"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowDownAz, ArrowUpAZ, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { useQueryState } from "nuqs";

const JokerSort: React.FC = () => {
  const [sortOption, setSortOption] = useQueryState("sortOption", {
    defaultValue: "name-asc",
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary">
          <SlidersHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={sortOption || ""}
          onValueChange={setSortOption}
        >
          <DropdownMenuRadioItem value="name-asc">
            Name <ArrowDownAz />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name-desc">
            Name <ArrowUpAZ />
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="rarity-asc">
            Rarity: Common to Legendary
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rarity-desc">
            Rarity: Legendary to Common
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="buy_price_asc">
            Buy Price: Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="buy_price_desc">
            Buy Price: High to Low
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="sell_price_asc">
            Sell Price: Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sell_price_desc">
            Sell Price: High to Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default JokerSort;
