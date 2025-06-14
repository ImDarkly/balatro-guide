export type Joker = {
  id: string;
  name: string;
  rarity: JokerRarity;
  effect: string;
  imageUrl: string;
  unlockRequirement: string;
  buyPrice: number;
  sellPrice: number;
  type: JokerType;
  activation: JokerActivation;
  copyable: boolean;
  perishable: boolean;
  eternal: boolean;
};

export const JOKER_RARITIES = [
  "Common",
  "Legendary",
  "Rare",
  "Uncommon",
] as const;

export type JokerRarity = (typeof JOKER_RARITIES)[number];

export const JOKER_TYPES = [
  "Additive Mult",
  "Chips",
  "Chips & Additive Mult",
  "Economy",
  "Effect",
  "Multiplicative Mult",
  "Retrigger",
] as const;

export type JokerType = (typeof JOKER_TYPES)[number];

export const JOKER_ACTIVATIONS = [
  "Independent",
  "Mixed",
  "On Discard",
  "On Held",
  "On Other Jokers",
  "On Played",
  "On Scored",
  "Passive",
] as const;

export type JokerActivation = (typeof JOKER_ACTIVATIONS)[number];
