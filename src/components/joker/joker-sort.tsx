"use client";
import React from "react";
import { ArrowDownAz, ArrowUpAZ } from "lucide-react";
import { useQueryState } from "nuqs";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

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
export function JokerSort() {
  const [sort, setSort] = useQueryState("sort", {
    defaultValue: "rarity-asc",
  });

  return (
    <div>
      <Label className="text-base">Sort by</Label>
      <RadioGroup value={sort} onValueChange={setSort} className="py-4">
        {Object.entries(jokerSortOptions).map(([category, options]) => (
          <div key={category} className="gap-4">
            <Label className="text-muted-foreground">{category}</Label>
            <div className="flex flex-row gap-4 my-4">
              {options.map((option) => {
                const Icon = option.icon;
                return (
                  <div key={option.value} className="flex gap-1 flex-row">
                    <RadioGroupItem
                      id={option.value}
                      value={option.value}
                    ></RadioGroupItem>
                    <Icon className="size-3" />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
