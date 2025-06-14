"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { BACKGROUND_MODES, useBackground } from "../context/BackgroundContext";

const version = process.env.NEXT_PUBLIC_APP_VERSION;
const isDevelopment = process.env.NODE_ENV === "development";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const Footer: React.FC = () => {
  const { mode, setMode } = useBackground();

  return (
    <footer className="flex justify-between items-center gap-2 p-2">
      <p className="text-muted text-sm text-center">
        {`v${version}${isDevelopment ? ".dev" : ""}`}
      </p>
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
    </footer>
  );
};

export default Footer;
