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

const jokerSortOptions = {
  Name: [
    { value: "name-asc", label: "A-Z", icon: ArrowDownAz },
    { value: "name-desc", label: "Z-A", icon: ArrowUpAZ },
  ],
  Rarity: [
    { value: "rarity-asc", label: "Low-High", icon: ArrowDownAz },
    { value: "rarity-desc", label: "High-Low", icon: ArrowUpAZ },
  ],
  "Buy Price": [
    { value: "buy-price-asc", label: "Low-High", icon: ArrowDownAz },
    { value: "buy-price-desc", label: "High-Low", icon: ArrowUpAZ },
  ],
  "Sell Price": [
    { value: "sell-price-asc", label: "Low-High", icon: ArrowDownAz },
    { value: "sell-price-desc", label: "High-Low", icon: ArrowUpAZ },
  ],
};
const JokerSort: React.FC = () => {
  const [sort, setSort] = useQueryState("sort", {
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
        <DropdownMenuRadioGroup value={sort || ""} onValueChange={setSort}>
          {Object.entries(jokerSortOptions).map(
            ([category, options], index) => {
              return (
                <React.Fragment key={category}>
                  {index > 0 && <DropdownMenuSeparator />}
                  <DropdownMenuLabel>{category}</DropdownMenuLabel>
                  {options.map((option) => {
                    const Icon = option.icon;
                    return (
                      <DropdownMenuRadioItem
                        key={option.value}
                        value={option.value}
                      >
                        <Icon />
                        {option.label}
                      </DropdownMenuRadioItem>
                    );
                  })}
                </React.Fragment>
              );
            }
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default JokerSort;
