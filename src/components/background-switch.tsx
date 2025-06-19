"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { BACKGROUND_MODES, useBackground } from "../context/BackgroundContext";
import { capitalize } from "../utils/string";

const BackgroundSwitch: React.FC = () => {
  const { mode, setMode } = useBackground();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{capitalize(mode)}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {BACKGROUND_MODES.map((m) => (
          <DropdownMenuItem key={m} onClick={() => setMode(m)}>
            {capitalize(m)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BackgroundSwitch;
