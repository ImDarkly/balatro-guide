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

export function getTypeColors(type: string) {
  switch (type) {
    case "Additive Mult":
      return "text-destructive";
    case "Chips":
      return "text-primary";
    case "Chips and Additive Mult":
      return "text-white";
    case "Economy":
      return "text-secondary";
    case "Effect":
      return "text-accent";
    case "Multiplicative Mult":
      return "text-destructive";
    case "Retrigger":
      return "text-accent";
    default:
      return "text-white";
  }
}
