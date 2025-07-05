export function getRarityColors(rarity: string) {
  switch (rarity) {
    case "Common":
      return "bg-primary";
    case "Uncommon":
      return "bg-accent";
    case "Rare":
      return "bg-destructive";
    case "Legendary":
      return "bg-secondary";
    default:
      return "bg-primary";
  }
}
