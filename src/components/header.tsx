"use client";
import Link from "next/link";
import BackgroundSwitch from "./background/background-switch";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isJokerPage = pathname.startsWith("/joker/");

  return (
    <header className="flex h-20 w-full p-2 sticky top-0 items-center justify-between">
      {isJokerPage && (
        <Link href="/">
          <Button size="icon">
            <Icon icon="pixelarticons:arrow-left" className="size-6" />
          </Button>
        </Link>
      )}
      <Link href="/" className="text-xl">
        Arlechino
      </Link>
      <BackgroundSwitch />
    </header>
  );
};

export default Header;
