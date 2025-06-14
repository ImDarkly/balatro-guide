import React from "react";
import { Input } from "./ui/input";
import { Filter, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import JokerSort from "./joker-sort";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className="relative flex justify-between items-center">
      <Input className="w-64 bg-background ps-9 pe-9" placeholder="Search..." />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <SearchIcon size={16} />
      </div>
      <div className="gap-2 flex">
        <JokerSort />
        <Button variant="secondary" size="icon">
          <Filter />
        </Button>
      </div>
    </div>
  );
};

export default Search;
