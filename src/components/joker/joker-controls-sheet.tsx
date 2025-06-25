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
import JokerSort from "./joker-sort";
import JokerFilter from "./joker-filter";
import { Label } from "../ui/label";

const JokerControlsSheet: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary">
          <SlidersHorizontal />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sort & Filter</SheetTitle>
          <SheetDescription>Customize your Joker collection</SheetDescription>
        </SheetHeader>
        <div className="m-6">
          <Label className="text-base">Sort by</Label>
          <JokerSort />
          <JokerFilter />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default JokerControlsSheet;
