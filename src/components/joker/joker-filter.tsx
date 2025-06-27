import React from "react";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

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
      { value: "Chips & Additive Mult", label: "Chips & Additive Mult" },
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
      { value: "Passive", label: "Passive" },
    ],
  },
};

const JokerFilter: React.FC = () => {
  const [filter, setFilter] = useQueryStates({
    rarity: parseAsArrayOf(parseAsString).withDefault([]),
    type: parseAsArrayOf(parseAsString).withDefault([]),
    activation: parseAsArrayOf(parseAsString).withDefault([]),
  });

  return (
    <div>
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
};

export default JokerFilter;
