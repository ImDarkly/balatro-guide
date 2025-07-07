import React from "react";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const jokerFilterOptions = {
  rarity: {
    label: "Rarity",
    options: [
      { value: "Common", label: "Common" },
      { value: "Uncommon", label: "Uncommon" },
      { value: "Rare", label: "Rare" },
      { value: "Legendary", label: "Legendary" },
    ],
  },
  type: {
    label: "Type",
    options: [
      { value: "Additive Mult", label: "Additive Mult" },
      { value: "Chips", label: "Chips" },
      { value: "Chips and Additive Mult", label: "Chips & Additive Mult" },
      { value: "Economy", label: "Economy" },
      { value: "Effect", label: "Effect" },
      { value: "Multiplicative Mult", label: "Multiplicative Mult" },
      { value: "Retrigger", label: "Retrigger" },
    ],
  },
  activation: {
    label: "Activation",
    options: [
      { value: "Independent", label: "Independent" },
      { value: "Mixed", label: "Mixed" },
      { value: "On Discard", label: "On Discard" },
      { value: "On Held", label: "On Held" },
      { value: "On Other Jokers", label: "On Other Jokers" },
      { value: "On Played", label: "On Played" },
      { value: "On Scored", label: "On Scored" },
      { value: "N/A (Passive)", label: "N/A (Passive)" },
    ],
  },
  copyable: {
    label: "Copyable",
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" },
    ],
  },
  perishable: {
    label: "Perishable",
    options: [
      { value: "true", label: "Yes" },
      { value: "false", label: "No" },
    ],
  },
  eternal: {
    label: "Eternal",
    options: [
      { value: "true", label: "Yes" },
      { value: "No", label: "No" },
    ],
  },
};

export function JokerFilter() {
  const [filter, setFilter] = useQueryStates({
    rarity: parseAsArrayOf(parseAsString).withDefault([]),
    type: parseAsArrayOf(parseAsString).withDefault([]),
    activation: parseAsArrayOf(parseAsString).withDefault([]),
    copyable: parseAsArrayOf(parseAsString).withDefault([]),
    perishable: parseAsArrayOf(parseAsString).withDefault([]),
    eternal: parseAsArrayOf(parseAsString).withDefault([]),
  });
  const isFilterEmpty = Object.values(filter).every((arr) => arr.length === 0);

  const resetFilter = () => {
    setFilter({
      rarity: [],
      type: [],
      activation: [],
      copyable: [],
      perishable: [],
      eternal: [],
    });
  };

  return (
    <div>
      <div className="flex justify-between h-6">
        <Label className="text-base">Filter with</Label>
        {!isFilterEmpty && <Button onClick={resetFilter}>Reset</Button>}
      </div>
      {Object.entries(jokerFilterOptions).map(([category, config]) => (
        <div key={category}>
          <Label className="text-muted-foreground">{config.label}</Label>
          <div className="flex flex-wrap my-4">
            {config.options.map((option) => {
              const key = category as keyof typeof filter;
              const selected = filter[key] ?? [];
              const isChecked = selected.includes(option.value);

              function handleFilterChange(checked: boolean) {
                const updated = checked
                  ? [...selected, option.value]
                  : selected.filter((v) => v !== option.value);
                setFilter({ [category]: updated });
              }

              return (
                <div
                  key={option.value}
                  className="w-1/2 flex items-center gap-2 mb-2"
                >
                  <Checkbox
                    id={option.value}
                    checked={isChecked}
                    onCheckedChange={handleFilterChange}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
