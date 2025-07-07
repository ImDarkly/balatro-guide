import { SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import { Badge } from "../ui/badge";
import { Icon } from "@iconify/react";
import { JokerSort } from "./joker-sort";
import { JokerFilter } from "./joker-filter";

export function JokerControlsSheet() {
  const [filter] = useQueryStates({
    rarity: parseAsArrayOf(parseAsString).withDefault([]),
    type: parseAsArrayOf(parseAsString).withDefault([]),
    activation: parseAsArrayOf(parseAsString).withDefault([]),
    copyable: parseAsArrayOf(parseAsString).withDefault([]),
    perishable: parseAsArrayOf(parseAsString).withDefault([]),
    eternal: parseAsArrayOf(parseAsString).withDefault([]),
  });

  const appliedCount = Object.values(filter).reduce(
    (count, arr) => count + (arr.length > 0 ? 1 : 0),
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary" className="relative">
          <Icon icon="pixelarticons:sliders" className="size-6" />
          {appliedCount > 0 && (
            <Badge className="absolute -top-2 -right-2">{appliedCount}</Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>Sort & Filter</SheetTitle>
          <SheetDescription>Customize your Joker collection</SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="mx-6">
            <JokerSort />
            <JokerFilter />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
