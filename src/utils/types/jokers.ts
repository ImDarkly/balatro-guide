export type Joker = {
  id: string;
  name: string;
  rarity: "Common" | "Legendary" | "Rare" | "Uncommon";
  effect: string;
  imageUrl: string;
  unlockRequirement: string;
  buyPrice: number;
  sellPrice: number;
  type:
    | "Additive Mult"
    | "Chips"
    | "Chips and Additive Mult"
    | "Economy"
    | "Effect"
    | "Multiplicative Mult"
    | "Retrigger";
  activation:
    | "Independent"
    | "Mixed"
    | "On Discard"
    | "On Held"
    | "On Other Jokers"
    | "On Played"
    | "On Scored"
    | "Passive";
  copyable: boolean;
  perishable: boolean;
  eternal: boolean;
};
